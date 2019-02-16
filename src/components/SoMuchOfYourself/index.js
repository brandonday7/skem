import React, { Component } from "react";
import "./smoy.css";
import smoy from "../../images/smoy.png";
import "../DramaQueen/drama.css";

class SoMuchOfYourself extends Component {
	render() {
		return (
			<div className="carousel-child">
				<h1 className="drama-heading">So Much of Yourself</h1>
				<div className="dq-lyrics-container">
					<div className="dq-lyrics">
						<div className="verse">
							<p className="line">Youre a liar</p>
							<p className="line">I believe</p>
							<p className="line">You dont wanna be here</p>
							<p className="line">Then leave</p>
						</div>
						<div className="verse">
							<p className="line">You think too much of yourself</p>
							<p className="line">You think too much of yourself</p>
						</div>
						<div className="verse">
							<p className="line">And when you cry</p>
							<p className="line">They apologize</p>
							<p className="line">Isnt that nice</p>
							<p className="line">Youre biding time</p>
							<p className="line">Youre spilling mine</p>
							<p className="line">Do you mind</p>
						</div>
						<div className="verse">
							<p className="line">Youre a loner</p>
							<p className="line">Or is it just me</p>
							<p className="line">You dont phone</p>
							<p className="line">And they wont make a scene</p>
						</div>
					</div>
					<img src={smoy} className="machine-image" alt="Arcade" />
					<div className="dq-lyrics">
						<div className="verse">
							<p className="line">You think so much of yourself</p>
							<p className="line">You think so much of yourself</p>
						</div>
						<div className="verse">
							<p className="line">And when you cry</p>
							<p className="line">They apologize</p>
							<p className="line">Isnt that nice</p>
							<p className="line">Youre biding time</p>
							<p className="line">Youre killing mine</p>
							<p className="line">Do you mind</p>
						</div>

						<div>
							<p className="credits">
								So Much of Yourself written and recorded by Brandon Day Ethan
								Gans Nicholas Vereschak and Ryan Garbett Recording engineer
								Danny Paulson Produced by Danny Paulson Brandon Day Guitar and
								vocals Ethan Gans Guitar Nicholas Vereschak Drums and keys Ryan
								Garbett Bass guitar Recorded in my bedroom my living room Nicks
								apartment and somewhere in Israel Fall 2018
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SoMuchOfYourself;
