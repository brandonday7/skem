import React, { Component } from "react"
import styled from "styled-components"
import "./i-miss-summer.css"

const StyledMessage = styled.h1`
	font-size: ${({ size }) => size ? size : 500}%;
	color: #D6A149;
	-webkit-text-stroke: 1px #C3813E;
	text-align: center;

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
					message: "I miss",
					time: 500,
					size: 800,
				},
				{
					message: "being a kid",
					time: 400,
					size: 500,
				},
				{
					message: "I miss",
					time: 400,
					size: 900,
				},
				{
					message: "the sun",
					time: 500,
					size: 450,
				},
				{
					message: "I miss",
					time: 600,
					size: 800,
				},
				{
					message: "my friends",
					time: 400,
					size: 500,
				},
				{
					message: "I miss",
					time: 400,
					size: 800,
				},
				{
					message: "girls",
					time: 200,
					size: 300,
				},
				{
					message: "I miss",
					time: 500,
					size: 500,
				},
				{
					message: "when feeling close",
					time: 900,
					size: 700,
				},
				{
					message: "with my family",
					time: 500,
					size: 400,
				},
				{
					message: "didn't feel like an accomplishment",
					time: 700,
					size: 500,
				},
				{
					message: "I miss",
					time: 300,
					size: 800,
				},
				{
					message: "feeling like",
					time: 200,
					size: 600,
				},
				{
					message: "I was getting somewhere,",
					time: 500,
					size: 500,
				},
				{
					message: "and when somewhere had a name",
					time: 800,
					size: 400,
				},
				{
					message: "I MISS SUMMER",
					time: 1300,
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