package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type Movie struct {
	Title    string `json:"Title"`
	Year     string `json:"Year"`
	Genre    string `json:"Genre"`
	Director string `json:"Director"`
	Actors   string `json:"Actors"`
	Plot     string `json:"Plot"`
	Poster   string `json:"Poster"`
}

const apiKey = "2261744f"

// Fetch movies from OMDb API
func fetchMovies(title string) (*Movie, error) {
	url := fmt.Sprintf("https://www.omdbapi.com/?t=%s&apikey=%s", title, apiKey)
	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	// Read the response body
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	// Parse the JSON response into the Movie struct
	var movie Movie
	if err := json.Unmarshal(body, &movie); err != nil {
		return nil, err
	}

	return &movie, nil
}

func getMovies(w http.ResponseWriter, r *http.Request) {
	// Example: Fetching data for the movie "Inception"
	movie, err := fetchMovies("Inception")
	if err != nil {
		http.Error(w, "Failed to fetch movie data", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(movie)
}

func main() {
	http.HandleFunc("/movies", getMovies)

	port := "8081" // Change this to 8081 or your preferred port
	log.Printf("Server running on port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
