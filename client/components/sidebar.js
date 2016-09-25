import React, {Component} from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div className="has-drawer">
                    <div id="drawerExample" className="drawer drawer-inverse dw-xs-10 dw-sm-6 dw-md-4 fold" aria-labelledby="drawerExample">
                        <div className="drawer-controls top-pad">
                            <a href="#drawerExample" data-toggle="drawer" aria-foldedopen="false" aria-controls="drawerExample" className="btn btn-primary btn-sm">Learn</a>
                        </div>
                        <div className="drawer-contents">
                            <div className="drawer-heading">
                                <h2 className="drawer-title">Learn</h2>
                            </div>
                            <div className="drawer-body">
                                <p>
                                    This drawer contains the links to all of the tutorials you will need in this course to learn Computer Science and or Art.
                                </p>
                            </div>
                            <ul className="drawer-nav">
                                <li role="presentation"><a href="/learn/1">CS 1</a></li>
                                <li role="presentation"><a href="/learn/2">CS 2</a></li>
                                <li role="presentation"><a href="/learn/3">CS 3</a></li>
                                <li role="presentation"><a href="/learn/4">CS 4</a></li>
                                
                            </ul>
                            <div className="drawer-footer">
                                <small>Listed above are certified course paths. If there isn't something listed you wish to learn, let me know.</small>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
