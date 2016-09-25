import React, {Component} from 'react';

UserData = new Mongo.Collection('userdata');

class Validate extends Component {
    constructor(props) {
        super(props);
    }

    addValidate(event){
    	event.preventDefault();
    	var newGuy = Meteor.userId();
		var name = this.refs.fullname.value.trim();
		var year = this.refs.theyear.value.trim();

    	Meteor.call('addValidation', newGuy, name, year, (error, data) => {
			if(error){
				console.log("there was an error", data);
			}
			else{
				console.log("I was sent");
				window.location.href="/council";
			}
		}
	  )
   }

    render() {
    	console.log(Meteor.userId());
        return(
        	<div className="col-xs-6 col-xs-offset-3 bump-down">
        		<div className="panel panel-primary">
        			<div className="panel-heading">
					   <h3 className="panel-title">Just need a little info from you first!</h3>
					</div>
	        		<form onSubmit={this.addValidate.bind(this)} className="col-xs-10 col-xs-offset-1">
					  <div className="form-group">
					    <label for="exampleInputEmail1">Full Name</label>
					    <input type="text" className="form-control" ref="fullname" placeholder="Enter your real full name" />
					  </div>
					  <div className="form-group">
					    <label for="exampleInputPassword1">Year</label>
					    <input type="text" className="form-control" ref="theyear" placeholder="Fr. So. Jr. Sr." />
					  </div>
					  <div className="checkbox">
					    <label>
					      <input type="checkbox" /> By checking this you agree that I (Mr. Scanlan) am master of the universe.
					    </label>
					  </div>
					  <button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
        	</div>
        );
    }
}

export default Validate;
