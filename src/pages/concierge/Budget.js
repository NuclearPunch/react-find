import React, { Component } from 'react';
import { StyledHeader, ConciergeInput, Button } from 'components';

import styled from 'styled-components';

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
        this.state.active = 'on';
        const focus  = this.state.focus;
        this.setState({
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

    nextPath(path) {
    if( this.state.active === 'off' ) return false;
    const checkUrl = this.props.location.pathname.split("/");
    let url = '';
    checkUrl.splice(0, 1);
    if( checkUrl.length > 1 ) checkUrl.splice(checkUrl.length-1, 1);
    
    for (const s of checkUrl) {
        url += `/${s}`;
    }
    url += path;


    this.props.history.push(url);
    }


    render() {
       
        return (
            <div>
                <StyledHeader title="면적/예산 설정" msg="예산은 어떻게 되나요?" />
                <ContentBox>
                    <div>
                        <ConciergeInput  name="m2" active={this.state.focus[0].active} onFocus={(e) => this.handleActiveChange(this.state.focus[0].id, e)}  onChange={this.handleChange}  value={this.state.m2} />
                    </div>
                    <InlineBox/>
                    <div>
                        <ConciergeInput  name="py" active={this.state.focus[1].active} onFocus={(e) => this.handleActiveChange(this.state.focus[1].id, e)}  onChange={this.handleChange}  value={this.state.py} />
                    </div>           
                </ContentBox>
                <BttonBox>
                    <Button onClick={() => this.nextPath(`/measure`) }>이전으로</Button>
            
                    <Button active={this.state.active}  onClick={() => this.nextPath(`/budget`) }>다음으로</Button>
                </BttonBox>
            </div>
           
        );
      }
    }



export default Budget;
