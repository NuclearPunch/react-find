import React, { Component } from 'react';
import { StyledHeader, ConciergeRadio, Button } from 'components';

import styled from 'styled-components';
import Util from "../../lib/Util";

const ContentBox = styled.div`
  width: 500px;
  min-height: 330px;
  height: auto;
  margin: 0 auto;
  margin-top: 110px;
`;

const BttonBox = styled.div`
  width: 456px;
  height: 60px;
  margin: 0 auto;
  margin-top: 130px;
`;



class Priority extends Component {
  
    state = {
    active : 'off',
    focus : [
        {id: 0, active: "off"},
        {id: 1, active: "off"},
    ],
    m2: '',
    py: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleActiveChange = (id, e) => {
        e.preventDefault();
        const focus  = this.state.focus;
        this.setState({
            active : 'on',
            focus: focus.map( 
                a => {
                  if(a.id === id){
                    a.active = 'on';
                  }else{
                    a.active = 'off';
                  }
                  return a;
              })
            
        });
      }


    render() {
       
        return (
            <div>
                <StyledHeader title="입력하신 조건들 중에 가장 우선순위로 생각하는 요소는 무엇인가요?" msg="선택하신 기준을 중심으로 가장 적합한 포트폴리오와 전문가를 추천해드립니다." type="B" />
                <ContentBox>
                    <ConciergeRadio active={'on'}/>
                    <ConciergeRadio/>
                    <ConciergeRadio/>
                    <ConciergeRadio/>
                </ContentBox>
                <BttonBox>
                    <Button     onClick={_ => {
                        let {history} = this.props
                        history.push('/concierge/styles')
                      }     
                    }>이전으로</Button>
                   
                    <Button active={this.state.active}
                      style={{position:'absolute'}}
                      onClick={_ => {
                        let {history} = this.props
                        history.push('/concierge/splash')
                      }     
                    }
                    >다음으로 </Button>
                </BttonBox>
            </div>

        );
      }
    }

export default Priority;