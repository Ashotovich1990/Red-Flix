import React from 'react';


class MovieListItem extends React.Component {
    constructor(props) {
        super(props)
        this.style = {
            width: '200px',
            height: "280px",
            backgroundImage: "url(" + this.props.content.poster + ")",
            backgroundSize: 'cover',
            alignItems: 'stretch',
        }
    }

    render() {
        if (this.props.hovered === this.props.content.id) {
      
        return  (
        <div style={this.style}>
         <ul className="movie-list-item-content">
           <li id="movie-title">{this.props.content.title}</li>
           <li id="movie-year">year {this.props.content.year}</li>
           <li id="movie-rating">rating {this.props.content.maturity_rating}</li>
         </ul>
        </div>
        )
        } else {
        return <img src={this.props.content.poster} alt=""></img>
        }
    }   
};

export default MovieListItem;