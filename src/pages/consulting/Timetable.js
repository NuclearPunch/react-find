import React, { Component } from 'react';
import { SmallTitle, MidTitle, Button } from 'components';
import styled from 'styled-components';


const ContentBox = styled.div`
  width: 798px;
  height: 330px;
  margin: 0 auto;
  margin-top: 170px;

`;

const BttonBox = styled.div`
  width: 456px;
  height: 60px;
  margin: 0 auto;
  margin-top: 130px;
`;


class Timetable extends Component {

  constructor(props){
    super()
    this.state = {
        active : 'off',
    
        selectedId : ''
      }
  }
  


    render() {
    
        return (
            <div>
                <MidTitle text="컨설팅 신청" />
                <SmallTitle text="인테리어 컨설팅 신청은 최대 5회까지 가능합니다." />
                <SmallTitle text="추천 전문가 상담이 마감되었거나, 추천 외 전문가와의 상담을 원하실 경우 사무국으로 문의해주시기 바랍니다." />
                <SmallTitle color="red" text="사무국: 02-6121-6439" />
                <ContentBox>
                </ContentBox>
                <BttonBox>
                    <Button >이전으로</Button>                 
                    <Button active={this.state.active}
                      style={{position:'absolute'}}
                      onClick={_ => {
                        let {history} = this.props
                        history.push({
                          pathname:'/concierge/spaces2',
                          state: {
                            parentId : this.state.selectedId
                          }
                        })
                      }     
                    }
                    >다음으로 </Button>
                </BttonBox>
            </div>

        );
      }
    }



export default Timetable;
