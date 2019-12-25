import React, { Component } from "react"
import styled from "styled-components"
import "./i-miss-summer.css"

const StyledMessage = styled.h1`
	font-size: 500%;
	color: white;
`

const StyledFullscreen = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

class IMissStatements extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			index: 0,
			complete: false,
			statements: [
				{
					message: "I miss being a kid",
					time: 200
				},
				{
					message: "I miss the sun",
					time: 200
				},
				{
					message: "I miss my friends",
					time: 200
				},
				{
					message: "I miss girls",
					time: 200
				},
				{
					message: "I miss when feeling close with my family didn't feel like an accomplishment",
					time: 300
				},
				{
					message: "I miss feeling like I was getting somewhere,",
					time: 400
				},
				{
					message: "And when somewhere had a name",
					time: 100
				}
			],
			currentWord: "I"
		}
	}

	componentDidMount() {
		this.setNewMessage()
	}


	setNewMessage = () => {
		const { index, statements } = this.state
		if (index < statements.length - 1) {
			setTimeout(() => {
				this.setState({ index: index + 1 }, () => {
					this.setNewMessage()
				})
			}, statements[index].time)
		} else {
			this.setState({ complete: true })
		}

	}



	render() {
		const { complete, statements, index } = this.state
		return (
			<StyledFullscreen>
				<StyledMessage>{complete ? "I Miss Summer" : statements[index].message}</StyledMessage>
			</StyledFullscreen>
		)
	}
}

export default IMissStatements