import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import CouncilJumbo from '../components/council_jumbo';
import Posts from '../components/posts';
import ToAddPost from '../components/to_add_post';

export const Council = ({content}) => (
	<div>
		<Navbar />
		<CouncilJumbo />
		<Sidebar />
		<ToAddPost />
		<br/>
		<br/>
		<Posts />
	</div>
);
