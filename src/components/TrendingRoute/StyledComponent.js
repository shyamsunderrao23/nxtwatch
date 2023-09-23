import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-bottom: 60px;
  margin-top: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    min-height: 100vh;
    margin-bottom: 0px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  height: 20vh;
  margin-bottom: 20px;
  padding: 10px;
  background-color: ${props => props.trendingColor};
`

export const TrendingIconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${props => props.iconBgColor};
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const TrendingText = styled.h1`
  color: ${props => props.Color};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 10px;
`
