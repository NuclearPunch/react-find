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
    font-size: 25px;
    font-weight: 300;
    letter-spacing: 0.3px;
    color: rgba(27, 27, 27, 0.7);
  `}
`;


const SmallTitle = (props) => {
  return (
    <div>
      <Msg  type={props.type}>{props.text}</Msg>
    </div>
  
  );
};


export default SmallTitle;