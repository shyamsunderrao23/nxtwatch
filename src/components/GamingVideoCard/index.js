import './index.css'
import {Link} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeandVideoContext'

import {
  GamingListItem,
  GamingListImages,
  GamingVideoName,
  GamingVideoCount,
  GamingContentSection,
} from './StyledComponent'

const GamingVideoCard = props => {
  const {GamingDetails} = props
  const {id, title, thumbnailUrl, viewCount} = GamingDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const Color = isDarkTheme ? '#f9f9f9' : '#231f20'
        const CountColor = isDarkTheme ? '#cbd5e1' : ' #616e7c'
        return (
          <Link to={`/gaming/${id}`} className="link-item">
            <GamingListItem>
              <GamingListImages src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentSection>
                <GamingVideoName Color={Color}>{title}</GamingVideoName>
                <GamingVideoCount CountColor={CountColor}>
                  {viewCount} Watching Worldwide
                </GamingVideoCount>
              </GamingContentSection>
            </GamingListItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default GamingVideoCard
