import React, { Component } from "react"
import ReactPlayer from "react-player"
import styled, { keyframes } from "styled-components"
import Instructions from "../Instructions"
import Platforms from "./Platforms"

const fadeAway = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0
	}
`

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const StyledContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #faf4f8;
`
	// background-color: #f9f5f7;

const StlyedDiv = styled.div`
	overflow: hidden;
	width: 65vw;
	cursor: pointer;
	animation: ${({fadeOut}) => fadeOut ? fadeAway : fadeIn} 0.8s;


  @media (max-width: 700px) {
		width: 100vw;
  }
`

const StyledInstruction = styled.div`
	cursor: pointer;
`

class CdCase extends Component {
	constructor(props) {
		super(props)
		this.state = {
			playing: false,
			fadeOut: false
		}
	}

	reset = () => {
		this.setState({ playing: false }, this.props.playForward)
	}

	play = () => { 
		if (!this.state.playing) {
			this.setState({ playing: true }, this.wait)
		}
	}
	wait = () => setTimeout(this.fade, 5000)
	fade = () => this.setState({ fadeOut: true }, this.redirect)
	redirect = () => setTimeout(() => {
		this.props.playReverse()
		this.props.history.push("/ep")
	}, 800)

	render() {
		const { playing, fadeOut } = this.state
		const { reverse } = this.props
		let cdVid = reverse ? "cdCroppedReverse.mp4" : "cdCropped.mp4"
		return (
			<StyledContainer>
				<StlyedDiv fadeOut={fadeOut}>
		      <ReactPlayer
		      	// onClick={this.play}
		      	onEnded={() => {if (reverse) this.reset()}}
		      	muted
		      	playsinline
		        playing={reverse ? true : playing}
		        url={`${process.env.REACT_APP_BUCKET}${cdVid}#t=0.01`}
		        width='100%'
		        height='100%'
		      />
	      </StlyedDiv>
	      {!playing && !reverse && (
	      	<StyledInstruction /* onClick={this.play} */>
  	      	<Instructions blink={false} label="Coming soon" />
  	      </StyledInstruction>
    	  )}
    	  <Platforms />
      </StyledContainer>
		)
	}
}


export default CdCase