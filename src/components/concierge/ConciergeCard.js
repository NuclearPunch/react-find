import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffffff;
  padding: 9px 9px 0 9px;
  border: 1px solid #ebebeb;
  float: left;
  margin-left: 14px;
  text-align: center;
  ${p => p.type === 'S' && `
    width: 156px;
    height: 204px;
    padding: 5px 5px 0 5px;
    margin-left: 5px;
  `}
  ${p => p.type === 'SL' && `
    width: 156px;
    height: 204px;
    padding: 5px 5px 0 5px;
    margin-left: 4px;
  `}
 ${p => p.type === 'M' && `
      width: 232px;
      height: 319px;
 `}
  ${p => p.type === 'L' && `
      width: 292px;
      height: 247px;
      margin-top: 17px;
  `}
  ${p => p.selected && `
    border: 1px solid #ffd400;
    box-shadow: 1px 5px 10px 0 rgba(95, 95, 95, 0.5);
  `}

  @media only screen and (max-width: 320px) {
    margin-left: 0;
  }

`;
const ImgCard = styled.img`
  background-color: #f9f9f9;
  margin:auto;

  ${p => p.type === 'S' && `
       width: 144.8px;
       height: 144.8px;
  `}
  ${p => p.type === 'SL' && `
       width: 144.8px;
       height: 144.8px;
  `}

  ${p => p.type === 'M' && `
      width: 234px;
      height: 234px;
  `}
   ${p => p.type === 'L' && `
      width: 288px;
      height: 150px;
      margin-left: 1px;
  `}
`;
const TitleBox = styled.div`
  width: 191px;
  height: 52px;
  font-family: AppleSDGothicNeo;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: center;
  color: rgba(128, 128, 128, 0.7);
  margin: 0 auto;

  ${p => p.type === 'S' && `
      margin-top: 8px;
      font-size: 13px;
      width: 115px;
      height: 31px;
  `}
  ${p => p.type === 'SL' && `
      margin-top: 8px;
      font-size: 10px;
      width: 115px;
      height: 31px;
  `}

  ${p => p.type === 'M' && `
    margin-top: 15px;
    font-size: 16px;
  `}
  ${p => p.type === 'L' && `
    margin-top: 8px;
    font-size: 18px;
  `}
`;
const Title = styled.div`
  font-weight: 600;
  color: rgba(27, 27, 27, 0.7);
  ${p => p.type === 'S' && `
  font-size: 13px;
  `}
  ${p => p.type === 'SL' && `
  font-size: 13px;
  `}
  ${p => p.type === 'M' && `
    font-size: 22px;
  `}
  ${p => p.type === 'L' && `
    font-size: 24px;
  `}
`;



const SpaceCard = ({selected, type, ...p}) => {
  return (
    <Card selected={selected} type={type} onClick={p.onClick}>
      <ImgCard src={p.img}  type={type}></ImgCard>
      <TitleBox type={type}>
        <Title type={type}>{p.title}</Title>
        <div>{p.subTitle}</div>
      </TitleBox>
    </Card>
  
  );
};


export default SpaceCard;