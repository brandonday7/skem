import React, { Component } from "react"
import ReactPlayer from "react-player"
import styled, { keyframes } from "styled-components"

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
	background-color: #f7f2f6;
`

const StlyedDiv = styled.div`
	height: 60vh;
	transform: translateX(-3vw);
	animation: ${({fadeOut}) => fadeOut && fade} 0.6s;
`

class CdCase extends Component {
	constructor(props) {
		super(props)
		this.state = {
			playing: false,
			fadeOut: false
		}
	}

	play = () => this.setState({ playing: true }, this.wait)
	wait = () => setTimeout(this.fade, 5000)
	fade = () => this.setState({ fadeOut: true }, this.redirect)
	redirect = () => setTimeout(() => this.props.history.push("/ep"), 600)

	render() {
		const { playing, fadeOut } = this.state
		return (
			<StyledContainer>
				<StlyedDiv fadeOut={fadeOut}>
		      <ReactPlayer
		      	onClick={this.play}
		      	muted
		        className='react-player'
		        playing={playing}
		        url={`${process.env.REACT_APP_BUCKET}cdCase.mp4`}
		        width='100%'
		        height='100%'
		      />
	      </StlyedDiv>
      </StyledContainer>
		)
	}
}


export default CdCase