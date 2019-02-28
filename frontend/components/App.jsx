import React from 'react';
import WelcomeContainer from './auth/welcome_container';
import {Route} from 'react-router-dom';
import SignupFormContainer from './auth/signup_form_container';
import LoginFormContainer from './auth/login_form_container';


const App = () => (
    <div>
        <header id="main-header">
            <WelcomeContainer />
        </header>

        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/login" component={LoginFormContainer} />

    </div>
)

export default App;