import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  
`
const LayOut = styled('div')`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 740px;
  height: 100vh;
  background-color: white;
  @media screen and (max-width: 740px) {
    width: 95%;
  }

`
const HeaderContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 120px;
  
`

const HeaderText = styled('span')`
  margin: auto auto auto 8%;
  font-size: 35px;
  width: 50%;
`

const HeaderBtn = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8%;
  margin-left: auto;
  border-radius: 50px;
  height: 45px;
  width: 45px;
  transition: background-color 300ms ease-in;
  cursor: pointer;
  color: #ff3131;
  user-select: none;
  :hover{
    background-color: #f2f2f2;
  }
  :active{
    background-color: #ff3131;
    color: white;
  }
  
`

const StyledAdd = styled(AddIcon)`
  transform: scale(1.8);
`

export {Container,LayOut, HeaderContainer, HeaderText, HeaderBtn, StyledAdd}
