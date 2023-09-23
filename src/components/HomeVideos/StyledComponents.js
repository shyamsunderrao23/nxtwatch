import styled from 'styled-components'

export const VideosCardList = styled.div`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const NoVideosContainerView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const NoVideosImg = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoVideosHeading = styled.h1`
  color: ${props => props.headingColor};
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  top: 10px;
  bottom: 20px;
`
export const NoVideosDescription = styled.p`
  color: ${props => props.noteColor};
  font-size: 15px;
  font-weight: 500;
  bottom: 15px;
`

export const RetryButton = styled.button`
  color: #fff;
  background-color: #4f46e5;
  border: 1px solid #4f46e5;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: 'Roboto';
  font-size: 15px;
`
