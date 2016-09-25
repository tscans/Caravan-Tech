import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class CommentsList extends TrackerReact(Component) {
	constructor(){
		super();
		this.state = {
			subscription: {
				posts: Meteor.subscribe('allPosts'),
				userdata: Meteor.subscribe('userdata')
			}
		}
	}

	post() {
		var commentID = this.props.id;
		return Council.findOne(commentID);
	}

	userdata() {
		return UserData.find().fetch();
	}

	addComment(event){
		event.preventDefault();
		var commentID = this.props.id;
		var quatro = this.refs.comment.value.trim();

		var tempuser = Meteor.userId();
		var tempobj = UserData.find().fetch();
		var searchTerm = tempuser,
		    index = -1;
		for(var i = 0, len = tempobj.length; i < len; i++) {
		    if (tempobj[i].realID === searchTerm) {
		        index = i;
		        break;
		    }
		}
		var userCommentName = tempobj[index].name;

		Meteor.call('addComment', commentID, quatro, userCommentName, (error, data) => {
			if(error){
				console.log("there was an error");
			}else{
				this.refs.comment.value = "";

			}

		});
	}

	render(){
		var commentID = this.props.id;
		var theComment = Council.findOne(commentID);
		let not = this.post();
		if (!not){
			return(<div className="panel-center">Loading...</div>);
		}
		var uniquename = 0;
		return(
			<div>
				<div className="button-pad">
				<a href="/council"><button className="btn btn-primary">Back to Council</button></a>
				</div>
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
					<form onSubmit={this.addComment.bind(this)}>
						<div className="form-group">
							<label>Comment</label>
							<br />
							<input className="form-control" type="text" ref="comment" placeholder="Comment you wish to post" />
						</div>
						<button type="submit" className="btn btn-success">Comment</button>
					</form>
				</div>
				<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
					<div className="panel panel-warning">
					  <div className="panel-heading">
					    <a href={theComment.link}><h3 className="panel-title panel-center">{theComment.title}</h3></a>
					  </div>
					  <div className="panel-body">
					    <p>{theComment.text}</p>
					    <h6>Created by: {theComment.userName} -- {moment(theComment.createdAt.toString()).fromNow()}</h6>
					  </div>
					</div>
					<div>
						<ul>
							{theComment.comments.reverse().map( (comment) => {
								var coin = theComment.comments.length;
								return (
									<div key={uniquename++}>
										<div className="panel panel-info">
										  <div className="panel-body">
										    <b>{theComment.metaRow[(coin - (uniquename))]}:</b> {comment}
										  </div>
										</div>
									</div>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}