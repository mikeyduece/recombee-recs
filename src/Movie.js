import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Movie extends Component {
  handleClick(e){
    let movie_id = e.target.closest('div').id
    this.props.getRecs(movie_id)
  }
  render(){
    return(
      <div className='card'>
        <div id={this.props.movie.id} className='movie-card'>
          <p>{this.props.movie.title}</p>
          <p>{this.props.movie.genre}</p>
          <Link to={{pathname: '/recommendations', state: {movieId: this.props.movie.id}}}
                onClick={this.handleClick.bind(this)}>Recommendations</Link>
        </div>
      </div>
    )
  }
}
