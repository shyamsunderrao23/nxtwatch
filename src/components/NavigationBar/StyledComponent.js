import styled from 'styled-components'

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  top: 80px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBar = styled.nav`
  background-color: #fff;
  display: flex;
`
export const NavOptions = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px;
  margin-top: 0px;
  text-decoration: none;
`
export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
  margin-bottom: 15px;
`

export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin-left: 15px;
  color: ${props => props.Color};
  text-decoration: none;
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  color: ${props => props.Color};
`
export const contactHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  color: ${props => props.Color};
`
export const ContactTypeIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ContactImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  margin-right: 10px;
  margin-top: 20px;
`
export const ContactNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.Color};
  margin-bottom: 50px;
  margin-top: 20px;
`
export const NavigationSmallContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => props.bgColor};
  position: fixed;
  bottom: 0px;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
