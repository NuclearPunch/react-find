import React, { Component } from 'react';
import { BigTitle, MidTitle, ConciergeInput, Button } from 'components';
import styled from 'styled-components';
import Media from 'react-media';

const ContentBox = styled.div`
  display:flex;
  flex-direction:column;
  align-item:center;
  width: 322px;
  min-height: 330px;
  height: auto;
  margin: 0 auto;
  margin-top: 170px;
  ${p => p.mobile === 'is' && `
     margin-top: 10em;   
  `}
  @media only screen and (max-height: 568px) {
    margin-top: 5em; 
  }
  @media only screen and (max-width: 320px) {
    width: 300px; 
  }
`;


const BttonBox = styled.div`
  width: 456px;
  height: 60px;
  margin: 0 auto;
  margin-top: 130px;
  text-align: center;
  ${p => p.type === 'S' && `
     width: 260px;
     height: 40px;
     margin-top: 0px;
  `}
`;

const ArrowBox = styled.div`
    width: 320px;
    height: 24px;
    margin: 0 auto;
    margin-top: 36px;
    margin-bottom: 36px;
    text-align: center;
    @media only screen and (max-width: 320px) {
        width: 300px; 
      }
`;

const ArrowImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const MobilePage = styled.div`
   display:flex;
   flex-direction:column;
   justify-content : space-around;
   align-item:center;
   height:${p => `
     ${p.height}px;
  `}
`;
const Page = styled.div`
   display:flex;
   flex-direction:column;
   justify-content : center;
   align-item:center;
   height:${p => `
     ${p.height}px;
  `}
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
        windowHeight : window.innerHeight
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
    }


    handleActiveChange = (id, e) => {
        e.preventDefault();
        const focus  = this.state.focus;
        if(this.state.meter < 1 && this.state.py < 1){
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
            <Media query="(max-width: 1146px)">
               {
                   m => m 
                   ? (<MobilePage height={this.state.windowHeight}>
                      <div>
                        <BigTitle text="면적/예산 설정" type="B" />
                        <MidTitle text="공간의 면적이 어떻게 되나요?" type="B" />
                      </div>

                      <div>
                        <ContentBox mobile='is'>
                            <div>
                                <ConciergeInput mobile="is" name="meter" active={this.state.focus[0].active} onFocus={(e) => this.handleActiveChange(this.state.focus[0].id, e)}  onChange={this.handleChange}  value={this.state.meter} />
                            </div>
                            <ArrowBox>
                                <ArrowImg src='/img/concierge/arrowUp.png'/>
                                <ArrowImg src='/img/concierge/arrowDown.png'/>
                            </ArrowBox>
                            <div>
                                <ConciergeInput mobile="is" name="py" active={this.state.focus[1].active} onFocus={(e) => this.handleActiveChange(this.state.focus[1].id, e)}  onChange={this.handleChange}  value={this.state.py} />
                            </div>           
                        </ContentBox>
                      </div>
                    <div>
                        <BttonBox type="S">
                        <Button type="S" onClick={ _ => {
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
                        <Button type="S" active={this.state.active}
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
                

        </MobilePage>) 
                   : (<Page height={this.state.windowHeight}>
                    <div>
                    <BigTitle text="면적/예산 설정" />
                    <MidTitle text="공간의 면적이 어떻게 되나요?"  />
                  </div>
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
                </Page>
               )
               }
            </Media>
            
           );
        }
      }



export default Measure;
