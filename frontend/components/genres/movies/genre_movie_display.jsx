import React from 'react';

class GenreMoviePlay extends React.Component {
    constructor(props) {
        super(props)
        this.state = { video: null, muted: true}
        this.handleSoundOn = this.handleSoundOn.bind(this)
        this.handleSoundOff = this.handleSoundOff.bind(this)
    }

    
    handleSoundOn() {
 
        this.setState({muted: undefined})
    }

    handleSoundOff() {
        this.setState({muted: true})
    }
     

    componentDidMount() {
        this.props.fetchMovie(this.props.genreMovieId).then(() => document.getElementById("main-logo").click())
    }

    render() {
        if (this.props.movies[this.props.genreMovieId]) {
        return (
            <div
            onMouseEnter={this.handleSoundOn} 
            onMouseLeave={this.handleSoundOff}
                >
                <video className="genre-movie-play" autoPlay={true} muted={this.state.muted} loop={true}>
                <source src={this.props.movies[this.props.genreMovieId].video} type="video/mp4"/>
            
                Your browser does not support the video tag.
            </video>
        </div>)

        } else {
            return null;
        }
            }


}

export default GenreMoviePlay;