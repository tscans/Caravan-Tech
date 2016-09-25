Council = new Mongo.Collection('council');
UserData = new Mongo.Collection('userdata');

Meteor.publish('allPosts', ()=>{
	return Council.find({}, {sort: {upvotes: 1} });
});

Meteor.publish('userdata', ()=>{
	return UserData.find();
})