import React, { Component } from 'react';
import { SmallTitle, MidTitle, ExpertCard, Button } from 'components';
import axios from 'axios';

import styled from 'styled-components';
import _ from 'lodash';

const ContentBox = styled.div`
  width: 984px;
  height: auto;
  display: flow-root;
  margin: 0 auto;
  margin-top: 37px;

`;

const BttonBox = styled.div`
  width: 456px;
  height: 60px;
  margin: 0 auto;
  margin-top: 130px;
  padding-bottom: 50px;
`;

class Experts extends Component {
    state = {
        active : 'off',
        experts : [],
        selExperts: [],
      }

      componentDidMount(){
      
        if(!this.props.location.state) return false;
        if(!this.props.location.state.experts) return false;
        const experts = this.props.location.state.experts;
       
        this.setState({
          experts : experts
         })
         
      }

      handleActiveChange = (expert, event) => {
        event.preventDefault();
        const experts  = this.state.experts;
        const selExperts  = this.state.selExperts;
        let active = 'on';
        if(selExperts.length < 1){
          selExperts.push(expert);
          
        }else{
          const idx = selExperts.findIndex( e => e.userId === expert.userId );
          if(idx > -1){
            selExperts.splice(idx, 1);
            if(selExperts.length < 1) active = 'off';
          }else{
            selExperts.push(expert);
          }
        }

       
        this.setState({
            active : active,
            selExperts : selExperts,
            experts: experts.map( 
                e => {
                  if(e.userId === expert.userId && e.portfolioId === expert.portfolioId){
                    if(!e.selected && this.state.length > 4){
                      alert("전문가는 최대 5명까지 선택 가능합니다.");
                      return e;
                    }
                    e.selected = !expert.selected;
                    return e;
                  }
                  return e;
              }),
        });
        
      }

    


      movePage(){
          const getTimeTable = () => new Promise((resolve, reject) => {
            let experts = this.state.selExperts.map( e => {
                return e.userId;
            });
           
            experts = _.uniq(experts);
           
            axios.get('http://192.168.1.119:3001/api/concierge/timetable', {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'},
                params: {
                  experts: experts,
                  kind   : 'timetable',
                },
                responseType:'json',
                timeout: 1000 
              }).then( response => {
              
                    const timetableMap = new Map();

                    for(let i = 1; i <= 5; i++){
                      timetableMap.set(i, response.data.timetable.filter(d => d.dayCode === i ))
                    }

                    this.setState({
                      timetable : timetableMap,
                    })

                   resolve(true);
                },

                error => { console.log(error); reject(error) }
              );
          
          });
        
  
        const mp = async _ =>{
            if(this.state.active === 'on'){
                await getTimeTable();
                let {history, location} = this.props
                history.push({
                    pathname:'/consulting/timetable',
                    state: {
                        formData : { 
                            ...location.state.formData,
                        },
                        timetable : this.state.timetable
                    },
                })
            }
        }

        mp();
        
    }


    render() {
        return (
            <div >
              <div style={{paddingTop:'40px'}}>
                <MidTitle text="맞춤 전문가(회사)를 추천 드립니다." />
              </div>
              <div style={{marginTop:'20px'}}>
                <SmallTitle text="고객님이 기입하신 정보에 따라 최적의 전문가를 추천해드립니다." />
                <SmallTitle text="추천업체를 포함하여 5건의 상담 신청이 가능합니다." />
                <SmallTitle text="*맞춤 전문가와 상담을 진행하시기를 추천합니다." color={"rgba(254, 23, 23, 0.7)"}/>
              </div>
              
              <ContentBox>
        
                {
                this.state.experts.map((expert, index)=>
                  <ExpertCard 
                    key={index}  
                    id={expert.userId}
                    title={expert.businessName}
                    subTitle={expert.title}
                    img={expert.src}
                    logo={expert.profileImage}
                    mainSpecialty={expert.mainSpecialty}
                    career={expert.career}
                    businessType={expert.businessType}
                    availableArea={expert.availableArea}
                    selected = {expert.selected}
                    timetable = {expert.timetable}
                    onClick={ e => this.handleActiveChange(expert, e)}
                    type={"M"}
                  />
                )
                
              }  


              </ContentBox>
              <BttonBox>
                <Button onClick={ _ => {
                        let {history, location} = this.props
                    
                        history.push({
                        pathname:'/concierge/priority',
                        state: {
                            formData : { 
                                ...location.state.formData,
                                experts : this.state.selExperts,
                            }
                        }
                        })
                    }     
                    }>이전으로</Button>
                    
                    <Button active={this.state.active}
                    style={{position:'absolute'}}
                    onClick={ _ => this.movePage()}
                    >다음으로 </Button>                  
              
              </BttonBox>
            </div>

        );
      }
    }



export default Experts;
