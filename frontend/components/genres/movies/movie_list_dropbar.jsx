import React from 'react';
import {Redirect} from 'react-router-dom';

class MovieDropbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: true, redirect: false, added: false}
        this.handleClose = this.handleClose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.myListButton = this.myListButton.bind(this);
    }

    handleClose() {
      this.props.receiveDropDownMovie(null,null);
    }

    handleAdd() {
        this.props.addMovie(this.props.dropDownMovie.movieId)
        // .then(() => this.myListButton())
    }

    handleRemove() {
        this.props.removeMovie(this.props.dropDownMovie.movieId)
        // .then(() => this.myListButton())
    }

    handlePlay() {
        this.setState({redirect: true})
    }

    componentDidUpdate() {
        // this.myListButton()
    }

    myListButton() {
        
        for (let i = 0; i < this.props.myList.length; i++) {
            if (el === this.props.dropDownMovie.movieId) {
               this.setState( {added: true})
            }
        };
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to={`/browse/watch/${this.props.dropDownMovie.movieId}`}/>
        }

        // let addRemoveButton;
        // if (this.state.added) {
        //    addRemoveButton = <div id='remove-movie-button' onClick={this.handleRemove}>Remove</div>
        // } else {
        //    addRemoveButton = <div id='add-movie-button' onClick={this.handleAdd}>Add</div>
        // }

        const movie = this.props.movies[this.props.dropDownMovie.movieId]

          if ( movie && (this.props.genreId === this.props.dropDownMovie.genreId)) {
            return (
              <div id='movie-ad' className="movie-dropbar">
               <div className='dropbar-info-container'>
                 <div id="movie-dropbar-title">{movie.title}</div>
                 <div id="movie-dropbar-description">{movie.description}</div>
                 <div className='dropdown-buttons'>
                    <div id='add-movie-button'  onClick={this.handlePlay}>Play</div>
                    <div id='add-movie-button' onClick={this.handleAdd}>Add</div>
                    <div id='remove-movie-button' onClick={this.handleRemove}>Remove</div>
                 </div>
                </div>
                <div className='dropbar-poster-container'>
                    <img id='dropdown-poster' src={movie.poster}/>
                    <div id='dropdown-close' onClick={this.handleClose}><i className="fas fa-times"></i></div>
                </div>
              </div>
            )
        } else {
            return <div></div>;
        }
    }
}

export default MovieDropbar;