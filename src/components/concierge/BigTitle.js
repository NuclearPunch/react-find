
import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 30px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  text-align: center;
  color: rgba(27, 27, 27, 0.7);
  padding-top: 80px;
  ${p => p.type === 'B' && `
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.2px;
      color: rgba(27, 27, 27, 0.7);
      padding-top: 7px;
      padding-top: 40px;
  `}

  
`;


const BigTitle = (props) => {
  return (
      <Title type={props.type}>{props.text}</Title>
  );
};


export default BigTitle;