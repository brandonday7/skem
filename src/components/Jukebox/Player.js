import React, { Component } from "react";
import ReactPlayer from 'react-player'

import intro from "../../songs/intro.mp3"
import dq from "../../songs/dq.mp3"
import dpoy from "../../songs/dpoy.mp3"
import smoy from "../../songs/smoy.mp3"

class Player extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tracks: [
				{
					name: "intro",
					src: intro
				},
				{
					name: "dramaQueen",
					src: dq
				},
				{
					name: "dependsOnYou",
					src: dpoy
				},
				{
					name: "soMuchOfYourself",
					src: smoy
				},
			]
		};
	}

	render() {
		const { playing, trackIndex, nextTrack } = this.props
		const { tracks } = this.state
		return (
      <ReactPlayer
        playing={playing}
        height={'0px'}
        width={'0px'}
        config={{ file: { forceAudio: true } }}
        url={tracks[trackIndex].src} 
        onEnded={nextTrack}
      />
		);
	}
}

export default Player;
