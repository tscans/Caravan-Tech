import React, {Component} from 'react';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    toTube(){
        window.location.href="https://www.youtube.com/playlist?list=PLzAdT8w8V6mzxKDFLBDNJGDRYT7552Djr";
    }
    render() {
        return(
        	<div>
				<div className="jumbotron3">
				    <div className="embed-responsive embed-responsive-16by9" >
						<iframe className="embed-responsive-item" src="//www.youtube.com/embed/CBmQWzOAsxk?rel=0&amp;autoplay=1"></iframe>
					</div>
				  <div className="container">
                    <h1 className="col-xs-12 center-text"><span className="glyphicon glyphicon-education"></span> Mount Carmel Computer Arts and Sciences Provides a High School Technology Education Like No Other</h1>
                    <br />
                    <div>
                      <div className="thumbnail box-l">
                          <img src="http://i.imgur.com/GXATcov.jpg"/>
                      </div>
                      <div className="media-body box2">
                        <h4 className="media-heading"><span className="glyphicon glyphicon-picture"></span> Computer Media and Arts</h4>
                        <p>
                            While many high schools are implementing computer science classes, few are able to offer computer arts as field of study. Some schools may offer video development with basic software like iMovie or Final Cut, very few can teach Adobe Photoshop or CAD software. The computer arts program offers advanced video design with special effects After Effects and 3D modeling with Blender software. Students can jump right in once enrolled in the course and begin learning very visually appealing and intellectually stimulating software.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div>
                        <div className="thumbnail box">
                          <img src="http://i.imgur.com/GX07isn.jpg?1"/>
                          <div className="caption">
                            <h3>Blender 3D Humanoid Animation</h3>
                          </div>
                        </div>
                        <div className="thumbnail box">
                          <img src="http://i.imgur.com/e5lHTNE.png"/>
                          <div className="caption">
                            <h3>Photoshop Graphic</h3>
                          </div>
                        </div>
                        <div className="thumbnail box">
                          <img src="http://i.imgur.com/m6wj95B.png"/>
                          <div className="caption">
                            <h3>Blender 3D Bear Model</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container cont-t2">
                    <div className="media-body box2">
                        <h4 className="media-heading center-text"><span className="glyphicon glyphicon-console"></span> Computer Science</h4>
                        <p>
                            Students are on a track in CS that will teach them the fundamentals of how computers work and operate while tackling projects that make them learn code in a natural way. Students start by learning rudimentary C++ and how executable files work in IDE’s. When they are proficient in CS principles, they move on to web technologies. After learning the client server model, HTML, CSS, and JS, the course splits into different fields from which the student can choose. Basic game and graphics building, web and mobile application development, or continued executable work in IDE’s becomes the focus.
                        </p>
                    </div>
                    <div className="row">
                      <div>
                        <div className="thumbnail box-ln">
                          <img src="http://i.imgur.com/9flxWqn.png"/>
                          <div className="caption">
                            <h3>C++ Programming</h3>
                          </div>
                        </div>
                        <div className="thumbnail box-ln">
                          <img src="http://i.imgur.com/UI6yzxQ.png"/>
                          <div className="caption">
                            <h3>Game Design</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container center-text">
                    <div className="media-body box2">
                        <h3 className="media-heading center-text"><span className="glyphicon glyphicon-play"></span> Class Highlights</h3>
                        <p>
                            Over the past year we accumulated a significant amount of projects done by our students. Below is a link to the highlights of MC computer arts and science learners.
                        </p>
                    </div>
                    <div onClick={this.toTube.bind(this)}>
                        <img width="560" height="315" src="http://i.imgur.com/DLMW3ib.png" />
                    </div>
                  </div>
				</div>
                <footer>
                    <div>
                        <p>Website developed and maintained by Tom Scanlan. Open source technologies like Meteor js and React js were used to develop the interface and backend.</p>
                        <p>Questions or comments can be directed to tscanlan@mchs.org</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default MainPage;