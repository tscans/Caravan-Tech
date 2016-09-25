Meteor.methods({
	addPost(title, link, text, userName){
		if(userName == null){
			throw new Meteor.Error( 501, 'There was an error processing your request' );
		}
		else{
			if(link==""){
				link = "emptylink";
			}
			if(title==""){
				throw new Meteor.Error( 502, 'oops');
			}
			else{
				Council.insert({
					title: title,
					link: link,
					text: text,
					createdAt: new Date(),
					upvotes: 0,
					upvoters: [],
					comments: ["add a new comment to this post!"],
					metaRow: ["OP!"],
					userName: userName,
					user: Meteor.userId()
				});
			}
		}
	},
	deleteNote(post){
		check(post, Object);
		if(Meteor.userId() !== post.user){
			throw new Meteor.Error('not-authorized');
		}
		Council.remove(post._id);
	},
	addVote(theID, theUser){
		var theObject = Council.find({ _id: theID }).fetch();
		var theUserArray = theObject[0].upvoters;
		var checkVoted = theUserArray.indexOf(theUser);

		if(checkVoted == -1){
			Council.update({_id: theID}, {$inc:{upvotes: 1}, $addToSet: {upvoters: theUser}}, )
		}
		console.log("here I am!", Meteor.users);
	},
	addComment(commentID, quatro, userCommentName){
		Council.update({_id: commentID}, {$push: {comments: quatro}},)
		Council.update({_id: commentID}, {$push: {metaRow: userCommentName}},)
	},
	addValidation(newGuy, name, year){
		var tempuser = newGuy;
		var tempobj = UserData.find().fetch();
		var searchTerm = tempuser,
		    index = -1;
		for(var i = 0, len = tempobj.length; i < len; i++) {
		    if (tempobj[i].realID === searchTerm) {
		        index = i;
		        break;
		    }
		}

		if(index == -1){
			UserData.insert({
				realID: newGuy,
		      	name: name,
		        year: year,
		        signedUp: true,
		        isAdmin: false
		    });
		    console.log("okay on this end");
		}
		else{
			console.log("access denied");
		}
	}
});
