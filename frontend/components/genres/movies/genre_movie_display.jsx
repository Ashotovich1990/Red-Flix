import React from 'react';
import {Redirect} from 'react-router-dom';

class GenreMoviePlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movie: null, muted: true, redirect: false};
        this.handleSoundOn = this.handleSoundOn.bind(this);
        this.handleSoundOff = this.handleSoundOff.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.setState = this.setState.bind(this);
        this.builtMovieBox = this.builtMovieBox.bind(this);
        this.handlePlayMovie = this.handlePlayMovie.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.soundControl = this.soundControl.bind(this);
    }
    
    handlePlayMovie() {
        this.setState({redirect: true})
    }

    handleAdd() {
        this.props.addMovie(this.state.movie.id)
    }

    handleRemove() {
        this.props.removeMovie(this.state.movie.id)
    }
    
    handleSoundOn() {
        this.setState({muted: undefined})
    }

    handleSoundOff() {
        this.setState({muted: true})
    }
     

    componentDidMount() {
        this.props.fetchMovie(this.props.movieId).then(() => this.setState({movie: this.props.movies[this.props.movieId]}))
    }

    componentDidUpdate(prev) {
        if (this.props.movieId !== prev.movieId) {
        this.props.fetchMovie(this.props.movieId).then(() => {
            this.setState({movie: this.props.movies[this.props.movieId]})
            }
            )
        }
    }

    builtMovieBox() {
        return (
            <div className="genre-movie-box">
               <h1><p id ="Redflix-text">RedFlix</p><p>selection</p></h1>
               <h2>{this.state.movie.title}</h2>
               <div className="genre-button-container">
                <div onClick={this.handlePlayMovie} className="genre-movie-button"><div>Play</div></div>
                {this.renderButton()}
               </div>
               <div className="genre-movie-desc">{this.state.movie.description.slice(0,200)}...</div>
            </div>
        )
    }

    renderButton() {
        let icon;
        let func;
        if (this.props.myList[0].includes(this.state.movie.id)) {
            icon = <i class="fas fa-check"></i>;
            func = this.handleRemove;
        } else {
            icon = <i class="fas fa-plus"></i>;
            func = this.handleAdd;
        }
        return <div className='genre-movie-button' onClick={func}><div>{icon} My List</div></div>
    }

    soundControl() {
        let soundButton;
        if (this.state.muted) {
            soundButton = <div className="sound-control" onClick={this.handleSoundOn}><div><i class="fas fa-volume-mute"></i></div></div>
        } else {
            soundButton = <div className="sound-control" onClick={this.handleSoundOff}><div><i class="fas fa-volume-up"></i></div></div>
        }
        return (
            <div className='sound-rating-container'>
                {soundButton}
                <div className='genre-movie-maturity-rating'>
                {this.state.movie.maturity_rating}
                </div>
            </div>
        )
    }

    render() {
        if (this.state.redirect) {
            const genreUrl = this.props.pageGenreId ? this.props.pageGenreId : "main";
            return <Redirect to={`/browse/${genreUrl}/watch/${this.state.movie.id}`}/>
        }

        if (this.state.movie && this.props.genreId !== '0') {
        return (
            <div className="genre-movie-box-container">
                <div>
                    {this.builtMovieBox()}
                    <video className="genre-movie-play" key={this.state.movie.id} autoPlay={true} muted={this.state.muted} loop={true} >
                        <source src={this.state.movie.video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                {this.soundControl()}
            </div>
        )

        } else {
            return null;
        }
            }


}

export default GenreMoviePlay;