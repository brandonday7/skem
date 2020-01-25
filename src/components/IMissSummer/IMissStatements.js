import React, { Component } from "react"
import styled from "styled-components"
import "./i-miss-summer.css"

const StyledMessage = styled.h1`
	font-size: 500%;
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
					time: 500
				},
				{
					message: "being a kid",
					time: 400
				},
				{
					message: "I miss",
					time: 400
				},
				{
					message: "the sun",
					time: 500
				},
				{
					message: "I miss",
					time: 600
				},
				{
					message: "my friends",
					time: 400
				},
				{
					message: "I miss",
					time: 400
				},
				{
					message: "girls",
					time: 200
				},
				{
					message: "I miss",
					time: 500
				},
				{
					message: "when feeling close",
					time: 800
				},
				{
					message: "with my family",
					time: 500
				},
				{
					message: "didn't feel like an accomplishment",
					time: 700
				},
				{
					message: "I miss",
					time: 300
				},
				{
					message: "feeling like",
					time: 200
				},
				{
					message: "I was getting somewhere,",
					time: 500
				},
				{
					message: "and when somewhere had a name.",
					time: 1300
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
		} else {
			setTimeout(() => {
				this.setState({ complete: true })
			}, statements[index].time)
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