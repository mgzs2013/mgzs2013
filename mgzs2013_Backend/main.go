package main

import (
	"log"
	"mgzs2013_Backend/mongodb"
	"mgzs2013_Backend/routes"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

var client *mongo.Client

func main() {
	// Set up MongoDB connection

	mongodb.Connect("mongodb+srv://mgzs2013:05LodVkmfGtRaV8X@mgzs2013.zbnwnrq.mongodb.net/?retryWrites=true&w=majority&appName=mgzs2013")

	// Set up Gin router
	r := gin.Default()

	// CORS configuration
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},                                       // Allow all origins
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}, // Allowed HTTP methods
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"}, // Allowed headers
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,           // Allow credentials
		MaxAge:           12 * time.Hour, // Cache preflight response for 12 hours
	}))

	// Define routes here
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Hello, World!"})
	})

	r.GET("/projects", routes.GetProjects) // Register the projects route

	// Start the server
	if err := r.Run(":8080"); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
