import React, { Component } from 'react';
import { SmallTitle, MidTitle, Button } from 'components';
import axios from 'axios';

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
  width: 208px;
  height: 60px;
  margin: 0 auto;
  margin-top: 130px;
`;




class Splash extends Component {
  
    state = {
        active : 'off',

    }

    componentDidMount(){

        const doConcierge = () => {
            axios.get('http://localhost:3001/api/concierge/experts', {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'},
                params: {
                  formData: this.props.location.state.formData
                },
                responseType:'json',
                timeout: 1000 
              }).then( response => {
                    this.setState({
                        experts : response.data.experts.map( expert => {
                            expert.src = Util.srcConvert(expert.src, 2);
                            expert.profileImage = Util.dehtmlSpecialChars(expert.profileImage);
                            expert.businessName = Util.dehtmlSpecialChars(expert.businessName);
                            expert.title = Util.srcConvert(expert.title, 1);
                            expert.mainSpecialty = Util.mainSpecialty[expert.mainSpecialty];
                            expert.businessType = Util.businessType[expert.businessType];
                            expert.availableArea = Util.locationMap[JSON.parse(expert.availableArea)[0]];
                            expert.selected = false;
                            return expert;
                          })
                    })
                   
                },

                error => { console.log(error) }
              );
        }

        doConcierge();
      }

    render() {
       
        return (
            <div>
                <MidTitle text="데이터 매칭중입니다…"  />
                <SmallTitle text="컨시어지 서비스는 전문가들의 실제사례로 이루어진 빅데이터를 활용해 " />
                <SmallTitle text="가장 적합한 전문가를 매칭해드립니다. 잠시만 기다려주세요."  />
               
                <ContentBox>
                   
                </ContentBox>
                <BttonBox>
                    <Button active={this.state.active}
                    style={{position:'absolute'}}
                    onClick={ _ => {
                        if(this.state.active === 'on'){
                            let {history, location} = this.props
        
                            history.push({
                            pathname:'/concierge/experts',
                            state: {
                                formData : { 
                                    ...location.state.formData,
                                },
                                experts : this.state.experts
                            },
                           
                            })
                        }
                    
                    }     
                    }
                    >결과보기 </Button>                  
                </BttonBox>
            </div>

        );
      }
    }

export default Splash;
