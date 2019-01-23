import React, { Component } from 'react';
import { BigTitle, MidTitle, ConciergeInput, Button } from 'components';

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
        min: '',
        max: '',
    }

    componentDidMount(){
        if(!this.props.location.state.formData.budget) return false;
        const budget = this.props.location.state.formData.budget;
        this.setState({
            active : 'on',
            min: Util.numberComma(budget.min),
            max: Util.numberComma(budget.max),
        })
        
        if(budget.min < 1 && budget.max < 1 ){
            this.setState({
              active : 'off'
            })
          }
        
     }

    
    handleChange = (e) => {
        const val = Util.removeComma(e.target.value);
        if(e.target.name === 'min' && val > Util.removeComma(this.state.max)){
            return false;
        }    
         
        this.setState({
            [e.target.name]: Util.numberComma(e.target.value)
        });

        if(e.target.value < 1 ){
            this.setState({
                active : 'off',        
            });
            return false;
        }else{
            this.setState({
                active : 'on',
            });
        }
    }

    handleActiveChange = (id, e) => {
        e.preventDefault();
        const focus  = this.state.focus;

        if(this.state.min < 1 && this.state.max < 1){
            this.setState({
                active : 'off',        
            });
            return false;
        }    
  
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
                <BigTitle text="면적/예산 설정" />
                <MidTitle text="예산은 어떻게 되나요?" />
                <ContentBox>
                    <div>
                        <ConciergeInput  name="min" active={this.state.focus[0].active} onFocus={(e) => this.handleActiveChange(this.state.focus[0].id, e)}  onChange={this.handleChange}  value={this.state.min} />
                    </div>
                    <InlineBox/>
                    <div>
                        <ConciergeInput  name="max" active={this.state.focus[1].active} onFocus={(e) => this.handleActiveChange(this.state.focus[1].id, e)}  onChange={this.handleChange}  value={this.state.max} />
                    </div>
                </ContentBox>
                <BttonBox>
                    <Button onClick={ _ => {
                        let {history, location} = this.props
                      
                        history.push({
                          pathname:'/concierge/measure',
                          state: {
                            formData : { 
                                ...location.state.formData,
                                budget : {
                                    min : Util.removeComma(this.state.min),
                                    max : Util.removeComma(this.state.max)
                                }
                            }
                          }
                         })
                      }     
                    }>이전으로</Button>
                    <Button active={this.state.active}
                      style={{position:'absolute'}}
                      onClick={ _ => {

                        if(Util.removeComma(this.state.min) > Util.removeComma(this.state.max)){
                            alert("최소금액이 최대금액보다 클 수 없습니다.")
                            return false;
                        }    
                         
                        if(this.state.active === 'on'){
                            let {history, location} = this.props

                            history.push({
                              pathname:'/concierge/styles',
                              state: {
                                formData : { 
                                    ...location.state.formData,
                                    budget : {
                                        min : Util.removeComma(this.state.min),
                                        max : Util.removeComma(this.state.max)
                                    }
                                }
                              }
                            })
                        }
                
                      }     
                    }
                    >다음으로 </Button>
                
                  
                </BttonBox>
            </div>

        );
      }
    }



export default Budget;
