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

const ArrowBox = styled.div`
    width: 320px;
    height: 24px;
    margin: 0 auto;
    margin-top: 36px;
    margin-bottom: 36px;
    text-align: center;

`;

const ArrowImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

class Measure extends Component {
  
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
                <StyledHeader title="면적/예산 설정" msg="공간의 면적이 어떻게 되나요?" />
                <ContentBox>
                    <div>
                        <ConciergeInput  name="m2" active={this.state.focus[0].active} onFocus={(e) => this.handleActiveChange(this.state.focus[0].id, e)}  onChange={this.handleChange}  value={this.state.m2} />
                    </div>
                    <ArrowBox>
                        <ArrowImg src='/img/concierge/arrowUp.png'/>
                        <ArrowImg src='/img/concierge/arrowDown.png'/>
                    </ArrowBox>
                    <div>
                        <ConciergeInput  name="py" active={this.state.focus[1].active} onFocus={(e) => this.handleActiveChange(this.state.focus[1].id, e)}  onChange={this.handleChange}  value={this.state.py} />
                    </div>           
                </ContentBox>
                <BttonBox>
                <Button     onClick={_ => {
                        let {history} = this.props
                        history.push('/concierge/spaces3')
                      }     
                    }>이전으로</Button>
                   
                    <Button active={this.state.active}
                      style={{position:'absolute'}}
                      onClick={_ => {
                        let {history} = this.props
                        history.push('/concierge/budget')
                      }     
                    }
                    >다음으로 </Button>
                  
                </BttonBox>
            </div>
           
        );
      }
    }



export default Measure;
