import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", email: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.content = this.content.bind(this);
        this.errors = [];
      
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value});
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleDemo (e) {
        e.preventDefault();
        this.props.login(this.props.demoUser);
    }

    content() {
       

        let link;
        if (this.props.formType === 'Sign In') {
            link = <Link className="form-link" to='/signup'>Sign Up</Link>;
        } else if (this.props.formType === 'Sign Up') {
            link = <Link className="form-link" to='/login'>Sign In</Link>;
        }
        
        let email;
        if (this.props.formType === 'Sign Up') {
            email = (<label>
            <input placeholder="Email" type="text" value={this.state.email} onChange={this.update("email")}/>
            </label>);
        } else if (this.props.formType === 'Sign Up') {
            email = null;
        }

        if (this.props.currentUser) {
            return <Redirect to='/' />;
        } else {
            return (
            <div id="session-form">
            <form onSubmit={this.handleSubmit}>
            <div className="session-form-container">
            <h1 id="session-title">{this.props.formType}</h1>
            <br/>
              {email}
             <label>
                <input placeholder="Username" type="text" value={this.state.username} onChange={this.update("username")}/>
             </label>
             <label>
                <input placeholder="Password" type="password" value={this.state.password} onChange={this.update("password")}/>
             </label>
             <ul id="errors">{this.props.errors.map((err,idx) => <li key={idx}>{err}</li>)}</ul>
             <input type="submit" value={this.props.formType}/>
             <input id="demo-button" type="submit" value="DEMO" onClick={this.handleDemo}/>
            <p>{this.props.formOutInfo} {link}</p>
             </div>
            </form>
            </div>
            );
        }
    }

    render() {
        const content = this.content();
        return (
            <div className = "splash-background">
              {content}
            </div>
        )
    }
}

export default SessionForm;