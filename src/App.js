import React, { Component } from 'react';
import {Link} from 'react-router-dom'
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
      return (<div key={i} className='card'>
                <div className='movie-card'>
                    <p>{movie.title}</p>
                    <p>{movie.genre}</p>
                    <Link to={{pathname: '/recommendations', state: {movieId: movie.id}}}>Recommendations</Link>
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
