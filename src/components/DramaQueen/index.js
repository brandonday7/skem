import React, { Component } from "react";
import machine from "../../images/machine.png";
import { dqV1, dqV2, dqV3, dqV4, dqV5, dqV6, dqC } from "../../utils/lyrics.js";
import { dramaCredits } from "../../utils/credits.js";
import "./drama.css";

class DramaQueen extends Component {
	render() {
		return (
			<div className="drama-container">
				<h1 className="drama-heading">Drama Queen</h1>
				<div className="dq-lyrics-container">
					<div className="dq-left-lyrics">
						<p>The sky could be clean no</p>
						<p>Nights not what it needs to be</p>
						<p>And echo</p>
						<p />
						<p>Im sprawling in my sleep</p>
						<p>Dreams not what it seems to be</p>
						<p>Im alone</p>
						<p />
						<p>Still water blowing steam</p>
						<p>Being off beyond belief</p>
						<p>Ur such a woah</p>
						<p />
						<p>And if its drama Im the Queen</p>
						<p>How it pays to be me</p>
						<p>How Im broke</p>
						<p />
						<p>I talk to myself all the time</p>
						<p>Oh sigh here he goes fighting foes in his mind</p>
						<p>And what its like to have the air touch my arm </p>
						<p>Oh dear you wont be harmed</p>
						<p>Oh maybe I dont care and maybe thats alright</p>
					</div>
					<img src={machine} className="machine-image" />
					<div className="dq-right-lyrics">
						<p>A hot head on the scene</p>
						<p>Stop and staring at me</p>
						<p>Put on a show</p>
						<p />
						<p>This sky could be clean</p>
						<p>How many sides to this leaf</p>
						<p>Time to go</p>
						<p />
						<p>I talk to myself all the time</p>
						<p>Oh sigh here he goes fighting foes in his mind</p>
						<p>And what its like to have the air touch my arm </p>
						<p>Oh dear you wont be harmed</p>
						<p>Oh maybe I dont care and maybe thats alright</p>
						<p />
						<p className="credits">
							Written and recorded by Brandon Day Ethan Gans Nicholas Vereschak
							and Ryan Garbett Recording engineer Danny Paulson Produced by
							Danny Paulson Brandon Day Guitar and vocals Ethan Gans Guitar
							Nicholas Vereschak Drums Ryan Garbett Bass guitar Danny Paulson
							Organ Recorded in The Shed Runnymede Street Summer 2018
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default DramaQueen;
