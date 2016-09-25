import React from 'react';
import Navbar from '../components/navbar';
import AddPost from '../components/add_post';

Council = new Mongo.Collection('council');

export const PostForm = ({content}) => (
	<div>
		<Navbar />
		<div className="col-md-2 col-md-offset-10">
			<a href="/council" className="btn btn-success">Back</a>
		</div>
		<div className="row">
			<div className="col-md-6 col-md-offset-3">
				<AddPost />
			</div>
		</div>
	</div>
);
