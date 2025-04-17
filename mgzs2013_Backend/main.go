package main

//mongodb+srv://mgzs2013:Homeo@798@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var client *mongo.Client

func main() {
	// Set up MongoDB connection
	var err error
	client, err = mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb+srv://mgzs2013:05LodVkmfGtRaV8X@mgzs2013.zbnwnrq.mongodb.net/?retryWrites=true&w=majority&appName=mgzs2013"))
	if err != nil {
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Connected to MongoDB!")

	// Set up Gin router
	r := gin.Default()

	// Define routes here
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Hello, World!"})
	})

	// Start the server
	r.Run(":8080") // Default listens on :8080
}
