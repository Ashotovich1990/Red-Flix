import React from 'react';

class MoviePlay extends React.Component {
    constructor(props) {
        super(props)
        this.state = { video: null}
    }

    // '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBIdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c0c700e6363d82e0173ccd8624587c212ce98d1c/Andrei%20Rublev'

       

 componentDidMount() {
    // setTimeout(() =>  console.log(this.props.movies), 100)

        // this.setState({ video: this.props.movies[this.props.movieId]})
     
  
    this.props.fetchMovie(this.props.movieId || this.props.genreMovieId).then(() =>  console.log(this.props.movies))
 }

 render() {
     if (this.props.movies[this.props.movieId || this.props.genreMovieId]) {
    return (
        <div>
            <video width="640" height="240" controls>
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