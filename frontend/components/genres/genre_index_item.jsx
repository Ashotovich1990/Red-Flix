import React from 'react';
import MovieListItemContainer from './movies/movie_list_item_container';
import {Link} from 'react-router-dom';
import MovieDropbarContainer from './movies/movie_list_dropbar_container';


class GenreIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hovered: null, browse: "", start: 0, end: 6, showArrows: false, linkArrow: <div></div>}
    this.onMouseEnterHandle = this.onMouseEnterHandle.bind(this)
    this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this)
    this.onMouseEnterBrowse = this.onMouseEnterBrowse.bind(this)
    this.onMouseLeaveBrowse = this.onMouseLeaveBrowse.bind(this)
    this.handleScrollRight = this.handleScrollRight.bind(this);
    this.handleScrollLeft = this.handleScrollLeft.bind(this);
    this.scrollToItem = this.scrollToItem.bind(this)
    this.handleHideArrows = this.handleHideArrows.bind(this);
    this.handleShowArrows = this.handleShowArrows.bind(this);
    this.onMouseEnterLinkArrow = this.onMouseEnterLinkArrow.bind(this);
    this.onMouseLeaveLinkArrow = this.onMouseLeaveLinkArrow.bind(this);
  }
  
  onMouseEnterLinkArrow() {
    this.setState( {linkArrow: <i class="fas fa-chevron-right"></i>})
  }
  
  onMouseLeaveLinkArrow() {
    this.setState( {linkArrow: <div></div>})
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
    let str;
    if (this.props.genreId === '0') {
      str = 'open my list'
    } else {
      str = 'browse all' 
    }
    let time = 0;
    if (this.state.browse === "") {
      for (let i = 0; i < str.length; i++) {
        time += 30
        setTimeout(() => {
          this.setState( {browse: this.state.browse + str[i] });
        }, time)
      }
    }
  }
  
  onMouseLeaveBrowse() {
    if (this.state.browse === "browse all" || this.state.browse === "open my list") {
      this.setState( {browse: "" });
    }
  }

  scrollToItem() {
    const scrollItem = document.getElementById("movie-logo");
    scrollItem.scrollIntoView(false);
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

 handleShowArrows() {
    this.setState({showArrows: true})
 }

 handleHideArrows() {
  this.setState({showArrows: false})
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

    const leftArrow = this.state.showArrows ? <div onClick={this.handleScrollLeft} className='move-arrow-left'><i className="fas fa-arrow-left"></i></div > : <div className="empty-left-arrow"><i className="fas fa-arrow-left"></i></div>;
    const rightArrow = this.state.showArrows ? <div onClick={this.handleScrollRight} className='move-arrow-right'><i className="fas fa-arrow-right"></i></div> : <div className="empty-rigth-arrow"><i className="fas fa-arrow-right"></i></div>;

    return (
      <div className={genreType}
      onMouseEnter={this.onMouseEnterLinkArrow}
      onMouseLeave={this.onMouseLeaveLinkArrow}
      >
            {myListMessage}
            <Link className="link-to-new-page"
            onClick={() => this.props.fetchGenre(this.props.genreId)}
            to={`/browse/${this.props.genreId}`}>
            <div 
            onMouseEnter={this.onMouseEnterBrowse}
            onMouseLeave={this.onMouseLeaveBrowse}
            className="genre-browse">{this.props.genreName}<div id="brows-icon">{this.state.browse}</div><div className="new-link-arrow">{this.state.linkArrow}</div></div></Link>
            {leftArrow}
          <ul 
           onMouseEnter={this.handleShowArrows}
           onMouseLeave={this.handleHideArrows}
          className='genre-list'>
            {this.props.movies.slice(this.state.start,this.props.movies.length).map(movie => (<li key={movie.id}
            onMouseEnter={this.onMouseEnterHandle(movie.id)}
            onMouseLeave={this.onMouseLeaveHandle}
            ><MovieListItemContainer genreId={this.props.genreId} hovered={this.state.hovered} content={movie}/></li>))}
          </ul>
          {rightArrow}
          <MovieDropbarContainer genreId={this.props.genreId}/>
      </div>
    );
  }
}

export default GenreIndexItem;

