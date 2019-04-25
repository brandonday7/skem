import React, { Component } from "react";
import PlatformLinks from "../Jukebox/PlatformLinks"
import "../DramaQueen/drama.css";

const dpoyApple = ""
const dpoySpotify = "https://open.spotify.com/track/3FgC976YtfakSwI90dRfIQ?si=W3VKT71SRG64iXkREJ4XFA"

class DependsOnYou extends Component {
	render() {
		return (
			<div className="carousel-child">
				<h1 className="drama-heading">Depends On You</h1>
				<div className="dq-lyrics-container">
					<div className="dq-lyrics">
						<div className="verse left-padding">
							<p className="line">You're all up in my head,</p>
							<p className="line">You're a funny kind of meds,</p>
							<p className="line">And I'm sick</p>
						</div>
						<div className="verse left-padding">
							<p className="line">Your friends condescend to me,</p>
							<p className="line">Got me thinking on an end,</p>
							<p className="line">To me,</p>
							<p className="line">Time's ticked</p>
						</div>
						<div className="verse left-padding">
							<p className="line">Since when do I depend on you?</p>
						</div>
						<div className="verse left-padding">
							<p className="line">I was a stone unturned wasn't I,</p>
							<p className="line">Pleasantly petrified,</p>
							<p className="line">Now you got me rolling down,</p>
						</div>
						<div className="verse left-padding">
							<p className="line">So what do you suppose I do tonight,</p>
							<p className="line">I swear I won't put up a fight,</p>
							<p className="line">Now you got me on the ground</p>
						</div>
					</div>
					<div className="machine-container">
						<img 
							src={`${process.env.REACT_APP_BUCKET}depends.png`} 
							className="machine-image" 
							alt="Depend on You Arcade Machine Rose Red Youth" />
					</div>
					<div className="dq-lyrics">
						<div className="verse left-padding">
							<p className="line">Since when do I depend on you?</p>
						</div>
						<div className="verse left-padding">
							<p className="line">From when you stepped into my house,</p>
							<p className="line">To when you sat down on my couch,</p>
							<p className="line">You checked out,</p>
							<p className="line">From when I stepped into your house,</p>
							<p className="line">To when I sat down on your couch,</p>
							<p className="line">You checked out</p>
						</div>
						<div className="verse left-padding">
							<p className="line">Since when do I depend on you?</p>
						</div>
						<div>
							<p className="credits left-padding">
								Depends on You written and recorded by Brandon Day, Ethan Gans,
								Nick Vereshchak, and Ryan Garbett. Recording engineer Danny
								Paulson. Mixed and produced by Danny Paulson. Brandon Day - Guitar and vocals
								Ethan Gans - Guitar Nick Vereshchak - Drums Ryan Garbett - Bass
								guitar. Recorded in my house, The Shed, and somewhere in Israel Fall 2018
								<PlatformLinks platform="apple" link={dpoyApple} />
								<PlatformLinks link={dpoySpotify} />
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DependsOnYou;
