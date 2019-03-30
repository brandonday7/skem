import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Instructions from "../Instructions"
import "./header.css";

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loaded: false
		}
	}

	componentDidMount() {
		const vid = document.getElementById("session-vid")
		vid.oncanplaythrough = () => this.setState({ loaded: true })
	}
	render() {
		const { loaded } = this.state
		return (
			<Fragment>
			<div className="video-container">
				<video 
					id="session-vid"
					className={`video ${!loaded ? "invisible" : ""}`} 
					alt="Rose Red Youth EP Backyard" 
					loop 
					autoPlay 
					muted 
					playsInline
					src={`${process.env.REACT_APP_BUCKET}pinkAndWhite.mp4#t=0.01`}
				/>
				<div className="absolute">
					<div className="title-container">
						{loaded ?
							<h1 className="header-title">Rose Red Youth</h1> :
							<Instructions label="Loading..." color="#ffaaad" size="400"/>
						}
					</div>
				</div>
			</div>
			{loaded && <div className="chevron-container">
							<FontAwesomeIcon 
								className="header-title chevron" 
								icon={faChevronDown}
							/>
						</div>}
			</Fragment>
		);
	}
}

export default Header;
