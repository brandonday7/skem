import React, { Component } from "react";
import ReactPlayer from "react-player"

class Player extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tracks: [
				{
					name: "intro",
					// src: `${process.env.REACT_APP_BUCKET}Super+Rich+Kids.mp3`
					src: `${process.env.REACT_APP_BUCKET}mp3s/INTRO_FINAL.mp3`
				},
				{
					name: "dramaQueen",
					// src: `${process.env.REACT_APP_BUCKET}tyler.mp3`
					src: `${process.env.REACT_APP_BUCKET}mp3s/DQ_FINAL.mp3`
				},
				{
					name: "dependsOnYou",
					// src: `${process.env.REACT_APP_BUCKET}Super+Rich+Kids.mp3`
					src: `${process.env.REACT_APP_BUCKET}mp3s/DPOY_FINAL.mp3`
				},
				{
					name: "soMuchOfYourself",
					// src: `${process.env.REACT_APP_BUCKET}tyler.mp3`
					src: `${process.env.REACT_APP_BUCKET}mp3s/SMOY_FINAL.mp3`
				},
			]
		};
	}

	render() {
		const { playing, trackIndex, nextTrack } = this.props
		const { tracks } = this.state
		return (
			// only works for youtube links without ads
      <ReactPlayer
        playing={playing}
        height={'0px'}
        width={'0px'}
        config={{ file: { forceAudio: true } }}
        // config={{ youtube: { preload: true } }}
        url={tracks[trackIndex].src} 
        onEnded={nextTrack}
      />
		);
	}
}

export default Player;
