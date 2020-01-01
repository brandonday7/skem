import React from "react"
import styled from "styled-components"
import "../i-miss-summer.css"

import kids from "../../../images/ims-photos/kids.jpg"


const YouWereRaisedInTheSunshine = () => (
	<div className="center">
		<div className="row">
			<div className="square">
				<img alt="days" width="300" src={kids} />
			</div>
			<div className="square">
				<p>Hold me honey, oh you're all mine</p>
				<p>Thinking of me, only sometimes</p>
				<p>You be brave on the front lines</p>
				<p>You were raised,</p>
				<p>Raised in the sunshine</p>
			</div>
		</div>
	</div>
)

export default YouWereRaisedInTheSunshine