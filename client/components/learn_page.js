import React, {Component} from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

class LearnPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	block: [{
        		videoID: 'J_ifXhr7isw',
        		comments: 'This is the first video here',
        		title: 'ACAS CS 1'
        	},
        	{
        		videoID: 'N_TVqDeNgUE',
        		comments: 'This is the second video here',
        		title: 'ACAS CS 2'
        	},
        	{
        		videoID: '2_0vFM38trE',
        		comments: 'This is the third video here',
        		title: 'ACAS CS 3'
        	},
        	{
        		videoID: 'sZCWG9YKjc0',
        		comments: 'This is the fourth video here',
        		title: 'ACAS CS 4'
        	}]
        }
    }
    render() {
    	var partial = this.props.tuts - 1;
    	console.log(this.state.block[partial].videoID)
    	var srcVideo = `https://www.youtube.com/embed/${this.state.block[partial].videoID}`;
        return (
        	<div>
        		<Navbar />
				<Sidebar />
				<div className="col-md-10 col-md-offset-1">
	        		<div className="panel panel-primary">
					  <div className="panel-heading center-obj">
					    {this.state.block[partial].title}
					  </div>
					  <div className="panel-body">
					  	<div className="center-obj">
					  		<iframe width="672" height="378" src={srcVideo} frameborder="0" allowfullscreen></iframe>
					  	</div>
					  	<div>
					  		{this.state.block[partial].comments}
					  	</div>
					  </div>
					</div>
				</div>
        	</div>
        );
    }
}

export default LearnPage;
