import React, {Component} from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      var theAccount;
      if(Meteor.user()){
        theAccount = <li><a href="/login">Account</a></li>;
      }
      else{
        theAccount = <li><a href="/login">Sign In</a></li>
      }
        return (
        	<div>
        		<nav className="navbar navbar-inverse" role="navigation">
                  <div className="navbar-header">    
                    <a className="navbar-brand" href="localhost:3000/">Caravan Tech</a>
                  </div>
                  <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right nav-bump">
                      {theAccount}
                      <li><a href="/council">Council</a></li>
                      <li><a href="/">Home</a></li>
                    </ul>
                  </div>
                </nav>
        	</div>
        );
    }
}

export default Navbar;