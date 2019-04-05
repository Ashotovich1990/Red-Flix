import React from 'react';
import SearchListContainer from './search_list_container';

class SearchResult extends React.Component {
    constructor(props) {
        super(props)
        this.state = {movies: []}
        this.getResults = this.getResults.bind(this)
    }
   
    componentDidMount() {
        this.getResults();
    }

    componentDidUpdate(prev) {
      this.getResults(prev);
        
    }

    getResults(prev) {
        if (!prev || this.props.searchItem !== prev.searchItem) {
            this.setState( {movies: [] }, () => {
                const results = [];
                this.props.movies.forEach(movie => {
                    if (movie.title.includes(this.props.searchItem)) {
                        results.push(movie);
                    }
                })
                this.setState({ movies: results });
            } )
        }
    }

    // props.movies and props.searchItem

    render() {

        return (
        !this.state.movies.length ? 
        <div className="search-empty-results">No matches Found</div>
        : 
        <div>
           <SearchListContainer dropDownMovie={this.props.dropDownMovie} movies={this.state.movies} search={true} />
        </div>)

    }
}

export default SearchResult;