import {
  VideosCardList,
  NoVideosContainerView,
  NoVideosImg,
  NoVideosHeading,
  NoVideosDescription,
  RetryButton,
} from './StyledComponents'

import ThemeAndVideoContext from '../../context/ThemeandVideoContext'
import HomeVideosCard from '../HomeVideosCard'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <VideosCardList>
            {homeVideos.map(eachVideo => (
              <HomeVideosCard key={eachVideo.id} video={eachVideo} />
            ))}
          </VideosCardList>
        ) : (
          <NoVideosContainerView>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingColor={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosDescription noteColor={noteColor}>
              Try different key word or remove search filter
            </NoVideosDescription>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosContainerView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideos
