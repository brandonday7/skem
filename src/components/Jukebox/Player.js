import React, { Component } from "react";
import ReactPlayer from 'react-player'

class Player extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tracks: [
				{
					name: "intro",
					// src: `${process.env.REACT_APP_BUCKET}intro.mp3`
					src: "https://www.youtube.com/watch?v=6ONRf7h3Mdk"
				},
				{
					name: "dramaQueen",
					// src: `${process.env.REACT_APP_BUCKET}dq.mp3`
					src: "https://www.youtube.com/watch?v=XKQNJzquduI"
				},
				{
					name: "dependsOnYou",
					// src: `${process.env.REACT_APP_BUCKET}dpoy.mp3`
					src: "https://www.youtube.com/watch?v=6B3YwcjQ_bU"
				},
				{
					name: "soMuchOfYourself",
					// src: `${process.env.REACT_APP_BUCKET}smoy.mp3`
					src: "https://www.youtube.com/watch?v=muU_ERWCgJA"
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
