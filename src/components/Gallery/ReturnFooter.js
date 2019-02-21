import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Instructions from "../Instructions"

const StyledImage = styled.img`
	width: 50px;
	margin-right: 1.5em;
	transform: scaleX(-1);
  @media (max-width: 700px) {
    width: 35px;
  }
`
const StyledFooter = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
`

const ReturnFooter = ({ playReverse }) => (
	<StyledFooter>
		<Link to="/" className="return-link" onClick={playReverse}>
			<StyledDiv>
				<StyledImage src={`${process.env.REACT_APP_BUCKET}next.png`} />
				<Instructions 
					label="Return to the outside world" 
					color="white" 
					size={300} 
					blink={false}
				/>
			</StyledDiv>
		</Link>
	</StyledFooter>
)

export default ReturnFooter