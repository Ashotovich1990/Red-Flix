import React from 'react';
import {Link} from 'react-router-dom';
import GenreNavContainer from './genre_nav_container';

class Welcome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {phrase: ""}
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      this.props.logout();
    }

    handleChange(e) {
      setTimeout(() => this.props.receiveSearchItem(this.state.phrase), 2)
      this.setState({phrase: e.target.value});
    } 

    render() {
      let content = this.props.currentUser ? 
        (<div className="welcome-new">
           <div className="nav-bar">
             <h1 id="main-logo">RedFlix</h1> 
             <GenreNavContainer genres={this.props.genres}/>
           </div>
         <div className="welcome-user">
           <input onChange={this.handleChange} className="search-box" type="input" placeholder="search"/>
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