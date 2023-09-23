import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeAndVideoComponent from '../../context/ThemeandVideoContext'
import './index.css'

import {
  NavigationContainer,
  NavBar,
  NavOptions,
  NavItemContainer,
  NavText,
  ContactContainer,
  ContactTypeIcons,
  // eslint-disable-next-line no-unused-vars
  contactHeading,
  ContactImage,
  ContactNote,
  NavigationSmallContainer,
} from './StyledComponent'

class NavigationBar extends Component {
  onRenderTabItems = () => (
    <ThemeAndVideoComponent.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
        const Color = isDarkTheme ? '#f1f5f9' : '#231'
        const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

        const onClickHomeTab = () => {
          changeTab('Home')
        }

        const onClickTrendingTab = () => {
          changeTab('Trending')
        }

        const onClickGamingTab = () => {
          changeTab('Gaming')
        }

        const onClickSavedTab = () => {
          changeTab('Saved')
        }

        return (
          <NavBar>
            <NavigationContainer bgColor={bgColor}>
              <NavOptions>
                <Link to="/" className="list-items">
                  <NavItemContainer
                    key="home"
                    bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickHomeTab}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavText Color={Color}>Home</NavText>
                  </NavItemContainer>
                </Link>

                <Link to="/trending" className="list-items">
                  <NavItemContainer
                    key="trending"
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTrendingTab}
                  >
                    <HiFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavText Color={Color}>Trending</NavText>
                  </NavItemContainer>
                </Link>

                <Link to="/gaming" className="list-items">
                  <NavItemContainer
                    key="gaming"
                    bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    onClick={onClickGamingTab}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavText Color={Color}>Gaming</NavText>
                  </NavItemContainer>
                </Link>

                <Link to="/saved-videos" className="list-items">
                  <NavItemContainer
                    key="saved"
                    bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                    onClick={onClickSavedTab}
                  >
                    <CgPlayListAdd
                      size={30}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavText Color={Color}>Saved Videos</NavText>
                  </NavItemContainer>
                </Link>
              </NavOptions>

              <ContactContainer Color={Color}>
                <contactHeading color={Color}>CONTACT US</contactHeading>
                <ContactTypeIcons>
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactTypeIcons>
                <ContactNote Color={Color}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactNote>
              </ContactContainer>
            </NavigationContainer>

            <NavigationSmallContainer bgColor={bgColor}>
              <Link to="/">
                <AiFillHome
                  size={30}
                  onClick={onClickHomeTab}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
              </Link>

              <Link to="/trending">
                <HiFire
                  size={30}
                  onClick={onClickTrendingTab}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
              </Link>

              <Link to="/gaming">
                <SiYoutubegaming
                  size={30}
                  onClick={onClickGamingTab}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
              </Link>

              <Link to="/saved-videos">
                <CgPlayListAdd
                  size={30}
                  onClick={onClickSavedTab}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
              </Link>
            </NavigationSmallContainer>
          </NavBar>
        )
      }}
    </ThemeAndVideoComponent.Consumer>
  )

  render() {
    return <>{this.onRenderTabItems()}</>
  }
}

export default NavigationBar
