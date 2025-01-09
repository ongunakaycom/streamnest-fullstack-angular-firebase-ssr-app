package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/rs/cors"
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

func fetchMovies(imdbID string, apiKey string) (*Movie, error) {
	url := fmt.Sprintf("https://www.omdbapi.com/?i=%s&apikey=%s", imdbID, apiKey)
	log.Printf("Fetching URL: %s\n", url)

	resp, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch data: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("unexpected status code: %d", resp.StatusCode)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to read response body: %v", err)
	}

	log.Printf("Response Body: %s\n", string(body))

	var movie Movie
	if err := json.Unmarshal(body, &movie); err != nil {
		return nil, fmt.Errorf("failed to unmarshal JSON: %v", err)
	}

	log.Printf("Parsed Movie: %+v\n", movie)

	return &movie, nil
}

func getMovies(w http.ResponseWriter, r *http.Request) {
	apiKey := os.Getenv("OMDB_API_KEY")
	log.Printf("API Key: %s\n", apiKey) // Log the API Key for verification
	if apiKey == "" {
		log.Println("API key is not set")
		http.Error(w, "API key is not set", http.StatusInternalServerError)
		return
	}

	movie, err := fetchMovies("tt3896198", apiKey)
	if err != nil {
		log.Printf("Failed to fetch movie data: %v\n", err)
		http.Error(w, fmt.Sprintf("Failed to fetch movie data: %v", err), http.StatusInternalServerError)
		return
	}

	// Wrap the movie in an array
	movies := []Movie{*movie}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(movies); err != nil {
		log.Printf("Failed to encode movie data: %v\n", err)
		http.Error(w, fmt.Sprintf("Failed to encode movie data: %v", err), http.StatusInternalServerError)
		return
	}
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8081"
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/movies", getMovies)

	// Serve static files from the "dist" directory
	fs := http.FileServer(http.Dir("./dist"))
	mux.Handle("/", fs)

	// Enable CORS
	handler := cors.Default().Handler(mux)

	log.Printf("Server running on port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, handler))
}
