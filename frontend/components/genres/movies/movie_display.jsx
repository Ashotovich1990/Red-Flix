import React from 'react';

class MoviePlay extends React.Component {
    constructor(props) {
        super(props)
        this.state = { video: null}
    }
        
 componentDidMount() {
    this.props.fetchMovie(this.props.movieId || this.props.genreMovieId).then(() =>  console.log(this.props.movies))
 }

 render() {
     if (this.props.movies[this.props.movieId || this.props.genreMovieId]) {
    return (
        <div>
            <video className="movie-list-movie-play" controls>
            <source src={this.props.movies[this.props.movieId || this.props.genreMovieId].video} type="video/mp4"/>
          
            Your browser does not support the video tag.
           </video>
      </div>)

    } else {
        return null;
    }
        }


}

export default MoviePlay;