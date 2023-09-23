import styled from 'styled-components'

export const TrendingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 40px;
  }
`

export const TrendingThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const TrendingDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const TrendingProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const TrendingTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.Color};
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`
export const TrendingChannelName = styled.p`
  font-family: 'Roboto';
  color: ${props => props.Color};
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`

export const TrendingViewAndDate = styled.p`
  color: ${props => props.Color};
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
`

export const Dot = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
