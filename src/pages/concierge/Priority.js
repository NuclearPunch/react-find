import React, { Component } from 'react';
import { SmallTitle, MidTitle, ConciergeRadio, Button } from 'components';
import styled from 'styled-components';
import Util from "../../lib/Util";
import Media from 'react-media';

const ContentBox = styled.div`
  width: 500px;
  min-height: 330px;
  height: auto;
  margin: 0 auto;
  margin-top: 110px;
  ${p => p.device ==='Mobile' && `
    width : 320px;
    margin-top: 3em;
  `}
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
     margin-top: 43px;
  `}
`;

const Page = styled.div`
   display:flex;
   flex-direction:column;
   justify-content : flex-start;
   align-item:center;
   height:${p => `
     ${p.height}px;
  `}
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



class Priority extends Component {
  
    state = {
        active : 'off',
        sort : '',
        radios: [
            {name : 'priority', value:1, id:'auto',    checked:false,  active:'off', title : '자동으로 추천해주세요.', subTitle : '(모든 조건을 종합해 추천하며, 유사도에 따라 일부 범위 밖의 결과가 추천될 수 있습니다.)' },
            {name : 'priority', value:2, id:'space',   checked:false,  active:'off', title : '공간 구분', subTitle : '' },
            {name : 'priority', value:3, id:'measure', checked:false,  active:'off', title : '공간 면적', subTitle : '' },
            {name : 'priority', value:4, id:'budget',  checked:false,  active:'off', title : '예산', subTitle : '' },
            {name : 'priority', value:5, id:'style',   checked:false,  active:'off', title : '스타일', subTitle : '' },
        ],
    }
    
    componentDidMount(){
        const formData = this.props.location.state.formData;
       

        if(!this.props.location.state) return false;
       
        const sort = this.props.location.state.formData.sort || '';
       
        this.setState({
          active : 'on',
          sort  : sort,
          radios: this.state.radios.map(
            c => {
              if (c.value.toString() === sort) {
                c.checked = true;
                c.active = 'on';
              } else {
                c.checked = false;
                c.active = 'off';
              }
            
              switch (c.id) {
                case "space" :
                    c.subTitle = `${Util.spaces2[Util.spaces2.findIndex(space => space.id === formData.cardIds.space)].title} > ${Util.spaces3[Util.spaces3.findIndex(space => space.id === formData.cardIds.subcategory)].title} `
                    break;
                case "measure" :
                    c.subTitle = `${formData.measure.meter}㎡(${formData.measure.py}평)`
                    break;
                case "budget" :
                    c.subTitle = `${formData.budget.min} - ${formData.budget.max}만원`
                    break;
                case "style" :
                    c.subTitle = formData.style.map(s => {
                        return (Util.style[Util.style.findIndex(st => st.id === s)].title); 
                    }).join(', ')
                    break;
                default : break;
                }
              return c;
            }),
         })
       
  
    }
          
    handleChange = (e) => {
      const radios = this.state.radios;
     
      this.setState({
          active: 'on',
          radios: radios.map(
            c => {
              if (c.id === e.target.id) {
                c.active = 'on';
                c.checked = true;
               
              } else {
                c.active = 'off';
                c.checked = false;
             
              }
              return c;
            }),
            sort: e.target.value,
     
      });

     }


    render() {
       
        return (
          <Media query="(max-width: 1146px)">
            { m => m ? (
               <>
                 <MobilePage>
                    <div style={{marginTop:30}}>
                      <MidTitle type="priority" text="입력하신 조건들 중에"  />
                      <MidTitle type="priority" text="가장 우선순위로 생각하는 요소는 무엇인가요?"  />
                      <SmallTitle type="priority" text="선택하신 기준을 중심으로" />
                      <SmallTitle type="priority" text="가장 적합한 포트폴리오와 전문가를 추천해드립니다."   />
                    </div>

                    <div>  
                    <ContentBox device="Mobile">
                    { 
                      this.state.radios.map((radio, index)=>
                          <ConciergeRadio 
                              device = "Mobile"
                              key={index} 
                              id={radio.id}
                              name={radio.name}
                              value={radio.value} 
                              checked={radio.checked}
                              active={radio.active}
                              title={radio.title}
                              subTitle={radio.subTitle}
                              onChange={this.handleChange}
                          />
                      )
                    }    
                   </ContentBox> 
                  </div>

                  <div>
                  <BttonBox type="S">
                  <Button type="S" onClick={ _ => {
                    let {history, location} = this.props
                  
                    history.push({
                      pathname:'/concierge/styles',
                      state: {
                        formData : { 
                            ...location.state.formData,
                            sort : this.state.sort
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
                      pathname:'/concierge/splash',
                      state: {
                        formData : { 
                            ...location.state.formData,
                            sort : this.state.sort
                        }
                      }
                    })
                    }
                
                  }     
                }
                >다음으로 </Button>
                    
                </BttonBox>
                  </div>
                 </MobilePage>
               </>
             ) : (
              <div style={{paddingTop:'80px'}} >
              <MidTitle text="입력하신 조건들 중에"  />
              <MidTitle text="가장 우선순위로 생각하는 요소는 무엇인가요?"  />
              <SmallTitle text="선택하신 기준을 중심으로" />
              <SmallTitle text="가장 적합한 포트폴리오와 전문가를 추천해드립니다."   />
             
              <ContentBox>
                  { 
                    this.state.radios.map((radio, index)=>
                        <ConciergeRadio 
                        key={index} 
                        id={radio.id}
                        name={radio.name}
                        value={radio.value} 
                        checked={radio.checked}
                        active={radio.active}
                        title={radio.title}
                        subTitle={radio.subTitle}
                        onChange={this.handleChange}
                        />
                    )
                  }    
              </ContentBox>
              <BttonBox>
                <Button onClick={ _ => {
                  let {history, location} = this.props
                
                  history.push({
                    pathname:'/concierge/styles',
                    state: {
                      formData : { 
                          ...location.state.formData,
                          sort : this.state.sort
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
                    pathname:'/concierge/splash',
                    state: {
                      formData : { 
                          ...location.state.formData,
                          sort : this.state.sort
                      }
                    }
                  })
                  }
              
                }     
              }
              >다음으로 </Button>
                  
              </BttonBox>
          </div>
             )
            }
          </Media>


        );
      }
    }

export default Priority;