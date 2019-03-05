import React from 'react';
import {Link} from 'react-router-dom';
import GenreNavContainer from './genre_nav_container';

class Welcome extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      this.props.logout();
    }

    render() {
      let content = this.props.currentUser ? 
        (<div className="welcome-new">
           <div className="nav-bar">
             <h1 id="main-logo">RedFlix</h1> 
             <GenreNavContainer genres={this.props.genres}/>
           </div>
         <div className="welcome-user">
           <h3 id="message">{this.props.currentUser.username}</h3>
           <button className="signout-button" onClick={this.handleClick}>Sign Out</button>
         </div> 
         </div> 
         ) : 
        (<div >
             <div className="welcome-new">
             <h1 id="main-logo">RedFlix</h1> 
             <Link to="/login" className="signin-button"><p id="signin">Sign In</p></Link>
         </div>
         </div>);
       
       return content;

    
    }
}

export default Welcome;