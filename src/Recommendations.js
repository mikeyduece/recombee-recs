import React, { Component } from 'react'
import Movie from './Movie'

export default class Recommendations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recomms: []
    }
  }

  componentDidMount(){
    this.getRecs()
    this.renderRecommendations()
  }

  getRecs() {
    let movieId = this.props.location.state.movieId
    fetch('https://recombee-api.herokuapp.com/api/v1/' + movieId + '/recomms')
      .then(response => response.json())
      .then(data => {
        this.setState({recomms: data})
        localStorage.setItem('recs'+movieId, JSON.stringify(data))
      })
  }

  renderRecommendations() {
    let movieId = this.props.location.state.movieId
    let recommendations = `recs${movieId}`
    if(localStorage.getItem(recommendations) !== null){
      let recs = JSON.parse(localStorage.getItem(recommendations))
      return recs.map((movie, i) => {
        return(<Movie key={movie.id} movie={movie} />)
      })
    }else{
      return this.getRecs()
    }
  }

  render() {
    return(
      <div>
        <h1>Recommendations</h1>
        {this.renderRecommendations()}
      </div>
    )
  }
}
