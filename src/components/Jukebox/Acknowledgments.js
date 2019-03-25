import React from "react"
import Credit from "./Credit"
import PlatformLinks from "./PlatformLinks"

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
				Album art and photo editing by Ajay Rakrhaj
			</p>
			<p className="line">Arcade machines by <Credit name="Hailey Uens" site="//www.instagram.com/haileyuensart/?hl=en"/></p>
			<p className="line">CD cover animation by <Credit name="Kevin Lee" site="//www.kevinleedesign.com"/></p>
		</div>
		<div className="verse">
			<p className="line">Thanks for believing in this project</p>
		</div>
		<div className="verse">
			<p className="line">
				Intro written and recorded by Brandon Day, Ethan Gans, Nicholas
				Vereschak, and Ryan Garbett. Recording engineer Danny Paulson
				Mixed and produced by Danny Paulson. Brandon Day - Guitar and piano Nicholas
				Vereschak - Drums Ryan Garbett - French horn and bass guitar Danny
				Paulson - Slide guitar. Recorded in My Bedroom and The Living Room
				St Clair Avenue West Fall 2018
				<PlatformLinks />
			</p>
		</div>
	</div>
)

export default Acknowledgments