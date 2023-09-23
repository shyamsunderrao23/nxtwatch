import {Link} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeandVideoContext'
import './index.css'

import {
  ListItem,
  ThumbnailImage,
  VideosDetailsContainer,
  // eslint-disable-next-line no-unused-vars
  profileImg,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDates,
  Dot,
} from './StyledComponent'

const HomeVideosCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`} className="link">
            <ListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideosDetailsContainer>
                <profileImg src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title textColor={textColor}>{title}</Title>
                  <ChannelName textColor={textColor}>{name}</ChannelName>
                  <ViewsAndDates textColor={textColor}>
                    {viewCount} views<Dot> &#8226; </Dot> {publishedAt}
                  </ViewsAndDates>
                </ContentSection>
              </VideosDetailsContainer>
            </ListItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideosCard
