import React, { Component } from "react";
import "./drama.css";

class DramaQueen extends Component {
	render() {
		return (
			<div className="carousel-child">
				<h1 className="drama-heading">Drama Queen</h1>
				<div className="dq-lyrics-container">
					<div className="dq-lyrics">
						<div className="verse">
							<p className="line">This sky could be clean no</p>
							<p className="line">Nights not what it needs to be</p>
							<p className="line">And echo</p>
						</div>
						<div className="verse">
							<p className="line">Im sprawling in my sleep</p>
							<p className="line">Dreams not what it seems to be</p>
							<p className="line">Im alone</p>
						</div>
						<div className="verse">
							<p className="line">Still water blowing steam</p>
							<p className="line">Being off beyond belief</p>
							<p className="line">Ur such a woah</p>
						</div>
						<div className="verse">
							<p className="line">And if its drama Im the Queen</p>
							<p className="line">How it pays to be me</p>
							<p className="line">How Im broke</p>
						</div>
						<div className="verse">
							<p className="line">I talk to myself all the time</p>
							<p className="line">
								Oh sigh here he goes fighting foes in his mind
							</p>
							<p className="line">
								And what its like to have the air touch my arm
							</p>
							<p className="line">Oh dear you wont be harmed</p>
							<p className="line">
								Oh maybe I dont care and maybe thats alright
							</p>
						</div>
					</div>
					<img src={`${process.env.REACT_APP_BUCKET}dq.png`} className="machine-image" alt="Arcade" />
					<div className="dq-lyrics">
						<div className="verse">
							<p className="line">A hot head on the scene</p>
							<p className="line">Stop and staring at me</p>
							<p className="line">Put on a show</p>
						</div>
						<div className="verse">
							<p className="line">This sky could be clean</p>
							<p className="line">How many sides to this leaf</p>
							<p className="line">Time to go</p>
						</div>
						<div className="verse">
							<p className="line">I talk to myself all the time</p>
							<p className="line">
								Oh sigh here he goes fighting foes in his mind
							</p>
							<p className="line">
								And what its like to have the air touch my arm
							</p>
							<p className="line">Oh dear you wont be harmed</p>
							<p className="line">
								Oh maybe I dont care and maybe thats alright
							</p>
						</div>
						<div>
							<p className="credits">
								Drama Queen written and recorded by Brandon Day Ethan Gans
								Nicholas Vereschak and Ryan Garbett Recording engineer Danny
								Paulson Produced by Danny Paulson Brandon Day Guitar and vocals
								Ethan Gans Guitar Nicholas Vereschak Drums Ryan Garbett Bass
								guitar Danny Paulson Organ Recorded in The Shed Runnymede Street
								Summer 2018
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DramaQueen;
