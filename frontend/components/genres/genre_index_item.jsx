import React from 'react';
import MovieListItemContainer from './movies/movie_list_item_container';
import {Link} from 'react-router-dom';
import MovieDropbarContainer from './movies/movie_list_dropbar_container';


class GenreIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hovered: null, browse: "", start: 0, end: 6, showArrowLeft: false, showArrowRight: false, linkArrow: <div></div>, style: 'genre-list'}
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
    this.isLiknedGenre = this.isLiknedGenre.bind(this);
    this.handleCarouselStyle = this.handleCarouselStyle.bind(this);
  }

  handleCarouselStyle() {
    if (this.props.dropDownMovie.genreId === this.props.genreId) {
      this.setState( { style: 'genre-list-no-trasform' })
    } else {
      this.setState( { style: 'genre-list' })
    }
  }
  
  componentDidUpdate(prev) {
    if (this.props.dropDownMovie.genreId !== prev.dropDownMovie.genreId) {
        this.handleCarouselStyle()
    }
  }

  onMouseEnterLinkArrow() {
    this.setState( {linkArrow: <i class="fas fa-chevron-right"></i>})
  }
  
  onMouseLeaveLinkArrow() {
    if (this.state.browse === "") this.setState( {linkArrow: <div></div>})
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
    this.setState( {linkArrow: <i class="fas fa-chevron-right"></i>})
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
      this.setState( {browse: "",  linkArrow: <div></div> });
    }
  }

  scrollToItem() {
    const scrollItem = document.getElementById("movie-logo");
    scrollItem.scrollIntoView(false);
  }


  handleScrollRight() {
    if (this.state.end <= this.props.movies.length) {
      this.setState( { start: this.state.start + 1, end: this.state.end + 1 }, ()=> {
        this.handleShowArrows()
      })
    }
  }

  handleScrollLeft() {
    if (this.state.start > 0) {
      this.setState( { start: this.state.start - 1, end: this.state.end - 1 }, () => { 
        this.handleShowArrows()
      })
    }
 }

 handleShowArrows() {
    if (this.state.start !== 0) {
      this.setState({showArrowLeft: true})
    } else {
      this.setState({showArrowLeft: false})
    }
    if (this.props.movies.length >= 7) {
      this.setState({showArrowRight: true})
    } else {
      this.setState({showArrowRight: false})
    }
 }

 isLiknedGenre() {
   if (this.props.genreId !== this.props.genreUrl) {
      return (
        <Link className="link-to-new-page"
          onClick={() => this.props.fetchGenre(this.props.genreId)}
          to={`/browse/${this.props.genreId}`}>
          <div 
          onMouseEnter={this.onMouseEnterBrowse}
          onMouseLeave={this.onMouseLeaveBrowse}
          className="genre-browse">{this.props.genreName}<div id="brows-icon">{this.state.browse}</div><div className="new-link-arrow">{this.state.linkArrow}</div></div>
        </Link>
      )
   } else {
     return (
        <div className="genre-browse-no-link">{this.props.genreName}</div>
     )
   }
 }

 handleHideArrows() {
  this.setState({showArrowLeft: false, showArrowRight: false})
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

    const leftArrow = this.state.showArrowLeft ? <div onClick={this.handleScrollLeft} className='move-arrow-left'><i className="fas fa-arrow-left"></i></div > : <div className="empty-left-arrow"><i className="fas fa-arrow-left"></i></div>;
    const rightArrow = this.state.showArrowRight ? <div onClick={this.handleScrollRight} className='move-arrow-right'><i className="fas fa-arrow-right"></i></div> : <div className="empty-rigth-arrow"><i className="fas fa-arrow-right"></i></div>;

    return (
      <div className={genreType}
      onMouseEnter={this.onMouseEnterLinkArrow}
      onMouseLeave={this.onMouseLeaveLinkArrow}
      >
      <div  onMouseEnter={this.handleShowArrows}
            onMouseLeave={this.handleHideArrows}
            >
            {myListMessage}
            {this.isLiknedGenre()}
            {leftArrow}
          <ul 
          className={this.state.style}>
            {this.props.movies.slice(this.state.start,this.props.movies.length).map(movie => (<li key={movie.id}
            onMouseEnter={this.onMouseEnterHandle(movie.id)}
            onMouseLeave={this.onMouseLeaveHandle}
            ><MovieListItemContainer genreId={this.props.genreId} hovered={this.state.hovered} content={movie}/></li>))}
          </ul>
          {rightArrow}
          <MovieDropbarContainer genreId={this.props.genreId}/>
        </div>
      </div>
    );
  }
}

export default GenreIndexItem;

