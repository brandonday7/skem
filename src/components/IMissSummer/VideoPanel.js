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
  width: 600px;
  flex-wrap: wrap;
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
`

const StyledTrackTitle = styled.p`
  font-size: 400%;
  margin: 0 0 0.5em 0;
  color: #d6a047;
  -webkit-text-stroke: 1px #c88246;
`

class VideoPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tracks: [
        {
          title: "You Were Raised in the Sunshine", 
          url: "https://www.youtube.com/watch?v=NF47oaT6qzc",
          label: "Chapter I"
        },
        {
          title: "Nostalgia Ultra",
          url: "https://www.youtube.com/watch?v=Iyy3YOpxL2k",
          label: "Chapter II"
        },
        {
          title: "Ur ok",
          url: "https://www.youtube.com/watch?v=1K93ioXL63c",
          label: "Chapter III"
        },
        {
          title: "Daisy",
          url: "https://www.youtube.com/watch?v=IFXIjI1ZZQs",
          label: "Chapter IV"
        },
        {
          title: "Chill Pills",
          url: "https://www.youtube.com/watch?v=Bimd2nZirT4",
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
        <StyledChapterContainer>
          {tracks.map((track, key) => {
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
          <StyledTrackTitle>{tracks[trackIndex].title}</StyledTrackTitle>
        <ReactPlayer url={tracks[trackIndex].url} />
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