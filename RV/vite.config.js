import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import path from 'path';


export default defineConfig({
  plugins: [million.vite({auto: true}),react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'), 
    },
  },
});
