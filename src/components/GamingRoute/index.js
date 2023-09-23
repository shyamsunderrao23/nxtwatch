import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeAndVideoContext from '../../context/ThemeandVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import GamingVideosCard from '../GamingVideoCard'

import {
  LoaderContainer,
  GamingVideoList,
  GamingContainer,
  GamingTitleContainer,
  GamingIconContainer,
  GamingText,
} from './StyledComponent'

const GamingApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    GamingVideos: [],
    apiStatus: GamingApiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: GamingApiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const Options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, Options)
    if (response.ok === true) {
      const data = await response.json()
      const UpdatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        GamingVideos: UpdatedData,
        apiStatus: GamingApiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: GamingApiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderGamingVideos = () => {
    const {GamingVideos} = this.state
    return (
      <GamingVideoList>
        {GamingVideos.map(eachVideo => (
          <GamingVideosCard key={eachVideo.id} GamingDetails={eachVideo} />
        ))}
      </GamingVideoList>
    )
  }

  onRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderGamingStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case GamingApiStatusConstants.success:
        return this.renderGamingVideos()
      case GamingApiStatusConstants.failure:
        return this.renderFailureView()
      case GamingApiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const iconBgColor = isDarkTheme ? '#0f0f0f' : '#d7dfe9'
          const GamingColor = isDarkTheme ? ' #181818' : '#ebebeb'
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const Color = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <>
              <Header />
              <NavigationBar />
              <GamingContainer
                data-testid="gaming"
                style={{backgroundColor: bgColor}}
              >
                <GamingTitleContainer GamingColor={GamingColor}>
                  <GamingIconContainer iconBgColor={iconBgColor}>
                    <SiYoutubegaming size={40} color="#ff0000" />
                  </GamingIconContainer>
                  <GamingText Color={Color}>Gaming</GamingText>
                </GamingTitleContainer>
                {this.renderGamingStatus()}
              </GamingContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default GamingRoute
