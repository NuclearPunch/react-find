import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 232px;
  height: 319px;
  background-color: #ffffff;
  padding: 9px 9px 0 9px;
  border: 1px solid #ebebeb;
  float: left;
  margin-left: 14px;
  ${p => p.selected && `
    border: 1px solid #ffd400;
    box-shadow: 1px 5px 10px 0 rgba(95, 95, 95, 0.5);
  `}
`;
const ImgCard = styled.img`
  width: 234px;
  height: 234px;
  background-color: #f9f9f9;
  margin: 0 auto;
`;
const TitleBox = styled.div`
  width: 118px;
  height: 52px;
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: center;
  color: rgba(128, 128, 128, 0.7);
  margin: 0 auto;
  margin-top: 15px;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: rgba(27, 27, 27, 0.7);
`;



const SpaceCard = ({selected, ...p}) => {
  return (
    <Card selected={selected} onClick={p.onClick}>
      <ImgCard src={p.img} ></ImgCard>
      <TitleBox>
        <Title>{p.title}</Title>
        <div>{p.subTitle}</div>
      </TitleBox>
    </Card>
  
  );
};


export default SpaceCard;