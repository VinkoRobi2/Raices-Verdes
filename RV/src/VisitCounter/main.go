package main

import (
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"net/http"
)

type Visitante struct {
	ID        uint   `gorm:"primaryKey"`
	IPAddress string `gorm:"size:45"`
	CreatedAt string
}

var db *gorm.DB
var err error

func Ipexist(ip string) bool {
	var exists bool
	db.Raw("SELECT EXISTS(SELECT 1 FROM visitantes WHERE ip_address = ?)", ip).Scan(&exists)
	return exists
}

func GetTotalVisitas() int64 {
	var count int64
	db.Model(&Visitante{}).Count(&count)
	return count
}

func GetVisita(c *gin.Context) {
	Ip_address := c.ClientIP()

	if Ipexist(Ip_address) {
		return
	}

	Visita := Visitante{IPAddress: Ip_address}
	if err := db.Create(&Visita).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "No se pudo guardar la IP"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"total_visitas": GetTotalVisitas(),
	})
}

func main() {
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"https://mi-front-end.com"},
		AllowMethods:     []string{"GET", "POST"},
		AllowHeaders:     []string{"Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	dsn := "postgresql://root:dpzBxAiHrmnwfGoxDlW5gGs6RFPpeQgQ@dpg-ctmm9hrtq21c73fa2h10-a/visitantes_db"
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Printf("No se pudo conectar a la base de datos: %s\n", err)
		os.Exit(1)
	}

	db.AutoMigrate(&Visitante{})

	router.GET("/Visitorcount", GetVisita)
	router.Run(":8080")
}
