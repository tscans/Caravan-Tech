import React, {Component} from 'react';

export default class AddPost extends Component{
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

	posts(){
		return Council.find().fetch();
	}

	componentWillUnmount(){
		this.state.subscription.posts.stop();
		this.state.subscription.userdata.stop();
	}

	addPosts(event){
		event.preventDefault();
		var uno = this.refs.title.value.trim();
		var dos = this.refs.link.value.trim();
		var tres = this.refs.text.value.trim();
		var holder;
		var tempuser = Meteor.userId();
		var tempobj = this.userdata();
		var searchTerm = tempuser,
		    index = -1;
		for(var i = 0, len = tempobj.length; i < len; i++) {
		    if (tempobj[i].realID === searchTerm) {
		        index = i;
		        break;
		    }
		}

		if(index == -1){
			holder = null;
		}
		else{
			holder = tempobj[index].name;
		}
		
		var quatro = holder;

		Meteor.call('addPost', uno, dos, tres, quatro, (error, data) => {
			if(error){
				console.log("there was an error");
				console.log(error.error);
				if(error.error == 501){
					window.location.href="/validate";
				}
			}else{
				this.refs.title.value = "";
				this.refs.link.value = "";
				this.refs.text.value = "";
				window.location.href="/council";

			}

		});


	}

	render(){
		var res = this.userdata();
		var res2 = this.posts();

		return(
			<form onSubmit={this.addPosts.bind(this)}>
				<div className="form-group">
					<label>Title</label>
					<br />
					<input className="form-control" type="text" ref="title" placeholder="Title of post" />
				</div>
				<div className="form-group">
					<label>Link</label>
					<br />
					<input className="form-control" type="text" ref="link" placeholder="External link" />
				</div>
				<div className="form-group">
					<label>Text</label>
					<textarea className="form-control" ref="text" rows="3" placeholder="Add a comment for your post" />
				</div>
				<button type="submit" className="btn btn-primary">Submit Post</button>
			</form>
		);
	}
}