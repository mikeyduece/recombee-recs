import React, { Component } from 'react';
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

  handleRecommendations(movie_id){
    fetch('https://recombee-api.herokuapp.com/api/v1/' + movie_id + '/recomms')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('recs'+movie_id, JSON.stringify(data))
        debugger
      })
  }

  handleMovies(){
    let movies = JSON.parse(localStorage.movies)
    return movies.map((movie, i) => {
      return (<Movie key={movie.id}
                     movie={movie}
                     getRecs={this.handleRecommendations.bind(this)}/>)
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
