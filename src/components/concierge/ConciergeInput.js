import React from 'react';
import styled from 'styled-components';

const Ci = styled.input`
  width: 220px;
  height: 52px;
  background-color: #ffffff;
  border: 1px solid #ebebeb;
  font-family: AppleSDGothicNeo;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-align: left;
  line-height: 58px;
  color: rgba(27, 27, 27, 0.7);
  margin: 0 auto;
  padding-right: 80px;
  padding-left: 20px;
  background-image : url('data:image/png;base64,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'); 
  background-position:center right 20px; 
  background-repeat:no-repeat;
  background-size: 30px;
  ${p => p.active === 'off' && `
  border: 1px solid #ebebeb;
`}
  ${p => p.active === 'on' && `
    border: 1px solid #ffd400;
  `}

  &:focus {
    outline: none;
  }
`;

const ConciergeInput = ({active, ...p}) => {
  return (
    <Ci type="text" name={p.name} active={active} onFocus={p.onFocus} onChange={p.onChange} value={p.value} />
  )
};


export default ConciergeInput;