import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      recs: [],
    }
  }

  componentDidMount(){
    this.getAllMovies()
  }

  getAllMovies(){
    fetch('https://recombee-api.herokuapp.com/api/v1/all_movies')
      .then(response => response.json())
      .then(data => {
        debugger
        this.setState({movies: data})
      })
  }

  handleMovies(){
    let movies = this.state.movies
    // debugger
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
