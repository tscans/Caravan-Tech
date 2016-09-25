import React, {Component} from 'react';

class ToAddPost extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        	<div className="col-md-2 col-md-offset-10">
				<a href="/addpost" className="btn btn-success">Add Post Form</a>
			</div>
        );
    }
}

export default ToAddPost;
