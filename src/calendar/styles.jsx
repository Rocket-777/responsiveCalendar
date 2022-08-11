import styled from "styled-components";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const CalContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f5f5f5;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
`

const Footer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 500;
  margin: auto 6.8% 0.8rem auto;
  width: 78%;
  user-select: none;
`

const Day = styled(`div`)`
  display: flex;
  flex-direction: column;
  margin: auto 0 auto 1.3%;
  //min-width: 35px;
  min-width: 14%;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
  user-select: none;
  @media screen and (max-width: 630px) {
    min-width: 13.5%;
  }
`

const DayList = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 5px 3% auto auto;

  width: 82%;


`
const DateList = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 8px 3% 5px auto;
  width: 82%;
  @media screen and (max-width: 630px) {
    //width: 82%;
  }


`
const DateNum = styled('div')`
  display: flex;
  min-width: 14%;
  //min-width: 35px;
  min-height: 40px;
  margin: auto 0 auto 1.3%;
  align-items: center;
  justify-content: center;
  user-select: none;
  @media screen and (max-width: 630px) {
    min-width: 13.5%;
  }


`
const DateCircle = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //background-color: blue;
  font-size: 23px;
  height: 40px;
  width: 40px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color ease 300ms;

  :hover {
    background-color: #dedede;
  }

  span {
    //line-height: 2rem;
  }

  &.highlight {
    
    background-color: #ff3131;
    color: white;
  }
`

const ArrowLeft = styled(ArrowBackIosRoundedIcon)``
const ArrowRight = styled(ArrowForwardIosRoundedIcon)``

const ArrowBtn = styled('div')`
  display: flex;
  color: #ff3131;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  border-radius: 25px;
  transition: background-color 300ms ease-in;
  :hover {
    background-color: #dedede;
  }
  :active{
    background-color: #ff3131;
    color: white !important;
  }
`

export {CalContainer, Footer, Day, DayList, DateList, DateNum, DateCircle, ArrowRight, ArrowLeft, ArrowBtn}
