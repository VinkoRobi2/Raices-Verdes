package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"net/http"
	"os"
	"time"
)

type Visitante struct {
	ID        uint      `gorm:"primaryKey"`
	IPAddress string    `gorm:"size:45"`
	CreatedAt time.Time `gorm:"autoCreateTime"`
}

var db *gorm.DB
var err error

func Ipexist(ip string) bool {
	var exists bool
	err := db.Raw("SELECT EXISTS(SELECT 1 FROM visitas WHERE ip_address = ?)", ip).Scan(&exists).Error
	if err != nil {
		log.Println("Error al consultar la base de datos:", err)
		return false
	}
	return exists
}


func GetTotalVisitas() int64 {
	var count int64
	err := db.Model(&Visitante{}).Count(&count).Error
	if err != nil {
		log.Println("Error al contar las visitas:", err)
		return 0
	}
	return count
}

func GetVisita(c *gin.Context) {
	Ip_address := c.ClientIP()


	if Ipexist(Ip_address) {
		c.JSON(http.StatusOK, gin.H{
			"total_visitas": GetTotalVisitas(),
		})
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
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" 
	}


	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"https://mi-frontend.render.com"}, 
		AllowMethods:     []string{"GET", "POST"},
		AllowHeaders:     []string{"Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))


	dsn := os.Getenv("DATABASE_URL") 
	if dsn == "" {
		dsn = "root:admin@tcp(127.0.0.1:3306)/VisitantesDB?charset=utf8mb4&parseTime=True&loc=Local" 
	}
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("No se pudo conectar a la base de datos:", err)
	}


	err = db.AutoMigrate(&Visitante{})
	if err != nil {
		log.Fatal("Error al migrar la base de datos:", err)
	}


	router.GET("/Visitorcount", GetVisita)


	log.Printf("Servidor escuchando en el puerto %s...", port)
	err = router.Run(":" + port)
	if err != nil {
		log.Fatal("Error al arrancar el servidor:", err)
	}
}
