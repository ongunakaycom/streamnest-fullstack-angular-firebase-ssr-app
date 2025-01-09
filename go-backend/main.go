package main

import (
    "encoding/json"
    "log"
    "net/http"
)

type Movie struct {
    Title       string `json:"title"`
    Description string `json:"description"`
    Poster      string `json:"poster"`
}

func getMovies(w http.ResponseWriter, r *http.Request) {
    // Mock movie data (replace with API calls later if needed)
    movies := []Movie{
        {"Inception", "A mind-bending thriller", "https://example.com/inception.jpg"},
        {"The Matrix", "A sci-fi classic", "https://example.com/matrix.jpg"},
    }
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(movies)
}

func main() {
    http.HandleFunc("/movies", getMovies)
    log.Println("Server running on port 8080")
    log.Fatal(http.ListenAndServe(":8081", nil))
}
