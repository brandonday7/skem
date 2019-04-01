import React, { Component } from "react";
import YouTubePlayer from 'react-player/lib/players/YouTube'
// import ReactPlayer from "react-player"

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
					src: "https://www.youtube.com/watch?v=SLrqm8F7TgM"
				},
				{
					name: "dependsOnYou",
					// src: `${process.env.REACT_APP_BUCKET}dpoy.mp3`
					src: "https://www.youtube.com/watch?v=XKQNJzquduI"
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
		const { playing, trackIndex, nextTrack, resetPlay, play } = this.props
		const { tracks } = this.state
		return (
			// only works for youtube links without ads
      <YouTubePlayer
      	onReady={resetPlay}
      	onPlay={() => document.getElementById("site-wrapper").style.backgroundColor = "green"}
      	onPause={() => {
      		document.getElementById("site-wrapper").style.backgroundColor = "red"
      		// resetPlay()
      		// console.log(document.getElementsByTagName("iframe")[0])
      		// play()
      	}}
      	light
      	onBuffer={() => document.getElementById("site-wrapper").style.backgroundColor = "blue"}
        playing={playing}
        height={'0px'}
        width={'0px'}
        // config={{ file: { forceAudio: true } }}
        config={{ youtube: { preload: true } }}
        url={`${tracks[trackIndex].src}?autoplay=1`} 
        onEnded={nextTrack}
      />
		);
	}
}

export default Player;
