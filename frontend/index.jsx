import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import * as MovieApiUtil from './actions/movies_actions'
// import * as MovieApiUtil from './util/movies_api_util'

document.addEventListener('DOMContentLoaded', ()=> {
    
    // test
    window.login = SessionApiUtil.login;
    window.signup = SessionApiUtil.signup;
    window.logout = SessionApiUtil.logout;
    window.fetchGenres = MovieApiUtil.fetchGenres;
    window.fetchMovie = MovieApiUtil.fetchMovie;
    window.fetchGenre = MovieApiUtil.fetchGenre; 
    window.addMovie = MovieApiUtil.addMovie;
    window.removeMovie = MovieApiUtil.removeMovie;
    window.findMovies = MovieApiUtil.findMovies;
    
    // test
    
    let store;
    if (window.currentUser) {
        store = configureStore(
        {
        session: 
        { id: window.currentUser.id},
        entities: {
        users: 
            {
            [window.currentUser.id]: window.currentUser,
            demoId: {id: 7, username: "Guest", password: "password"},
            },
        genreNames: 
            {
                '0': 'My List'
            }
        },
        });
    } else {
        store = configureStore(
        {
        entities: {
        users: 
            {
            demoId: {id: 7, username: "Guest", password: "password"},
            }
        }
        });
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root)
    console.log(document.getElementById("main-logo"));
    document.getElementById("main-logo").click()
})