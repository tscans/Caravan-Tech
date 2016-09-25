import React, {Component} from 'react';

class RegLog extends Component {
	constructor(props){
		super(props)

		this.state = {
			logon: Meteor.userId()
		}

	}
	isLogin() {
        return Meteor.userId() ? true : false
    }
	register(event){
		event.preventDefault();
		var uno = this.refs.email.value.trim();
		var dos = this.refs.password.value.trim();
		Accounts.createUser({
			email: uno,
			password: dos
		})
	}

	toCo(){
		window.location.href="/council"
	}

	login(event){
		event.preventDefault();
		var uno2 = this.refs.email2.value.trim();
		var dos2 = this.refs.password2.value.trim();
		Meteor.loginWithPassword(uno2, dos2);
		this.setState({ logon: true});
	}
	
	logout(event){
		event.preventDefault();
		Meteor.logout();
		this.setState({ logon: false});
	}

  render(){
  	if(!this.state.logon){
  		return(
  			<div>
		        <div className="col-xs-6 col-xs-offset-3 bump-down">
					<div className="panel panel-primary">
						<div className="panel-heading">
						   <h3 className="panel-title center-obj">Account Login</h3>
						</div>
						<div className="input-group center-obj">
							<form>
								<h3 className="center-obj">Email</h3>
						    	<input type="text" className="form-control" ref="email" placeholder="email"/>
						    	<h3>Password</h3>
						    	<input type="password" className="form-control" ref="password"  placeholder="password"/>
						    	<input onClick={this.register.bind(this)} className="btn btn-default" type="submit" value="register"/>
						    </form>
						    <br/>
						    <form>
						    	<h3>Email</h3>
						    	<input type="text" className="form-control" ref="email2" placeholder="email"/>
						    	<h3>password</h3>
						    	<input type="password" className="form-control" ref="password2" placeholder="password"/>
						    	<input onClick={this.login.bind(this)} className="btn btn-primary" type="submit" value="Login"/>
						    </form>
						</div>
					</div>
				</div>
  			</div>
  		);
  	}else{
  		return(
  			<div>
  				<div className="col-xs-6 col-xs-offset-3 bump-down">
					<div className="panel panel-primary">
						<div className="panel-heading">
						   <h3 className="panel-title">Account Logout</h3>
						</div>
							<div className="center-obj">
								<button className="btn btn-success" onClick={this.toCo.bind(this)}>To Council</button>
							</div>
							<br />
							<div className="center-obj">
				  				<button className="btn btn-warning" onClick={this.logout.bind(this)}>Logout</button>
				  			</div>
					</div>
				</div>
  			</div>
  		);
  	}
}
}

export default RegLog;