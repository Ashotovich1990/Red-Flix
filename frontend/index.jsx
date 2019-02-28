import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', ()=> {
    // test
    window.login = SessionApiUtil.login;
    window.signup = SessionApiUtil.signup;
    window.logout = SessionApiUtil.logout;
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
            }
        }
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
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root)
})