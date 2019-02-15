import React from "react";
import styled from 'styled-components'

import next from "../../images/next.png"

const StyledImage = styled.img`
	position: absolute;
	width: 50px;
	transform: ${({scale}) => `translateX(${scale*47.5}vw) scaleX(${scale})`};
	cursor: pointer;
	z-index: 2;
	&:hover {
		width: 55px;
	}
  @media (max-width: 941px) {
		transform: ${({scale}) => `translateX(${scale*47}vw) scaleX(${scale})`};
		width: 40px;
  }
  @media (max-width: 762px) {
		transform: ${({scale}) => `translateX(${scale*43}vw) scaleX(${scale})`};
		width: 40px;
  }
`

const Arrow = ({move, type, scale}) => (
	<StyledImage src={next} onClick={() => move(type)} scale={scale}/>
)

export default Arrow;
