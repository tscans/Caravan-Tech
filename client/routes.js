import React from 'react';
import {mount} from 'react-mounter';
import {Home} from './layouts/home';
import {Council} from './layouts/council';
import {PostForm} from './layouts/post_form';
import {Comments} from './layouts/comments';
import {SignIn} from './layouts/sign_in';
import CommentsList from './components/comments_list';
import Validate from './components/validate';
import {Learn} from './layouts/learn';
import LearnPage from './components/learn_page';
import RegLog from './components/reg_log';

FlowRouter.route('/', {
	action() {
		mount (Home, {
			content: (<Home />)
		})
	}
});

FlowRouter.route('/council', {
	action(){
		if(!Meteor.userId()){
			console.log('access denied, not signed in');
			mount (Home, {
				content: (<Home />)
			})
		}
		else{
			mount (Council, {
				content: (<Council />)
			})
		}
	}
});

FlowRouter.route('/addpost', {
	action(){
		if(!Meteor.userId()){
			console.log('access denied, not signed in');
			mount (Home, {
				content: (<Home />)
			})
		}else{
			mount (PostForm, {
				content: (<PostForm />)
			})
		}
	}
});

FlowRouter.route('/council/posts/:id', {
	action(params) {
		if(!Meteor.userId()){
			console.log('access denied, not signed in');
			mount (Home, {
				content: (<Home />)
			})
		}else{
			console.log(params.id);
			mount (Comments, {
				content: (<CommentsList id={params.id} />)
			})
		}
	}
});

FlowRouter.route('/learn/:tuts', {
	action(params) {
		if(!Meteor.userId()){
			console.log('access denied, not signed in');
			mount (Home, {
				content: (<Home />)
			})
		}else{
			mount (Learn, {
				content: (<LearnPage tuts={params.tuts} />)
			})
		}
	}
});


FlowRouter.route('/validate', {
	action(){
		if(!Meteor.userId()){
			console.log('access denied, not signed in');
			mount (Home, {
				content: (<Home />)
			})
		}else{
			mount (SignIn, {
				content: (<Validate />)
			})
		}	
	}
});

FlowRouter.route("/login", {
  action(params) {
    mount(SignIn, {
      content: <RegLog />
    });
  }
});

/*
FlowRouter.route('/about', {
	action() {
		mount (MainLayout, {
			content: (<About />)
		})
	}
});

FlowRouter.route('/notes/:id', {
	action(params) {
		mount (MainLayout, {
			content: (<NoteDetail id={params.id} />)
		})
	}
});
*/