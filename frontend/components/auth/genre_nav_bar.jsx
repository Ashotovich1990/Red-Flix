import React from 'react';
import {Link} from 'react-router-dom';

export const GenreNavBar = props => (
    <div className="genre-nav-bar">
      <Link onClick={() => props.fetchGenres()}
        to={`/browse/`}>Home</Link>
      <Link onClick={() => props.fetchGenre(2)}
        to={`/browse/${2}`}>Trending Now</Link>
      <Link onClick={() => props.fetchGenre(3)}
        to={`/browse/${3}`}>New Releases</Link>
      <Link onClick={() => props.fetchGenre(0)}
        to={`/browse/${0}`}>My List</Link>
    </div>
);
