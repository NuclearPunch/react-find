// import React, { Component } from 'react';
import React from 'react';
import styled from 'styled-components';


const Msg = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 40px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  text-align: center;
  color: rgba(27, 27, 27, 0.7);
  padding-top: 10px;
  ${p => p.type === 'B' && `
      text-align: center;
      font-family: AppleSDGothicNeo;
      font-size: 20px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 0.2px;
      color: rgba(27, 27, 27, 0.7);
      padding-top: 0px;
      padding-bottom: 30px;
      @media only screen and (max-width: 320px) {
        padding-bottom: 0; 
      }   
  `}
  ${p => p.type === "timetableDestop" && `

  padding-top: 1em;
  @media only screen and (max-width: 700px) {
     font-size:20px;
     padding-top: 1.1em;
  } 
  `}
  
   
 

`;


const MidTitle = (props) => {
  return (
      <Msg type={props.type}>{props.text}</Msg>

  );
};


export default MidTitle;