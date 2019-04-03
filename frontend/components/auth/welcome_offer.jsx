import React from 'react';
import {Link} from 'react-router-dom';

export const WelcomeOffer = props => (
  <div className="splash-background">
    <div className="signup-offer">
        <h1>See what’s next.</h1>
        <h3>WATCH ANYWHERE. CANCEL ANYTIME.</h3>
        <div className="offer-button">
          <Link id="signup-link" to="/signup">Watch Free For 30 Days</Link>
        </div>
   </div>  
   </div>
);