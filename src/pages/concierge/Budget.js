import React, { Component } from 'react';
import { StyledHeader, ConciergeInput, Button } from 'components';

import styled from 'styled-components';
import Util from "../../lib/Util";

const ContentBox = styled.div`
  width: 322px;
  min-height: 330px;
  height: auto;
  margin: 0 auto;
  margin-top: 170px;
`;

const BttonBox = styled.div`
  width: 456px;
  height: 60px;
  margin: 0 auto;
  margin-top: 130px;
`;

const InlineBox = styled.div`
    width: 50px;
    height: 1px;
    background-color: #8a8a8a;   
    margin: 0 auto;
    margin-top: 48px;
    margin-bottom: 48px;


`;


class Budget extends Component {
  
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
                <StyledHeader title="면적/예산 설정" msg="예산은 어떻게 되나요?" />
                <ContentBox>
                    <div>
                        <ConciergeInput  name="a" active={this.state.focus[0].active} onFocus={(e) => this.handleActiveChange(this.state.focus[0].id, e)}  onChange={this.handleChange}  value={this.state.m2} />
                    </div>
                    <InlineBox/>
                    <div>
                        <ConciergeInput  name="b" active={this.state.focus[1].active} onFocus={(e) => this.handleActiveChange(this.state.focus[1].id, e)}  onChange={this.handleChange}  value={this.state.py} />
                    </div>
                </ContentBox>
                <BttonBox>
                <Button     onClick={_ => {
                        let {history} = this.props
                        history.push('/concierge/measure')
                      }     
                    }>이전으로</Button>
                   
                    <Button active={this.state.active}
                      style={{position:'absolute'}}
                      onClick={_ => {
                        let {history} = this.props
                        history.push('/concierge/styles')
                      }     
                    }
                    >다음으로 </Button>
                  
                </BttonBox>
            </div>

        );
      }
    }



export default Budget;
