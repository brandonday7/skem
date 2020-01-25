import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import "./i-miss-summer.css"

const StyledMessage = styled.h1`
	font-size: ${({ size }) => size ? size : 500}%;
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
			complete: false,
			statements: [
				{
					message: "I miss",
					time: 700,
					size: 750,
				},
				{
					message: "being a kid",
					time: 500,
					size: 450,
				},
				{
					message: "I miss",
					time: 500,
					size: 900,
				},
				{
					message: "the sun",
					time: 600,
					size: 400,
				},
				{
					message: "I miss",
					time: 700,
					size: 500,
				},
				{
					message: "my friends",
					time: 500,
					size: 700,
				},
				{
					message: "I miss",
					time: 500,
					size: 800,
				},
				{
					message: "girls",
					time: 250,
					size: 300,
				},
				{
					message: "I miss",
					time: 800,
					size: 600,
				},
				{
					message: "when feeling close",
					time: 650,
					size: 700,
				},
				{
					message: "with my family",
					time: 600,
					size: 400,
				},
				{
					message: "didn't feel like an accomplishment",
					time: 800,
					size: 500,
				},
				{
					message: "I miss",
					time: 400,
					size: 800,
				},
				{
					message: "feeling like",
					time: 400,
					size: 600,
				},
				{
					message: "I was getting",
					time: 600,
					size: 500,
				},
				{
					message: "Somewhere,",
					time: 550,
					size: 300,
				},
				{
					message: "and when Somewhere had a name.",
					time: 1000,
					size: 400,
				},
				{
					message: "I MISS SUMMER",
					time: 0,
					size: 800,
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
		const { complete, statements, index } = this.state
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