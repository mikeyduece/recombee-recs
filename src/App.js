import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentWillMount(){
    this.getAllMovies()
  }

  getAllMovies(){
    fetch('https://recombee-api.herokuapp.com/api/v1/all_movies')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('movies', JSON.stringify(data))
       })
  }

  handleMovies(){
    let movies = JSON.parse(localStorage.movies)
    return movies.map((movie, i) => {
      return (<div key={i} className='movie-card'>
                <div className='movie-title-container'>
                  <p>{movie.title}</p>
                </div>
                <div className='movie-genre-container'>
                  <p>{movie.genre}</p>
                </div>
              </div>
      )
    })
  }

  render() {
    return (
      <div className="App">
        {this.handleMovies()}
      </div>
    );
  }
}

export default App;
