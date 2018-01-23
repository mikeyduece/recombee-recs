import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Movie from './Movie'
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
      return (<Movie key={movie.id} movie={movie}/>)
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
