import styled from "styled-components";

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 10rem;
  border-top: 1px solid #dedede;
  background-color: #f2f2f2;

`
const StyledButton = styled('button')`
  color: #ff3131;
  border: none;
  background-color: inherit;
  font-size: 20px;
  height: 100%;
  width: 30%;
  transition: background-color 300ms ease;
  cursor: pointer;
  :hover{
    background-color: #dedede;
  }
  :active{
    background-color: #dedede;
  }

`


export {Container, StyledButton}
