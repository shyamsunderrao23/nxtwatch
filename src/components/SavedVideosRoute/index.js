import {Component} from 'react'
import {CgPlayListAdd} from 'react-icons/cg'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import TrendingVideoCard from '../TrendingVideoCard'
import ThemeAndVideoContext from '../../context/ThemeandVideoContext'
import {
  SavedVideosContainer,
  SavedVideoTitle,
  SavedVideoIconContainer,
  SavedVideoHeading,
  SavedVideoList,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './StyledComponent'

class SavedVideos extends Component {
  renderSavedVideos = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return (
          <>
            <Header />
            <NavigationBar />
            <SavedVideosContainer data-testid="savedVideos" bgColor={bgColor}>
              <SavedVideoTitle>
                <SavedVideoIconContainer>
                  <CgPlayListAdd size={40} color="#ff0000" />
                </SavedVideoIconContainer>
                <SavedVideoHeading textColor={textColor}>
                  Saved Videos
                </SavedVideoHeading>
              </SavedVideoTitle>
              {savedVideos.length > 0 ? (
                <SavedVideoList>
                  {savedVideos.map(eachVideo => (
                    <TrendingVideoCard
                      key={eachVideo.id}
                      videoDetails={eachVideo}
                    />
                  ))}
                </SavedVideoList>
              ) : (
                <NoSavedVideosView>
                  <NoSavedVideosImage src="" alt="no saved videos" />
                  <NoSavedVideosHeading headingColor={headingColor}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosNote noteColor={noteColor}>
                    You can save your videos while watching them..
                  </NoSavedVideosNote>
                </NoSavedVideosView>
              )}
            </SavedVideosContainer>
          </>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default SavedVideos
