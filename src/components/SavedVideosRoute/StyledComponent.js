import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-bottom: 60px;
  margin-top: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    min-height: 100vh;
    margin-bottom: 0px;
  }
`

export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
  height: 20vh;
  margin-bottom: 20px;
  padding: 10px;
  background-color: ${props => props.trendingColor};
`

export const SavedVideoIconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${props => props.iconBgColor};
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const SavedVideoHeading = styled.h1`
  color: ${props => props.Color};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 10px;
`

export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NoSavedVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NoSavedVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`
