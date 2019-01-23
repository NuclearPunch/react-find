import React, { Component } from 'react';
import { BigTitle, MidTitle, ConciergeCard, Button } from 'components';
import Util from  './../../lib/Util';
import styled from 'styled-components';
import Media from 'react-media';
import _ from 'lodash';

const ContentBox = styled.div`
  width: 984px;
  min-height: 440px;
  height: auto;
  margin: 0 auto;
  margin-top: 40px;

`;

const MoblileContentBox = styled.div`
    margin-top: 15px;
    display:flex;
    flex-direction:row;
    justify-content : center;
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
   justify-content : center;
   align-item:center;
   height:${p => `
     ${p.height}px;
  `}
`;
const MobilePage = styled.div`
   display:flex;
   flex-direction:column;
   justify-content : flex-start;
   align-item:center;
   height:${p => `
     ${p.height}px;
  `}
`;
const UnusefulCard = styled.div`
    width: 156px;
    height: 204px;
    margin-left: 19px;
    @media only screen and (max-width: 320px) {
      margin-left: 11px;
    }
`;



class Styles extends Component {
    state = {
        active : 'off',
        cards : Util.style,
        style : [],
        windowHeight : window.innerHeight
    }
    componentDidMount(){
    
        if(!this.props.location.state) return false;
        if(!this.props.location.state.formData.style) return false;
       
        const style = this.props.location.state.formData.style;
        this.setState({
          active : 'on',
          style  : style,
          cards: this.state.cards.map(
            c => {
              if (style.indexOf(c.id) > -1) {
                c.selected = true;
              } else {
                c.selected = false;
              }
              return c;
            }),
         })
  
      }

    handleActiveChange = (id, e) => {
        e.preventDefault();
        const cards  = this.state.cards;
        this.setState({
            cards: cards.map(
                c => {
                    const style = this.state.style;
                    if(c.id === id){
                        if(c.selected){
                            this.setState({
                                style: style.filter(st => st !== id)
                              })
                              
                        if(this.state.style.length < 2) {
                            this.setState({
                                active:  'off',
                              })
                        }
                        }else{
                            style.push(c.id)
                            this.setState({
                                active:  'on',
                              })
                          
                        }
                        c.selected = !c.selected ;
                    
                       
                    }
                    return c;
                })

        });
    }



    render() {

        return (
          <Media query="(max-width: 1146px)">
            {
              m=> m
              ?(<MobilePage height={this.state.windowHeight}>
                   <div>
                      <BigTitle text="공간유형 선택" type="B"/>
                      <MidTitle text="컨설팅할 공간을 선택해 주세요." type="B"/>
                   </div>

                   <div>
                      {
                        _.chunk(this.state.cards,2).map(
                          card2 => (
                            card2.length >= 2 
                            ? (<MoblileContentBox>
                               {
                                 card2.map((card, index)=>
                                   <ConciergeCard 
                                     type = 'SL'
                                     key={index} 
                                     id={card.id}
                                     title={card.title}
                                     img={card.imgSrc}
                                     subTitle={card.subTitle}
                                     selected={card.selected}
                                     onClick={ e => this.handleActiveChange(card.id, e)}
                                   />
                               )
                               }
                              </MoblileContentBox>)
                            : (<MoblileContentBox>
                                 <ConciergeCard 
                                   type = 'SL'
                                   id={card2[0].id}
                                   title={card2[0].title}
                                   img={card2[0].imgSrc}
                                   subTitle={card2[0].subTitle}
                                   selected={card2[0].selected}
                                   onClick={ e => this.handleActiveChange(card2[0].id,e)}
                                 />
                                 <UnusefulCard />
                               </MoblileContentBox>)
                          )  
                       )
                      }
                   </div>

                   <div>
                   <BttonBox type="S">
                   <Button type="S" onClick={ _ => {
                       let {history, location} = this.props
                     
                       history.push({
                         pathname:'/concierge/budget',
                         state: {
                           formData : { 
                               ...location.state.formData,
                               style : this.state.style
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
                             pathname:'/concierge/priority',
                             state: {
                               formData : { 
                                   ...location.state.formData,
                                   style : this.state.style
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
              :(<div>
                <BigTitle text="공간유형 선택" />
                <MidTitle text="컨설팅할 공간을 선택해 주세요." />
                <ContentBox>
                  { 
                    this.state.cards.map((card, index)=>
                      <ConciergeCard 
                        key={index} 
                        id={card.id}
                        title={card.title}
                        subTitle={card.subTitle}
                        selected={card.selected}
                        img={card.imgSrc}
                        type={"L"} 
                        onClick={ e => this.handleActiveChange(card.id, e)}
                      />
                    )
                  }
                </ContentBox>
                <BttonBox>
                    <Button onClick={ _ => {
                        let {history, location} = this.props
                      
                        history.push({
                          pathname:'/concierge/budget',
                          state: {
                            formData : { 
                                ...location.state.formData,
                                style : this.state.style
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
                              pathname:'/concierge/priority',
                              state: {
                                formData : { 
                                    ...location.state.formData,
                                    style : this.state.style
                                }
                              }
                            })
                        }  
                   
                      }     
                    }
                    >다음으로 </Button>
                </BttonBox>
            </div>)
            }
          </Media>
        );
    }
}



export default Styles;
