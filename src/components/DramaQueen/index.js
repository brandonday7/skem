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
						<p>The sky could be clean, no,</p>
						<p>Night's not what it needs to be,</p>
						<p>And echo!</p>
						<p />
						<p>I'm sprawling in my sleep</p>
						<p>Dream's not what it seems to be,</p>
						<p>I'm alone!</p>
						<p />
						<p>Still water blowing steam,</p>
						<p>Being off, beyond belief,</p>
						<p>Ur such a... woah!</p>
						<p />
						<p>And if it's drama I'm the Queen,</p>
						<p>How it pays to be me,</p>
						<p>How I'm broke!</p>
						<p />
						<p>I talk to myself all the time,</p>
						<p>Oh sigh, here he goes, fighting foes in his mind,</p>
						<p>And what it's like, to have the air touch my arm, </p>
						<p>"Oh dear, you won't be harmed",</p>
						<p>Oh maybe I don't care and maybe that's alright.</p>
					</div>
					<img src={machine} className="machine-image" />
					<div className="dq-right-lyrics">
						<p>A hot head on the scene,</p>
						<p>Stop and staring at me,</p>
						<p>Put on a show.</p>
						<p />
						<p>This sky could be clean,</p>
						<p>How many sides to this leaf?</p>
						<p>Time to go.</p>
						<p />
						<p>I talk to myself all the time,</p>
						<p>Oh sigh, here he goes, fighting foes in his mind,</p>
						<p>And what it's like, to have the air touch my arm, </p>
						<p>"Oh dear, you won't be harmed",</p>
						<p>Oh maybe I don't care and maybe that's alright.</p>
						<p className="credits">{dramaCredits}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default DramaQueen;
