import React from 'react';
import {Redirect} from 'react-router-dom';
// import MovieDropbarContainer from './movie_list_dropbar_container';

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
        this.handlePlay = this.handlePlay.bind(this)
  
    }
    
    scrollToItem() {
      const scrollItem = document.getElementById("movie-ad");
      scrollItem.scrollIntoView(false);
    }
    handleClick() {
        setTimeout(()=>this.scrollToItem(), 0)
        this.props.receiveDropDownMovie(this.props.content.id, this.props.genreId);
        
    }

    handlePlay() {
        this.setState({redirect: true})
    }
    
    render() {
        if (this.state.redirect) {
          return <Redirect to={`/browse/watch/${this.props.content.id}`}/>
        } else if (this.props.hovered === this.props.content.id) {
        return  (
        <div>
            <div style={this.style}>
              <div className="movie-list-item-content">
                <div className="movie-item-bar">
                  <div id={`maturity-rating-${this.props.content.maturity_rating}`}>{this.props.content.maturity_rating}</div>
                  <div id="movie-year">{this.props.content.year}</div>
                </div>
                <div onClick={this.handlePlay} id='open-movie-page'><i className="far fa-play-circle"></i></div>
                <div  id="movie-title">{this.props.content.title}</div>
                <div id="open-dropdown-movie" onClick={this.handleClick}><i className="fas fa-angle-double-down"></i></div>
              </div>
            </div>
        </div>
        )
        } else {
        return <img src={this.props.content.poster} alt=""></img>
        }
    }   
};

export default MovieListItem;