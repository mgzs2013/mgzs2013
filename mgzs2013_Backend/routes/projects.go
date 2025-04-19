package routes

import (
	"context"
	"log"
	"net/http"

	"mgzs2013_Backend/models" // Adjust the import path
	"mgzs2013_Backend/mongodb"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
)

func GetProjects(c *gin.Context) {
	log.Println("[DEBUG] GetProjects() was invoked.")

	collection := mongodb.Client.Database("mgzs2013_portfolio").Collection("projects")
	log.Println("[DEBUG] collection being retrieved from Db:", collection)

	cursor, err := collection.Find(context.TODO(), bson.D{{}})
	if err != nil {
		log.Println("[ERROR] Failed to find documents:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer cursor.Close(context.TODO())

	// Log the number of documents found
	count, err := collection.CountDocuments(context.TODO(), bson.D{{}})
	if err != nil {
		log.Println("[ERROR] Failed to count documents:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	log.Println("[DEBUG] Number of documents found:", count)

	var projects []models.Project
	for cursor.Next(context.TODO()) {
		var project models.Project
		if err := cursor.Decode(&project); err != nil {
			log.Println("[ERROR] Failed to decode project:", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		projects = append(projects, project)
	}

	if err := cursor.Err(); err != nil {
		log.Println("[ERROR] Cursor encountered an error:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, projects) // Return the list of projects as JSON
}
