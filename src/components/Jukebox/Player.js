import React, { Component } from "react";
import YouTubePlayer from 'react-player/lib/players/YouTube'

class Player extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tracks: [
				{
					name: "intro",
					// src: `${process.env.REACT_APP_BUCKET}intro.mp3`
					src: "https://www.youtube.com/watch?v=XIUQeSOFm0M"
				},
				{
					name: "dramaQueen",
					// src: `${process.env.REACT_APP_BUCKET}dq.mp3`
					src: "https://www.youtube.com/watch?v=XKQNJzquduI"
				},
				{
					name: "dependsOnYou",
					// src: `${process.env.REACT_APP_BUCKET}dpoy.mp3`
					src: "https://www.youtube.com/watch?v=SLrqm8F7TgM"
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
			// only works for youtube links without ads
      <YouTubePlayer
        playing={playing}
        height={'0px'}
        width={'0px'}
        config={{ youtube: { preload: true } }}
        url={tracks[trackIndex].src} 
        onEnded={nextTrack}
      />
		);
	}
}

export default Player;
