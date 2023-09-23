import {Component} from 'react'
import ThemeAndVideoContext from '../../context/ThemeandVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import {
  PageNotFoundContainer,
  NotFoundVideosView,
  PageNotFoundImage,
  PageNotFoundHeading,
  PageNotFoundDescription,
} from './StyledComponent'

class NotFound extends Component {
  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f1f1f1'
          const Color = isDarkTheme ? '#f9f9f9' : '#231f20'
          const DescColor = isDarkTheme ? '#cbd5e1' : '#616e7c'
          const NotFoundImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          return (
            <>
              <Header />
              <NavigationBar />
              <PageNotFoundContainer bgColor={bgColor}>
                <NotFoundVideosView>
                  <PageNotFoundImage src={NotFoundImage} alt="not found" />
                  <PageNotFoundHeading Color={Color}>
                    Page Not Found
                  </PageNotFoundHeading>
                  <PageNotFoundDescription DescColor={DescColor}>
                    We are sorry,the page you requested could not be found..
                  </PageNotFoundDescription>
                </NotFoundVideosView>
              </PageNotFoundContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default NotFound
