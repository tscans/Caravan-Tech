import React from 'react';
import Sidebar from '../components/sidebar';
import CommentsList from '../components/comments_list';
import Navbar from '../components/navbar.js';
import CouncilJumbo from '../components/council_jumbo';


export const Comments = ({content}) => (
	<div>
		<Navbar />
		<CouncilJumbo />
		<Sidebar />
		{content}
	</div>
);
