import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  text-decoration: none;
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 350px;
    margin-right: 30px;
    margin-bottom: 25px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideosDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const profileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin: 20px;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.textColor};
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.textColor};
  margin-top: 8px;
  margin-bottom: 8px;
`
export const ViewsAndDates = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.textColor};
`

export const Dot = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
