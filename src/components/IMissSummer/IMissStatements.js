import React, { Component } from "react"
import styled from "styled-components"
import "./i-miss-summer.css"

const StyledMessage = styled.h1`
	font-size: ${({ size }) => size ? size : 50}px;
	color: white;
	opacity: 0.7;
	text-align: center;
`

const StyledFullscreen = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url("https://roseredbucket.s3.amazonaws.com/blank-ims.jpg");
	background-repeat: no-repeat;
	background-position: bottom;
`

class IMissStatements extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			index: 0,
			statements: [
				{
					message: "",
					time: 1000,
					size: 10
				},
				{
					message: "I miss",
					time: 700,
					size: 75,
				},
				{
					message: "being a kid",
					time: 500,
					size: 45,
				},
				{
					message: "I miss",
					time: 500,
					size: 90,
				},
				{
					message: "the sun",
					time: 600,
					size: 40,
				},
				{
					message: "I miss",
					time: 700,
					size: 50,
				},
				{
					message: "my friends",
					time: 600,
					size: 70,
				},
				{
					message: "I miss",
					time: 400,
					size: 90,
				},
				{
					message: "girls",
					time: 250,
					size: 30,
				},
				{
					message: "I miss",
					time: 800,
					size: 60,
				},
				{
					message: "when feeling close",
					time: 650,
					size: 70,
				},
				{
					message: "with my family",
					time: 600,
					size: 40,
				},
				{
					message: "didn't feel like an accomplishment",
					time: 850,
					size: 50,
				},
				{
					message: "I miss",
					time: 400,
					size: 80,
				},
				{
					message: "feeling like",
					time: 400,
					size: 60,
				},
				{
					message: "I was getting",
					time: 600,
					size: 50,
				},
				{
					message: "Somewhere,",
					time: 550,
					size: 30,
				},
				{
					message: "and when Somewhere had a name.",
					time: 1000,
					size: 40,
				},
				{
					message: "I Miss Summer",
					time: 0,
					size: 80,
				}
			]
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
		} 
	}



	render() {
		const { statements, index } = this.state
		return (
			<StyledFullscreen>
				<StyledMessage
					size={statements[index].size} 
				>
					{statements[index].message}
				</StyledMessage>
			</StyledFullscreen>
		)
	}
}

export default IMissStatements