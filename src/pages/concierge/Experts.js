import React, { Component } from 'react';
import { SmallTitle, MidTitle, ExpertCard, Button } from 'components';

import styled from 'styled-components';


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
        const selExs = experts.filter( e => {return e.selected} );

        this.setState({
            active : 'on',
            selExs : selExs,
            experts: experts.map( 
                e => {
                  if(e.userId === expert.userId && e.portfolioId === expert.portfolioId){
                    if(!e.selected && selExs.length > 4){
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
                                
                            }
                        }
                        })
                    }     
                    }>이전으로</Button>
                    <Button active={this.state.active}
                    style={{position:'absolute'}}
                    onClick={ _ => {
                        let {history, location} = this.props
        
                        history.push({
                        pathname:'/concierge/experts',
                        state: {
                            formData : { 
                                ...location.state.formData,
                                
                            }
                        }
                        })
                    }     
                    }
                    >다음으로 </Button>  
              </BttonBox>
            </div>

        );
      }
    }



export default Experts;
