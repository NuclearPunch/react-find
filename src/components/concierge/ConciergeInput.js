import React from 'react';
import styled from 'styled-components';

const Ci = styled.input`
  width: 255px;
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
  padding-right: 45px;
  padding-left: 20px;
  background-image : url('/img/concierge/unit.png');
  background-position:center right 5px; 
  background-repeat:no-repeat;
  background-size: 42px;
  ${p => p.name === 'm2' && `
    background-image : url('/img/concierge/m2.png');
  `}
  ${p => p.name === 'py' && `
    background-image : url('/img/concierge/py.png');
  `}
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


const ConciergeInput = ({active, type, ...p}) => {
  return (
    <Ci type="text" name={p.name} active={active} onFocus={p.onFocus} onChange={p.onChange} value={p.value} />
  )
};


export default ConciergeInput;