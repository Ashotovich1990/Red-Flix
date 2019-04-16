import React from 'react';
import {Redirect} from 'react-router-dom';

class MoviePlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { video: null, clicked: false, returnPath: "", msg: "", goBackStyle: "go-back"};
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

handleMouseEnter() {
    let str = " Go Back";
    let time = 0;
    if (this.state.msg === "") {
        for (let i = 0; i < str.length; i++) {
            time += 20
            setTimeout(() => {
            this.setState( {msg: this.state.msg + str[i] });
            }, time)
        }
    }
    this.setState({ goBackStyle: "go-back-big"});
}

handleMouseLeave() {
    if (this.state.msg === " Go Back") {
        this.setState( {msg: "" });
      }
   this.setState({goBackStyle: "go-back" });
}
  
handleClick() {
    this.setState({ clicked: true, returnPath: this.props.genrePageId === "main" ? "" : this.props.genrePageId})
}
        
 componentDidMount() {
    this.props.fetchMovie(this.props.movieId || this.props.genreMovieId);
 }

 render() {
    if (this.state.clicked) return <Redirect to={`/browse/${this.state.returnPath}`} />
    if (this.props.movies[this.props.movieId || this.props.genreMovieId]) {
    return (
        <div>
            <span className={`${this.state.goBackStyle}`} onClick={this.handleClick}
            onMouseEnter={this.handleMouseEnter} 
            onMouseLeave={this.handleMouseLeave}>
            <i class="fas fa-arrow-left"></i> {this.state.msg}</span>
            <video className="movie-list-movie-play" controls autoPlay="true">
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