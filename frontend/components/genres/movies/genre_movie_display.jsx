import React from 'react';

class GenreMoviePlay extends React.Component {
    constructor(props) {
        super(props)
        this.state = { movie: null, muted: true}
        this.handleSoundOn = this.handleSoundOn.bind(this)
        this.handleSoundOff = this.handleSoundOff.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.setState = this.setState.bind(this)
    }

    
    handleSoundOn() {
 
        this.setState({muted: undefined})
    }

    handleSoundOff() {
        this.setState({muted: true})
    }
     

    componentDidMount() {
        // debugger
        this.props.fetchMovie(this.props.movieId).then(() => this.setState({movie: this.props.movies[this.props.movieId]}))
    }

    componentDidUpdate(prev) {
        if (this.props.movieId !== prev.movieId) {
        this.props.fetchMovie(this.props.movieId).then(() => {
            // debugger
            this.setState({movie: this.props.movies[this.props.movieId]})
            }
            ).then(() => console.log(this.state.movie))
        }
    }

    render() {
        if (this.state.movie && this.props.genreId !== '0') {
        // debugger
        return (
            <div
            onMouseEnter={this.handleSoundOn} 
            onMouseLeave={this.handleSoundOff}
                >
                <video key={this.state.movie.id} className="genre-movie-play" autoPlay={true} muted={this.state.muted} loop={true} >
                <source src={this.state.movie.video} type="video/mp4"/>
            
                Your browser does not support the video tag.
            </video>
        </div>)

        } else {
            return null;
        }
            }


}

export default GenreMoviePlay;