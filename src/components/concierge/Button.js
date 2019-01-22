import React from 'react';
import styled from 'styled-components';

const Btn = styled.div`
  width: 206px;
  height: 58px;
  border: 1px solid #979797;
  font-family: AppleSDGothicNeo;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-align: center;
  line-height: 58px;
  color: rgba(27, 27, 27, 0.7);
  margin: 0 10px;
  float: left;
  cursor: pointer;
  ${p => p.active === 'off' && `
    background-color: #ebebeb;
    color: rgba(189, 189, 189, 0.9);
    border: 1px solid #ebebeb;
  `}
  ${p => p.active === 'on' && `
    background-color: #ffd400;
    color: rgba(27, 27, 27, 0.9);
    border: 1px solid #ffd400;
    font-weight: 700;
  `}
`;




const Button = ({children, active, ...p}) => {
  return (
    <Btn active={active} onClick={p.onClick}>{children}</Btn>
  )
};


export default Button;