import React, { Component } from 'react';
import { BigTitle, MidTitle, ConciergeInput, Button } from 'components';

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
       
        meter: '',
        py: '',
    
    }

    
    componentDidMount(){
      
        if(!this.props.location.state.formData.measure) return false;
        const measure = this.props.location.state.formData.measure;
        this.setState({
            active : 'on',
            meter: measure.meter,
            py: measure.py,
        })
        
        if(measure.meter < 1 && measure.py < 1 ){
            this.setState({
              active : 'off'
            })
          }
     }

     meterToPy = val => {
        this.setState({
            py: (val / 3.3).toFixed(2)
        });
    }
    
     pyToMeter = val => {
        this.setState({
             meter: (val * 3.3).toFixed(2)
        });
    }
    
    handleChange = (e) => {
    
        this.setState({
            [e.target.name]: e.target.value
        });
        e.target.name === 'meter' ? this.meterToPy(e.target.value) : this.pyToMeter(e.target.value)
    
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
        if(e.target.value < 1){
            this.setState({
                active : 'off',        
            });
            return false;
        }else{
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
       
   
      }

    render() {
       
        return (
            <div>
                <BigTitle text="면적/예산 설정" />
                <MidTitle text="공간의 면적이 어떻게 되나요?" />
                <ContentBox>
                    <div>
                        <ConciergeInput  name="meter" active={this.state.focus[0].active} onFocus={(e) => this.handleActiveChange(this.state.focus[0].id, e)}  onChange={this.handleChange}  value={this.state.meter} />
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
                    <Button onClick={ _ => {
                        let {history, location} = this.props
                      
                        history.push({
                          pathname:'/concierge/spaces3',
                          state: {
                            formData : { 
                                ...location.state.formData,
                               measure : {
                                        meter : this.state.meter,
                                        py : this.state.py
                                    }
                            }
                          }
                         })
                      }     
                    }>이전으로</Button>
                    <Button active={this.state.active}
                      style={{position:'absolute'}}
                      onClick={ _ => {
                        if(this.state.active === 'on'){
                            let {history, location} = this.props
          
                            history.push({
                              pathname:'/concierge/budget',
                              state: {
                                formData : { 
                                    ...location.state.formData,
                                    measure : {
                                        meter : this.state.meter,
                                        py : this.state.py
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



export default Measure;
