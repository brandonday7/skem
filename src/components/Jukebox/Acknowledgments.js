import React from "react"
import Credit from "./Credit"

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
				Album art and photo editing by <Credit name="Ajay Rakrhaj" site="https://google.com"/>
			</p>
			<p className="line">Arcade machines by <Credit name="Hailey Uens" site="https://www.instagram.com/haileyuensart/?hl=en"/></p>
			<p className="line">CD cover animation by <Credit name="Kevin Lee" site="https://www.kevinleedesign.com"/></p>
		</div>
		<div className="verse">
			<p className="line">Thanks for doing all this for free</p>
		</div>
		<div className="verse">
			<p className="line">
				Intro written and recorded by Brandon Day Ethan Gans Nicholas
				Vereschak and Ryan Garbett Recording engineer Danny Paulson
				Produced by Danny Paulson Brandon Day Guitar and piano Nicholas
				Vereschak Drums Ryan Garbett French horn and bass guitar Danny
				Paulson Slide guitar Recorded in The Bedroom and The Living Room
				St Clair Avenue West Fall 2018
			</p>
		</div>
	</div>
)

export default Acknowledgments