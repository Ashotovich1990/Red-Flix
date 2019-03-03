import React from 'react';
import WelcomeContainer from './auth/welcome_container';
import {Route, Switch} from 'react-router-dom';
import SignupFormContainer from './auth/signup_form_container';
import LoginFormContainer from './auth/login_form_container';
import {WelcomeOffer} from './auth/welcome_offer'
import GenreIndexContainer from './genres/genre_index_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
    <div>
        <header id="main-header">
            <WelcomeContainer />
        </header>
        <Switch>
        <ProtectedRoute exact path="/browse" component={GenreIndexContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact patch="/" component={WelcomeOffer}/>
        </Switch>

    </div>
)

export default App;