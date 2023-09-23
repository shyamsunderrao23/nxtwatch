import styled from 'styled-components'

export const PageNotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const PageNotFoundImage = styled.img`
  width: 100%;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const PageNotFoundHeading = styled.h1`
  color: ${props => props.Color};
  margin-top: 20px;
  font-weight: bolder;
  font-size: 25px;
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const PageNotFoundDescription = styled.p`
  color: ${props => props.DescColor};
  font-weight: 500;
  font-size: 18px;
  font-family: 'Roboto';
  text-align: center;
  width: 90%;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
