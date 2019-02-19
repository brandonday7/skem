import React, { Component } from "react";
import "./depends.css";
import "../DramaQueen/drama.css";

class DependsOnYou extends Component {
	render() {
		return (
			<div className="carousel-child">
				<h1 className="drama-heading">Depends On You</h1>
				<div className="dq-lyrics-container">
					<div className="dq-lyrics">
						<div className="verse">
							<p className="line">Youre all up in my head</p>
							<p className="line">Youre a funny kind of meds</p>
							<p className="line">And Im sick</p>
						</div>
						<div className="verse">
							<p className="line">Your friends condescend to me</p>
							<p className="line">Got me thinking on an end</p>
							<p className="line">To me</p>
							<p className="line">Times ticked</p>
						</div>
						<div className="verse">
							<p className="line">Since when do I depend on you</p>
						</div>
						<div className="verse">
							<p className="line">I was a stone unturned wasnt I</p>
							<p className="line">Pleasantly petrified</p>
							<p className="line">Now you got me rolling down</p>
						</div>
						<div className="verse">
							<p className="line">So what do you suppose I do tonight</p>
							<p className="line">I swear I wont put up a fight</p>
							<p className="line">Now you got me on the ground</p>
						</div>
					</div>
					<img src={`${process.env.REACT_APP_BUCKET}depends.png`} className="machine-image" alt="Arcade" />
					<div className="dq-lyrics">
						<div className="verse">
							<p className="line">Since when do I depend on you</p>
						</div>
						<div className="verse">
							<p className="line">From when you stepped into my house</p>
							<p className="line">To when you sat down on my couch</p>
							<p className="line">You checked out babe</p>
							<p className="line">From when I stepped into your house</p>
							<p className="line">To when I sat down on your couch</p>
							<p className="line">You checked out babe</p>
						</div>
						<div className="verse">
							<p className="line">Since when do I depend on you</p>
						</div>
						<div>
							<p className="credits">
								Depends on You written and recorded by Brandon Day Ethan Gans
								Nicholas Vereschak and Ryan Garbett Recording engineer Danny
								Paulson Produced by Danny Paulson Brandon Day Guitar and vocals
								Ethan Gans Guitar Nicholas Vereschak Drums Ryan Garbett Bass
								guitar Recorded in my bedroom and somewhere in Israel Fall 2018
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DependsOnYou;
