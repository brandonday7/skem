import React, { Component } from "react"
import styled from "styled-components"
import ReactPlayer from 'react-player'

import "./i-miss-summer.css"

const StyledContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
	background-color: #e8e9eb;
  align-items: center;
`

const StyledChapterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ width }) => width}px;
  flex-wrap: wrap;
  margin: 0 0.8em;
`

const StyledFlexBox = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column
  }
`

const StyledChapterHeading = styled.p`
	color: #d6a047;
  -webkit-text-stroke: 1px #c88246;
  font-size: 150%;
  cursor: pointer;
  margin-bottom: 1em;
  margin-top: ${({ topMargin }) => topMargin ? '1em' : 0};
  opacity: ${({ selected }) => selected ? 1 : 0.7};
  white-space: nowrap;

	&:hover {
    opacity: 1;
		color: #df9211;
		transition: 0.5s;
  }
  
  @media (max-width: 615px) {
    font-size: 140%;
  }	
`

const StyledTrackTitle = styled.p`
  max-width: 95vw;
  font-size: 300%;
  margin: 0 0 0.5em 0;
  color: #d6a047;
  -webkit-text-stroke: 1px #c88246;

  @media (max-width: 615px) {
    font-size: 180%;
  }	
`

class VideoPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tracks: [
        {
          title: "You Were Raised in the Sunshine", 
          url: "https://www.youtube.com/watch?v=z3qZsIBStOA",
          label: "Chapter I"
        },
        {
          title: "Nostalgia Ultra",
          url: "https://www.youtube.com/watch?v=piJIUQDqkIY",
          label: "Chapter II"
        },
        {
          title: "Ur ok",
          url: "https://www.youtube.com/watch?v=r4pi__ynpPg",
          label: "Chapter III"
        },
        {
          title: "Daisy",
          url: "https://www.youtube.com/watch?v=TyBuNsgEjT0",
          label: "Chapter IV"
        },
        {
          title: "Chill Pills",
          url: "https://www.youtube.com/watch?v=YC-Rr1HaqEw",
          label: "Chapter V"
        }
    ],
      trackIndex: 0
    }
  }

  render() {
    const { tracks, trackIndex } = this.state
    const { history } = this.props
    return (
      <StyledContainer>
        <StyledFlexBox>
          <StyledChapterContainer width={200}>
            {tracks.slice(0, 2).map((track, key) => {
              return(
                <StyledChapterHeading 
                  key={key}
                  onClick={() => this.setState({ trackIndex: key })}
                  selected={trackIndex === key}
                >
                  {track.label}
                </StyledChapterHeading>
                )
              })}
            </StyledChapterContainer>
          <StyledChapterContainer width={340}>
            {tracks.slice(2, 5).map((track, key) => {
              return (
                <StyledChapterHeading
                  key={key}
                  onClick={() => this.setState({ trackIndex: key + 2 })}
                  selected={trackIndex === key + 2}
                >
                  {track.label}
                </StyledChapterHeading>
              )
            })}
          </StyledChapterContainer>
        </StyledFlexBox>
          <StyledTrackTitle>{tracks[trackIndex].title}</StyledTrackTitle>
        <ReactPlayer url={tracks[trackIndex].url} className="video-width"/>
        <StyledChapterHeading 
          selected={true} 
          topMargin={true}
          onClick={() => history.push('/')}
        >
          It'll be a dream come true then, won't it?
        </StyledChapterHeading>
      </StyledContainer>
    )
  }
}

export default VideoPanel
