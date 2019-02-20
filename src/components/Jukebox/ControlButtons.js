import React, { Fragment } from "react"

import Button from "./Button"

const ControlButtons = ({ pause, play, nextTrack, myTurn }) => (
	<Fragment>
		<Button 
			name="pause" 
			src={`${process.env.REACT_APP_BUCKET}pause.png`} 
			myTurn={myTurn} 
			onClick={pause}
		/>
		<Button 
			name="play" 
			src={`${process.env.REACT_APP_BUCKET}play.png`} 
			myTurn={myTurn} 
			onClick={play}
		/>
		<Button 
			name="next" 
			src={`${process.env.REACT_APP_BUCKET}next.png`} 
			myTurn={myTurn} 
			onClick={nextTrack}
		/>
	</Fragment>
)

export default ControlButtons