import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class MovieDropbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: true, redirect: false, added: false, muted: true}
        this.handleClose = this.handleClose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.myListButton = this.myListButton.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.renderInfoBox = this.renderInfoBox.bind(this);
        this.genres = this.genres.bind(this);
        this.handleSoundOn = this.handleSoundOn.bind(this);
        this.handleSoundOff = this.handleSoundOff.bind(this);
        this.soundControl = this.soundControl.bind(this);
    }

    handleSoundOn() {
        this.setState({muted: undefined})
    }

    handleSoundOff() {
        this.setState({muted: true})
    }

    handleClose() {
      this.props.receiveDropDownMovie(null,null);
    }

    handleAdd() {
        this.props.addMovie(this.props.dropDownMovie.movieId)
    }

    handleRemove() {
        this.props.removeMovie(this.props.dropDownMovie.movieId)
    }

    handlePlay() {
        this.setState({redirect: true})
    }

    myListButton() {
        
        for (let i = 0; i < this.props.myList.length; i++) {
            if (el === this.props.dropDownMovie.movieId) {
               this.setState( {added: true})
            }
        };
    }

    genres(movieId) {
        let names = []; 
        Object.keys(this.props.genreNames).forEach(key => {
            if (this.props.genreLists[key]) {
                if (this.props.genreLists[key].includes(movieId) && key !== '0') {
                    names.push([this.props.genreNames[key], key])
                }
            }
        })

        return (
            names.map((genre,idx) => {
                return <li key={idx}><Link to={`/browse/${genre[1]}`}>{genre[0]}</Link></li>
            })
        
        );
    }

    renderButton() {
        let icon;
        let func;
        if (this.props.isOnList) {
            icon = <i class="fas fa-check"></i>;
            func = this.handleRemove;
        } else {
            icon = <i class="fas fa-plus"></i>;
            func = this.handleAdd;
        }
        return <div className='dropbar-movie-button' onClick={func}><div>{icon} My List</div></div>
    }

    renderInfoBox(movie) {
        return (
            <div className='dropbar-info-container'>
                <h2>{movie.title}</h2>
                <div className="dropbar-rating-year">
                    <div className="dropbar-year">{movie.year}</div>
                    <div className="dropbar-maturity-rating">{movie.maturity_rating}</div>
                </div>
                <div className="dropbar-movie-desc">{movie.description}</div>
                <div className='dropbar-buttons'>
                <div className="dropbar-movie-button"  onClick={this.handlePlay}>Play</div>
                {this.renderButton()}
                </div>
                <ul className="dropbar-genres">Genres:
                    {this.genres(movie.id)}
                </ul>
            </div>
        )

    }

    soundControl() {
        let soundButton;
        if (this.state.muted) {
            soundButton = <div className="sound-control cursor" onClick={this.handleSoundOn}><div><i class="fas fa-volume-mute"></i></div></div>
        } else {
            soundButton = <div className="sound-control cursor" onClick={this.handleSoundOff}><div><i class="fas fa-volume-up"></i></div></div>
        }
        return (
            <div className='close-sound-container'>
                <div className = "cursor" id='dropdown-close' onClick={this.handleClose}><i className="fas fa-times"></i></div>
                {soundButton}
            </div>
        )
    }


    render() {
        if (this.state.redirect) {
            const genreUrl = this.props.pageGenreId ? this.props.pageGenreId : "main";
            return <Redirect to={`/browse/${genreUrl}/watch/${this.props.dropDownMovie.movieId}`}/>
        }

          const movie = this.props.movies[this.props.dropDownMovie.movieId]

          if ( movie && (this.props.genreId === this.props.dropDownMovie.genreId)) {
            return (
              <div id='movie-ad' className="movie-dropbar">
                 {this.renderInfoBox(movie)}
                   <video className="dropbar-movie-play" key={movie.id} autoPlay={true} muted={this.state.muted} loop={true} >
                        <source src={movie.video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    {this.soundControl()}
              </div>
            )
        } else {
            return <div></div>;
        }
    }
}

export default MovieDropbar;