import React from 'react' 
import MovieListItemContainer from './movies/movie_list_item_container';
import MovieDropbarContainer from './movies/movie_list_dropbar_container';

class MyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hovered: null, browse: null, start: 0, end: 6}
        this.onMouseEnterHandle = this.onMouseEnterHandle.bind(this)
        this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this)
        this.handleScrollRight = this.handleScrollRight.bind(this);
        this.handleScrollLeft = this.handleScrollLeft.bind(this);
    }

    onMouseEnterHandle(movie_id) {
        return (e) => {
          this.setState({hovered: movie_id})
        }
      }
      
      onMouseLeaveHandle() {
        this.setState({hovered: null})
      }
    
      handleScrollRight() {
        if (this.state.end <= this.props.movies.length) {
         this.setState( { start: this.state.start + 1, end: this.state.end + 1 })
        }
      }
    
      handleScrollLeft() {
        if (this.state.start > 0) {
        this.setState( { start: this.state.start - 1, end: this.state.end - 1 })
        }
     }


    render() {

        const myListMessage = !this.props.movies.length ? 
        <div className='my-list-empty'>
            You haven't added any titles to your list yet
        </div> : 
        <div id="my-list-title"><h1>My List</h1></div> ;
    
        if (!this.props.movies.length) {
          return <div id='my-list-message'>{myListMessage}</div>;
        } 


        return (
        <div className="my-list-container">
        <div className='my-list'>
            {myListMessage}
            <div onClick={this.handleScrollLeft} className='move-arrow-left'><i className="fas fa-arrow-left"></i></div>
          <ul className='genre-list'>
            {this.props.movies.slice(this.state.start,this.state.end).map(movie => (<li key={movie.id}
            onMouseEnter={this.onMouseEnterHandle(movie.id)}
            onMouseLeave={this.onMouseLeaveHandle}
            ><MovieListItemContainer genreId='0' hovered={this.state.hovered} content={movie}/></li>))}
          </ul>
          <div onClick={this.handleScrollRight} className='move-arrow-right'><i className="fas fa-arrow-right"></i></div>
        
          <MovieDropbarContainer genreId='0'/>
      </div>
      </div>
        )
    }
}

export default MyList;