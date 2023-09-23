import {Link} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeandVideoContext'
import './index.css'

import {
  TrendingListItem,
  TrendingThumbnailImage,
  TrendingDetailsContainer,
  TrendingProfileImage,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewAndDate,
  TrendingContentSection,
  Dot,
} from './StyledComponent'

const TrendingVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const Color = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`} className="link-list">
            <TrendingListItem>
              <TrendingThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingDetailsContainer>
                <TrendingProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingContentSection>
                  <TrendingTitle Color={Color}>{title}</TrendingTitle>
                  <TrendingChannelName Color={Color}>
                    {name}
                  </TrendingChannelName>
                  <TrendingViewAndDate Color={Color}>
                    {viewCount} views <Dot>&#8226;</Dot>
                    {publishedAt}
                  </TrendingViewAndDate>
                </TrendingContentSection>
              </TrendingDetailsContainer>
            </TrendingListItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default TrendingVideoCard
