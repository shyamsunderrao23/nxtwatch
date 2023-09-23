import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import FailureView from '../FailureView'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeandVideoContext'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  LoaderContainer,
  TrendingContainer,
  TrendingVideoTitle,
  TrendingIconContainer,
  TrendingText,
  TrendingVideoList,
} from './StyledComponent'

const TrendingApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {
    apiStatus: TrendingApiStatusConstants.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: TrendingApiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const UpdatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))

      this.setState({
        trendingVideos: UpdatedData,
        apiStatus: TrendingApiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: TrendingApiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingVideosView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideoList>
        {trendingVideos.map(eachVideo => (
          <TrendingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideoList>
    )
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderTrendingStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case TrendingApiStatusConstants.success:
        return this.renderTrendingVideosView()
      case TrendingApiStatusConstants.failure:
        return this.renderFailureView()
      case TrendingApiStatusConstants.inProgress:
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
          const trendingColor = isDarkTheme ? ' #181818' : '#ebebeb'
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const Color = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <div data-testid="trending">
              <Header />
              <NavigationBar />
              <TrendingContainer
                data-testid="trending"
                style={{backgroundColor: bgColor}}
              >
                <TrendingVideoTitle trendingColor={trendingColor}>
                  <TrendingIconContainer iconBgColor={iconBgColor}>
                    <HiFire size={40} color="#ff0000" />
                  </TrendingIconContainer>
                  <TrendingText Color={Color}>Trending</TrendingText>
                </TrendingVideoTitle>
                {this.renderTrendingStatus()}
              </TrendingContainer>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default TrendingRoute
