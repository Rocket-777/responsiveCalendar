import styled from "styled-components";

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  background-color: #f2f2f2;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

const CellRow = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 3.5rem;
  &.topper{
    min-height: 2rem;
  }
  
  
`

const SCell = styled('div')`

  position: relative;
  display: flex;
  background-color: white;
  //align-items: center;
  //justify-content: center;
  //margin-right: 2px;
  border-bottom: 1px solid rgba(222, 222, 222, 0.7);
  border-right: 1px solid rgba(222, 222, 222, 0.7);
  flex-grow: 1;
  box-shadow: -3px -3px 3px -4.5px rgba(68, 69, 69, 0.6) inset;
  //margin-bottom: 2px;
  transition: background-color 300ms ease;
  :active{
    background-color: rgba(255, 49, 49, 0.7);
  }
  :hover{
    background-color: rgba(255, 49, 49, 0.7);
  }
  &.lastCell{
    box-shadow: 0px -3px 3px -4.5px rgba(68, 69, 69, 0.6) inset;
    border-right: none;
  }
  &.dummy{
    :hover{
      background-color: white;
    }
  }

  &.firstCell{
    justify-content: right;
    :hover{
      background-color: white;
    }
    
    max-width: 10%;
    box-shadow: none;
    border-bottom: none;
    border-right: none;
    @media screen and (max-width: 630px) {
      min-width: 15%;
    }
    ::after{
      content: '';
      box-shadow: 0px -3px 3px -4.5px rgba(68, 69, 69, 0.6) inset;
      width: 3px;
      border-bottom: 1px solid rgba(222, 222, 222, 0.7);

    }
    span{
      
      font-size: 20px;
      position: absolute;
      top: -12px;
      //left: 10px;
      right: 10px;
      color: #d2d2d2;
      @media screen and (max-width: 630px) {
        font-size: 17px;;
      }
    }
  }
`

const Selected = styled('div')`
  position: absolute;
  top: 3px;
  left: 3px;
  right: 3px;
  bottom: 3px;
  
  &.selected.event{
    background-color: rgba(184,188,255,1);
  }
  //border-radius: 2px;
  &.selected{
   background-color: #f2f2f2; 
  }
  &.event{
    background-color: rgba(235,236,255,1);
  }
`


export {Container, CellRow, SCell, Selected}
