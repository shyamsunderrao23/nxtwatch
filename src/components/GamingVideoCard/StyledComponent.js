import styled from 'styled-components'

export const GamingListItem = styled.li`
  list-style-type: none;
  background: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 10px;
  @media screen and (min-width: 768px) {
    padding-left: 40px;
    width: 280px;
    margin-right: 20px;
  }
`

export const GamingListImages = styled.img`
  border-radius: 15px;
  width: 43vw;
  height: 250px;
  margin-bottom: 23px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
    height: 350px;
  }
`

export const GamingVideoName = styled.h1`
  color: ${props => props.Color};
  font-weight: bold;
  font-size: 15px;
  font-family: 'Roboto';
  margin-bottom: 8px;
  @media screen (min-width: 768px) {
    font-size: 15px;
  }
`
export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const GamingVideoCount = styled.p`
  color: ${props => props.CountColor};
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 50px;

  @media screen (min-width: 768px) {
    font-size: 15px;
  }
`
