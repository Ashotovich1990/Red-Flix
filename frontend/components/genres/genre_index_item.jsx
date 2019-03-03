import React from 'react';
import MovieListItemContainer from './movies/movie_list_item_container'

class GenreIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hovered: null}
    this.onMouseEnterHandle = this.onMouseEnterHandle.bind(this)
    this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this)
  }
  
  onMouseEnterHandle(movie_id) {
    return (e) => {
      this.setState({hovered: movie_id})
    }
  }
  
  onMouseLeaveHandle(e) {
    this.setState({hovered: null})
  }

  render () {
    return (
      <div className="genre">
            <h1>{this.props.genreName}</h1>
          <ul className='genre-list'>
            {this.props.movies.map(movie => (<li key={movie.id}
            onMouseEnter={this.onMouseEnterHandle(movie.id)}
            onMouseLeave={this.onMouseLeaveHandle}
            ><MovieListItemContainer hovered={this.state.hovered} content={movie}/></li>))}
          </ul>
      </div>
    );
  }
}

export default GenreIndexItem;

