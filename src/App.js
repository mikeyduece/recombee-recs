import React, { Component } from 'react';
import Movie from './Movie'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recomms: [],
      page: 1,
    }
  }

  componentWillMount(){
    this.getAllMovies()
  }

  componentDidMount(){
    this.getAllMovies()
  }

  getAllMovies(){
    let page = JSON.parse(localStorage.page)
    fetch('https://recombee-api.herokuapp.com/api/v1/all_movies?page='+page)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('movies', JSON.stringify(data))
       })
  }

  shouldComponentUpdate(nextState){
    if(this.state !== nextState){
      return true
    }
  }

  componentWillUpdate(){
    this.handleMovies()
  }

  handleMovies(){
    if(localStorage.movies !== null && localStorage.movies !== undefined){
      console.log('if statement')
      let movies = JSON.parse(localStorage.movies)
      return movies.map((movie, i) => {
        return (<Movie key={movie.id}
                       movie={movie}
                />)
      })
    }
  }

  handlePages(e){
    e.preventDefault()
    let page = JSON.parse(localStorage.page) || 1
    if(e.target.innerText === 'Next'){
      page++
      this.setState({page: page})
      localStorage.setItem('page', JSON.stringify(page))
      this.getAllMovies()
    }else{
      page--
      this.setState({page: page})
      localStorage.setItem('page', JSON.stringify(page))
      this.getAllMovies()
    }
  }

  render() {
    return (
      <div className="App">
        {this.handleMovies()}
        <button onClick={this.handlePages.bind(this)} className='previous'>Previous</button>
        <button onClick={this.handlePages.bind(this)} className='next'>Next</button>
      </div>
    );
  }
}

export default App;
