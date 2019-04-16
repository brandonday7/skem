import React, { Component } from "react";
// import YouTubePlayer from 'react-player/lib/players/YouTube'
import ReactPlayer from "react-player"

class Player extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tracks: [
				{
					name: "intro",
					src: `${process.env.REACT_APP_BUCKET}Super+Rich+Kids.mp3`
					// src: "https://www.youtube.com/watch?v=XIUQeSOFm0M"

				},
				{
					name: "dramaQueen",
					src: `${process.env.REACT_APP_BUCKET}tyler.mp3`
					// src: "https://www.youtube.com/watch?v=SLrqm8F7TgM"
				},
				{
					name: "dependsOnYou",
					src: `${process.env.REACT_APP_BUCKET}Super+Rich+Kids.mp3`
					// src: "https://www.youtube.com/watch?v=XKQNJzquduI"
				},
				{
					name: "soMuchOfYourself",
					src: `${process.env.REACT_APP_BUCKET}tyler.mp3`
					// src: "https://www.youtube.com/watch?v=muU_ERWCgJA"
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
