import React, { Fragment } from "react"
import styled, { keyframes } from "styled-components"

import Button from "./Button"

import pauseButton from "../../images/pause.png";
import playButton from "../../images/play.png";
import nextButton from "../../images/next.png";

const ControlButtons = ({ pause, play, nextTrack, myTurn }) => (
	<Fragment>
		<Button 
			name="pause" 
			src={pauseButton} 
			myTurn={myTurn} 
			onClick={pause}
		/>
		<Button 
			name="play" 
			src={playButton} 
			myTurn={myTurn} 
			onClick={play}
		/>
		<Button 
			name="next" 
			src={nextButton} 
			myTurn={myTurn} 
			onClick={nextTrack}
		/>
	</Fragment>
)

export default ControlButtons