import React, { Component } from "react"
import ReactPlayer from "react-player"
import styled, { keyframes } from "styled-components"
import Instructions from "../Instructions"

const fade = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0
	}
`

const StyledContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fbf5f9;
`

const StlyedDiv = styled.div`
	height: 60vh;
	transform: translateX(-3vw);
	animation: ${({fadeOut}) => fadeOut && fade} 0.6s;
`

const StyledInstruction = styled.div`
	position: absolute;
	transform: translateY(15em);
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

	reset = () => this.setState({ playing: false })

	play = () => this.setState({ playing: true }, this.wait)
	wait = () => setTimeout(this.fade, 5000)
	fade = () => this.setState({ fadeOut: true }, this.redirect)
	redirect = () => setTimeout(() => {
		this.props.setReverse()
		this.props.history.push("/ep")
	}, 600)

	render() {
		const { playing, fadeOut } = this.state
		const { reverse } = this.props
		let cdVid = reverse ? "cdCaseReverse.mp4" : "cdCase.mp4"
		return (
			<StyledContainer>
				<StlyedDiv fadeOut={fadeOut}>
		      <ReactPlayer
		      	onClick={this.play}
		      	onEnded={() => {if (reverse) this.reset()}}
		      	muted
		        className='react-player'
		        playing={reverse ? true : playing}
		        url={`${process.env.REACT_APP_BUCKET}${cdVid}`}
		        width='100%'
		        height='100%'
		      />
	      </StlyedDiv>
	      {!playing && (
	      	<StyledInstruction onClick={this.play}>
  	      	<Instructions label="Click to enter" />
  	      </StyledInstruction>
    	  )}
      </StyledContainer>
		)
	}
}


export default CdCase