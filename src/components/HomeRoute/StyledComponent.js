import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0;
  }
`

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  display: ${props => props.display};
  height: 300px;
  padding: 20px;
`

export const BannerLeftPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  top: 20px;
  bottom: 10px;
  width: 100%;
  margin-left: 20px;
`

export const BannerImage = styled.img`
  width: 150px;
  height: 40px;
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #424242;
  margin-bottom: 15px;
`

export const BannerGetItButton = styled.button`
  background-color: transparent;
  border: 2px solid #424242;
  font-size: 15px;
  font-weight: bold;
  width: 110px;
  height: 40px;
  padding: 5px;
`

export const BannerRightPart = styled.div`
  margin-top: 20px;
`

export const BannerCloseButton = styled.button`
  font-weight: 500;
  color: #000;
  background: none;
  border: none;
  height: 25px;
`
export const SearchContainer = styled.div`
  display: flex;
  border: 2px solid #909090;
  border-radius: 3px;
  margin: 30px;
  width: 40%;
  height: 38px;
`

export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  border: none;
  padding: 5px;
  color: ${props => props.Color};
  font-family: 'Roboto';
`

export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 60px;
  border: none;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
