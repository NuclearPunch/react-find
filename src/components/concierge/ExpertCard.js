import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #ebebeb;
  float: left;
  width: 300px;
  height: 488px;
  margin-left: 26px;
  text-align: center;
  margin-top: 32px;
  ${p => p.selected && `
    border: 1px solid #ffd400;
    box-shadow: 1px 5px 10px 0 rgba(95, 95, 95, 0.5);
  `}

`;
const ImgCard = styled.img`
  background-color: #f9f9f9;
  margin: 0 auto;
  margin-top: 15px;
  width: 266px;
  height: 218px;
`;


const ContentBox = styled.div`
  width: 266px;
  height: 199px;
  margin: 0 auto;
`;
const ContentHeader = styled.div`
  width: 266px;
  height: 56px;
  border-bottom: 1px solid #efefef;
`;
const ContentBody = styled.div`
  width: 266px;
  height: 132px;
  margin-top: 10px;
`;
const CardBtn = styled.div`
  width: 300px;
  height: 52px;
  background-color: #e5e5e5;
  font-family: AppleSDGothicNeo;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 52px;
  letter-spacing: 0.5px;
  text-align: center;
  color: rgba(27, 27, 27, 0.7);
`;

const LogoBox = styled.div`
  width: 45px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #979797;
  position: relative;
  top: 3px;
  float: left;
  ${p => p.logo && `
    background-color: #000000;
  `}
  
`;
const ContentHDiv = styled.div`
  width: 219px;
  float: left;
  position: relative;
  top: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Title = styled.div`
  width: 216px;
  height: 20px;
  font-family: AppleSDGothicNeo;
  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: rgba(27, 27, 27, 0.7);
  text-align: left;
  padding-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Speciality = styled.div`
  width: 95%;
  height: 30px;
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.8;
  -webkit-letter-spacing: 0.4px;
  -moz-letter-spacing: 0.4px;
  -ms-letter-spacing: 0.4px;
  letter-spacing: 0.4px;
  color: rgba(27,27,27,0.7);
  text-align: left;
  padding-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CbBox = styled.div`
  width: 79px;
  height: 122px;
  float: left;
`;
const CbTimeBox = styled.div`
  width: 108px;
  height: 122px;
  float: left;
`;
const CbTitle = styled.div`
  height: 23px;
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: rgba(98, 98, 98, 0.7);
  text-align: left;
`;
const CbContent = styled.div`
  height: 23px;
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: rgba(27, 27, 27, 0.7);
  text-align: left;
`;
const CbTime = styled.div`
  height: 23px;
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: rgba(254, 24, 24, 0.7);
  text-align: left;
`;


const ExpertCard = ({selected, ...p}) => {
  return (
    <Card selected={selected} onClick={p.onClick}>
      <ImgCard src={`https://interiorbrothers.com${p.img}`}/>
      <ContentBox>
        <ContentHeader>
          <LogoBox logo={`${p.logo}`}/>
          <ContentHDiv>
            <Title>{p.title}</Title>
            <Speciality>{p.subTitle}</Speciality>
          </ContentHDiv>
        </ContentHeader>
        <ContentBody>
          <CbBox>
            <CbTitle>사업자 유형</CbTitle>
            <CbTitle>경력</CbTitle>
            <CbTitle>활동지역</CbTitle>
            <CbTitle>주요분야</CbTitle>
          </CbBox>
          <CbBox>
            <CbContent>{p.businessType}</CbContent>
            <CbContent>{p.career}년</CbContent>
            <CbContent>{p.availableArea}</CbContent>
            <CbContent>{p.mainSpecialty }</CbContent>
          </CbBox>
          <CbTimeBox>
           <CbTime>20일(수) 상담가능</CbTime>
           <CbTime>20일(수) 상담가능</CbTime>
           <CbTime>20일(수) 상담가능</CbTime>
           <CbTime>20일(수) 상담가능</CbTime>
           <CbTime>20일(수) 상담가능</CbTime>
          </CbTimeBox>
        </ContentBody>
        
      </ContentBox>
      <CardBtn>
        컨설팅 전문가 선택하기
      </CardBtn>
    </Card>
  
  );
};


export default ExpertCard;