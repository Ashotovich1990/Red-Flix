import React from 'react';
import MovieListItemContainer from './movies/movie_list_item_container';
import {Link} from 'react-router-dom';
import MovieDropbarContainer from './movies/movie_list_dropbar_container';

class GenreIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hovered: null, browse: null, start: 0, end: 6}
    this.onMouseEnterHandle = this.onMouseEnterHandle.bind(this)
    this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this)
    this.onMouseEnterBrowse = this.onMouseEnterBrowse.bind(this)
    this.onMouseLeaveBrowse = this.onMouseLeaveBrowse.bind(this)
    this.handleScrollRight = this.handleScrollRight.bind(this);
    this.handleScrollLeft = this.handleScrollLeft.bind(this);
  }
  
  onMouseEnterHandle(movie_id) {
    return (e) => {
      this.setState({hovered: movie_id})
    }
  }
  
  onMouseLeaveHandle(e) {
    this.setState({hovered: null})
  }

  onMouseEnterBrowse() {
    if (this.props.genreId === '0') {
      this.setState( {browse: 'open my list' });
    } else {
    this.setState( {browse: 'browse all' });
    }
  }

  onMouseLeaveBrowse() {
    this.setState( {browse: null });
  }

  handleScrollRight() {
    if (this.state.end <= this.props.movies.length) {
     this.setState( { start: this.state.start + 1, end: this.state.end + 1 })
    }
  }

  handleScrollLeft() {
    if (this.state.start > 0) {
    this.setState( { start: this.state.start - 1, end: this.state.end - 1 })
    }
 }
  
  render () {
  
    const myListMessage = (this.props.genreUrl === '0' && !this.props.myList[0].length) ? 
    <div className='my-list-empty'>
        <div id='my-list-message'>You haven't added any titles to your list yet</div>
    </div> : 
    <div></div> ;

    if (this.props.genreId === '0' && !this.props.genreLists['0'].length) {
      
      return <div id='my-list-message'>{myListMessage}</div>;
    } 
    
    const genreType = this.props.genreUrl === '0' ? "my-list" : "genre";
    
    return (
      <div className={genreType}>
            {myListMessage}
            <Link id="link-to-new-page"
            onClick={() => this.props.fetchGenre(this.props.genreId)}
            onMouseEnter={this.onMouseEnterBrowse}
            onMouseLeave={this.onMouseLeaveBrowse}
            to={`/browse/${this.props.genreId}`}><div className="genre-browse">{this.props.genreName} <div id="brows-icon">{this.state.browse}</div></div></Link>
          <ul className='genre-list'>
            {this.props.movies.slice(this.state.start,this.state.end).map(movie => (<li key={movie.id}
            onMouseEnter={this.onMouseEnterHandle(movie.id)}
            onMouseLeave={this.onMouseLeaveHandle}
            ><MovieListItemContainer genreId={this.props.genreId} hovered={this.state.hovered} content={movie}/></li>))}
          </ul>
          <div onClick={this.handleScrollLeft} id='move-arrow-left'><i class="fas fa-arrow-left"></i></div>
          <div onClick={this.handleScrollRight} id='move-arrow-right'><i class="fas fa-arrow-right"></i></div>
          <MovieDropbarContainer genreId={this.props.genreId}/>
      </div>
    );
  }
}

export default GenreIndexItem;

