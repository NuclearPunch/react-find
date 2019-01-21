import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 252px;
  height: 133px;
  background-color: #ffffff;
  border: 1px solid #ebebeb;
  float: left;
  margin-left: 14px;
  margin-top: 20px;
  ${p => p.selected && `
    border: 1px solid #ffd400;
    box-shadow: 1px 5px 10px 0 rgba(95, 95, 95, 0.5);
  `}
`;

const TitleBox = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 28px;
  margin-top: 43px;
  letter-spacing: 0.2px;
  text-align: center;
  color: rgba(128, 128, 128, 0.7);
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: rgba(27, 27, 27, 0.7);
`;



const SpaceTextCard = ({selected, ...p}) => {
  return (
    <Card selected={selected} onClick={p.onClick}>
      <TitleBox>
        <Title>{p.title}</Title>
        <div>{p.subTitle}</div>
      </TitleBox>
    </Card>
  
  );
};


export default SpaceTextCard;