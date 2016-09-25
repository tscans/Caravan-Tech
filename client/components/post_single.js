import React, {Component} from 'react';

export default class PostSingle extends Component {

	constructor(props){
		super(props);

		this.state = {
			subscription: {
				posts: Meteor.subscribe('allPosts'),
				userdata: Meteor.subscribe('userdata')
			}
		}
	}

	userdata() {
		return UserData.find().fetch();
	}

	componentWillUnmount(){
		this.state.subscription.posts.stop();
		this.state.subscription.userdata.stop();
	}

	upVote(event){
		var theID = this.props.post._id;
		var theUser = Meteor.userId();
		upvoteClass = "btn btn-success btn-space";
		upvoteWords = "Upvote";
		Meteor.call('addVote', theID, theUser, (error, data) => {
			if(error){
				console.log("there was an error");
			}
		}
	)
		return Council.find().fetch();

	}

	render(){
		var upvoteClass = "btn btn-success btn-space";
		var upvoteWords = "Upvote";
		var newHref = "/council/posts/";
		var toComments = `${newHref}${this.props.post._id}`;
		var res = this.userdata();
		var toLink = this.props.post.link;
		if(this.props.post.link == "emptylink"){
			toLink = toComments;
		}
		return(
			<li className="col-md-10 col-md-offset-1">
				<div className="panel panel-default">
				  <div className="panel-heading">
				    <a href={toLink}><h3 className="panel-title">{this.props.post.title}</h3></a>
				  </div>
				  <div className="panel-body">
				  	<button onClick={this.upVote.bind(this)} className={upvoteClass}>{upvoteWords}</button>
				  	<a href={toComments}><button className="btn btn-primary btn-space">Comments</button></a>
				    <p className="vote-align">
						<i>Upvotes: {this.props.post.upvotes}</i>
					</p>
					<p className="vote-align">
						<i>Comments: {this.props.post.comments.length}</i>
					</p>
					<p className="user-align">
						<i>Created by: {this.props.post.userName} {moment(this.props.post.createdAt.toString()).fromNow()}</i>
					</p>
				  </div>
				</div>
			</li>
		);
	}
};