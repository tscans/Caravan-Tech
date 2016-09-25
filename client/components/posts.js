import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import AddPost from './add_post';
import PostSingle from './post_single';

export default class Posts extends TrackerReact(React.Component){

	constructor(props){
		super(props);

		this.state = {
			subscription: {
				posts: Meteor.subscribe('allPosts'),
				userdata: Meteor.subscribe('userdata')
			}
		}
	}

	componentWillUnmount(){
		this.state.subscription.posts.stop();
		this.state.subscription.userdata.stop();
	}

	posts() {
		return Council.find().fetch();
	}

	userdata(){
		return UserData.find().fetch()
	}

	render() {
		var res = this.posts();
		var res2 = this.userdata();
		return (
			<div>
				<ul>
					{this.posts().reverse().map( (post) => {
						return <PostSingle key={post._id} post={post} />
					})}
				</ul>
			</div>
		);
	}
}

