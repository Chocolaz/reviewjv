//65130500063 ภูมิระพี ไชยสา
class Movies {
  constructor() {
    this.movies = []
  }
  
  getAllMovies() {
    return this.movies
  }

  addMovie(title, director, year, genre) {
    if (!title || !director || !year || !genre) {
      return undefined
    }

    const lowerCaseTitle = title.toLowerCase()
    const lowerCaseDirector = director.toLowerCase()

    // Check for duplicate movie
    const duplicateMovie = this.movies.find(
      (movie) =>
        movie.title.toLowerCase() === lowerCaseTitle &&
        movie.director.toLowerCase() === lowerCaseDirector
    )

    if (duplicateMovie) {
      return undefined // Duplicate movie found
    }

    const newMovie = {
      title,
      director,
      year,
      genre
    }
      this.movies.push(newMovie)
      return newMovie
    
  }

  updateMovie(title, updatedDetails) {
    const toUpdate = this.movies.find(movies => movies.title.toLowerCase() === title.toLowerCase())
    if (!toUpdate) {
      return undefined
    }
    Object.assign(toUpdate, updatedDetails)
      return toUpdate
    }

  deleteMovieByTitle(title) {
    const toDelete = this.movies.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase())
      if (toDelete === -1) {
        return 'no movie deleted'
      }
      return this.movies.splice(toDelete, 1)
    }
  }

module.exports = Movies
