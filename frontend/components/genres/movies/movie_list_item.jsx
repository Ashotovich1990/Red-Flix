import React from 'react';
import {Redirect} from 'react-router-dom';

class MovieListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {redirect: false}
        this.style = {
            width: '200px',
            height: "280px",
            backgroundImage: "url(" + this.props.content.poster + ")",
            backgroundSize: 'cover',
            alignItems: 'stretch',
        }
        this.handleClick = this.handleClick.bind(this);
        this.scrollToItem = this.scrollToItem.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.changeDropDownMovie = this.changeDropDownMovie.bind(this);
  
    }

    changeDropDownMovie() {
        if (this.props.dropDownMovie.movieId && this.props.genreId === this.props.dropDownMovie.genreId) {
            this.props.receiveDropDownMovie(this.props.content.id, this.props.genreId);
        }
    }
    
    scrollToItem() {
      const scrollItem = document.getElementById("movie-ad");
      scrollItem.scrollIntoView(false);
    }
    
    handleClick() {
        setTimeout(() => this.scrollToItem(), 0)
        this.props.receiveDropDownMovie(this.props.content.id, this.props.genreId);   
    }

    handlePlay() {
        this.setState({redirect: true})
    }
    
    render() {
        if (this.state.redirect) {
            const genreUrl = this.props.pageGenreId ? this.props.pageGenreId : "main";
            return <Redirect to={`/browse/${genreUrl}/watch/${this.props.content.id}`}/>    
        } else if (this.props.hovered === this.props.content.id || (this.props.dropDownMovie.movieId === this.props.content.id && this.props.dropDownMovie.genreId === this.props.genreId )) {
        return  (
        <div onMouseEnter={this.changeDropDownMovie}>
            <div  style={this.style}>
              <div className="movie-list-item-content">
                <div className="movie-item-bar">
                  <div id={`maturity-rating-${this.props.content.maturity_rating}`}>{this.props.content.maturity_rating}</div>
                  <div id="movie-year">{this.props.content.year}</div>
                </div>
                <div onClick={this.handlePlay} className="cursor" id='open-movie-page'><i className="far fa-play-circle"></i></div>
                <div  id="movie-title">{this.props.content.title}</div>
                <div className="cursor" id="open-dropdown-movie" onClick={this.handleClick}><i className="fas fa-angle-double-down"></i></div>
              </div>
            </div>
        </div>
        )
        } else {
        return <img onMouseEnter={this.changeDropDownMovie} src={this.props.content.poster} alt=""></img>
        }
    }   
};

export default MovieListItem;