import React, { Component } from 'react';
import Movie from './Movie'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      page: 1,
    }
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
  }

  componentDidMount(){
    this.getAllMovies()
  }

  getAllMovies(page=null){
    fetch('https://recombee-api.herokuapp.com/api/v1/all_movies?page='+page)
      .then(response => response.json())
      .then(data => {
        this.setState({movies: data})
       })
  }

  nextPage(){
    let page = this.state.page
    page++
    this.setState({page: page})
    this.getAllMovies(page)
  }

  previousPage(){
    let page = this.state.page
    page--
    this.setState({page: page})
    this.getAllMovies(page)
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map(movie => {
          return <Movie key={movie.id} movie={movie} />
        })
        }
        <button onClick={this.previousPage} className='previous'>Previous</button>
        <button onClick={this.nextPage} className='next'>Next</button>
      </div>
    );
  }
}

export default App;
