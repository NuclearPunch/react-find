import React from 'react';
import styled from 'styled-components';

const Cr = styled.div`
  width: 500px;
  height: 80px;
  border: 1px solid #ebebeb;
  ${p => p.active === 'on' && `
    border: 1px solid #ffd400;
    background-color: #ffffff;
  `}
`;

const CrInput = styled.input`
  width: 72px;
  position: relative;
  height: 20px;
  top: 36%;
`;
const CrLabel = styled.label`
  position: relative;
  top: 28%;
  font-family: AppleSDGothicNeo;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  color: rgba(27, 27, 27, 0.7);
`;


const ConciergeRadio = (props) => {
  return (
    <Cr active={props.active}>
     
        <CrInput
          type="radio"
          name="react-tips"
          value="option1"
          id="1"
          checked={true}
        />
        <CrLabel for="1">Option 1</CrLabel>
    
  </Cr>
  )
};


export default ConciergeRadio;