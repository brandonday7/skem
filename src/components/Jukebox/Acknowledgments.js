import React from "react"
import Credit from "./Credit"
import PlatformLinks from "./PlatformLinks"

const introApple = ""
const introSpotify = "https://open.spotify.com/track/7GFUHcZsURiLhKt3j0oxso?si=k4W1h_4jRw2M6JXxOYxtng"

const Acknowledgments = () => (
	<div className="acknowledgments">
		<div className="verse">
			<p className="line">
				Thank you to all our friends and family for putting up with
				constant noise and coming to open mics and backyards to watch us
				have the most fun weve ever had
			</p>
		</div>
		<div className="verse">
			<p className="line">Art direction by Brandon Day</p>
			<p className="line">Drama Queen session video by Ethan Gans</p>
			<p className="line">
				Album art and photo editing by Ajay Rakhraj
			</p>
			<p className="line">Illustrations by <Credit name="Hailey Uens" site="//www.instagram.com/haileyuensart/?hl=en"/></p>
			<p className="line">CD cover animation by <Credit name="Kevin Lee" site="//www.kevinleedesign.com"/></p>
			<p className="line">Additional mixing by <Credit name="Small Dog Studios" site="//smalldogstudio.weebly.com"/></p>
			<p className="line">Mastered by <Credit name="Connor Salmoral at Salmoral Mastering" site="//www.salmoralstudios.com"/></p>
			<p className="line">Special thanks to Christo Paulson</p>
		</div>
		<div className="verse">
			<p className="line">Thanks for believing in this project</p>
		</div>
		<div className="verse">
			<p className="line">
				Intro written and recorded by Brandon Day, Ethan Gans, Nick
				Vereshchak, and Ryan Garbett. Recording engineer Danny Paulson
				Mixed and produced by Danny Paulson. Brandon Day - Guitar and piano Nick
				Vereshchak - Drums Ryan Garbett - French horn and bass guitar Danny
				Paulson - Slide guitar. Recorded in My Bedroom and The Living Room
				St Clair Avenue West Fall 2018
				<PlatformLinks platform="apple" link={introApple}/>
				<PlatformLinks link={introSpotify}/>
			</p>
		</div>
	</div>
)

export default Acknowledgments