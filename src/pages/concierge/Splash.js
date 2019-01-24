import React, { Component } from 'react';
import { SmallTitle, MidTitle, Button, ProgressBar } from 'components';
import axios from 'axios';

import styled from 'styled-components';
import Util from "../../lib/Util";
import CountUp from 'react-countup';
import _ from 'lodash';

const ContentBox = styled.div`
  width: 820px;
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

const Researching = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 25px;
    font-weight: ${p => p.fw};
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    text-align: center;
    color: rgba(27, 27, 27, 0.7);
`;




class Splash extends Component {
  
    state = {
        active : 'off',
        percentage : "0",

    }

    componentDidMount(){
       
        if(!this.props.location.state) return false;
        this.doProgressBar();
     
       
    }



    doProgressBar() {

         setTimeout(() => {
            this.setState({ percentage : this.state.percentage*1+25});
            setTimeout(() => {
                this.setState({ percentage : this.state.percentage*1+25});
                setTimeout(() => {
                    this.setState({ percentage : this.state.percentage*1+25});
                    setTimeout(() => {
                        this.setState({ 
                            percentage : this.state.percentage*1+25,
                            active : 'on',
                        });
                        }, 1500);
                    }, 1500);
                }, 1500);
            }, 1500); 

      
     
    }

    
    movePage(){

        const doConcierge = _ => new Promise((resolve, reject) => {
            this.props.location.state.formData.limit = 12;
            this.props.location.state.formData.channel = 'consulting';
            axios.get('http://192.168.1.119:3001/api/concierge/experts', {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'},
                params: {
                  formData: this.props.location.state.formData
                },
                responseType:'json',
                timeout: 1000 
              }).then( response => {
                    let mArr = [];
                    for(let i = 0; i < 5; i++){
                        let m = new Map();
                        mArr.push(m.set(i+1, []));
                    }
                   
               
                    this.setState({
                        experts : response.data.experts.map( expert => {
                            expert.src = Util.srcConvert(expert.src, 2);
                            expert.profileImage = Util.dehtmlSpecialChars(expert.profileImage);
                            expert.businessName = Util.dehtmlSpecialChars(expert.businessName);
                            expert.title = Util.srcConvert(expert.title, 1);
                            expert.mainSpecialty = Util.mainSpecialty[expert.mainSpecialty];
                            expert.businessType = Util.businessType[expert.businessType];
                            expert.availableArea = Util.locationMap[JSON.parse(expert.availableArea)[0]] || '정보없음';
                            expert.selected = false;
                            expert.timetable = mArr;
                            return expert;
                          })
                    })
                    resolve(true);
                },

                error => { console.log(error); reject(error) }
              );
          
          });

          const getTimeTable = () => new Promise((resolve, reject) => {
            let experts = this.state.experts.map( e => {
                return e.userId;
            });
            experts = _.uniq(experts);
           
            axios.get('http://192.168.1.119:3001/api/concierge/timetable', {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'},
                params: {
                  experts: experts,
                  kind   : 'experts',
                },
                responseType:'json',
                timeout: 1000 
              }).then( response => {
                   
                    const timetableMap = new Map();
                    for(let i of response.data.timetable){
                        timetableMap.set([i.expertId, i.dayCode], response.data.timetable.filter(d => d.expertId === i.expertId && d.dayCode === i.dayCode )
                      )
                    }

                    const ex = this.state.experts;

                    this.setState({
                        experts : ex.map( expert => {
                
                            
                            timetableMap.forEach((val, key) => {
                                const k = key[0];
                                if(k === expert.userId){ 
                                   const m = new Map();
                                   expert.timetable.splice(key[1]-1,1,m.set(key[1], timetableMap.get(key)));
                                }
                            
                            });
  
                            return expert;
                          })
                    })

                    console.log(this.state.experts);
                    
                   resolve(true);
                },

                error => { console.log(error); reject(error) }
              );
          
          });
        
  
        const mp = async _ =>{
            if(this.state.active === 'on'){
                await doConcierge();
                await getTimeTable();
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

        mp();
        
    }

    render() {
       
        return (
            <div>
                <MidTitle text="데이터 매칭중입니다…"  />
                <SmallTitle text="컨시어지 서비스는 전문가들의 실제사례로 이루어진 빅데이터를 활용해 " />
                <SmallTitle text="가장 적합한 전문가를 매칭해드립니다. 잠시만 기다려주세요."  />
               
                <ContentBox>
                <ProgressBar percentage={this.state.percentage} />
                <div style={{marginTop: "40px"}}>
                 <Researching fw="600">리서치 중...</Researching>
                 <Researching fw="400"> (<CountUp end={16212} duration={6.5}  decimal="," separator=","/> / 16,212) </Researching>
                
                </div>
                
                </ContentBox>
                <BttonBox>
                    <Button active={this.state.active}
                    style={{position:'absolute'}}
                    onClick={ _ => this.movePage()}
                    >결과보기 </Button>                  
                </BttonBox>
            </div>

        );
      }
    }

export default Splash;
