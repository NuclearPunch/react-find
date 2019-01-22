import React, { Component } from 'react';
import { BigTitle, MidTitle, ConciergeTextCard, Button } from 'components';

import styled from 'styled-components';
import Util from "../../lib/Util";

const ContentBox = styled.div`
  width: 1072px;
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

class Spaces3 extends Component {
    state = {
        active : 'off',
        cards : [],

    }

    componentDidMount(){
    
      if(!this.props.location.state) return false;
      let cardIds = this.props.location.state.formData.cardIds;
      let parentId = cardIds.space
      let cards = Util.spaces3.filter(card => card.parentId === parentId)
      this.setState({
        cards,
        spaces : this.props.location.state.formData.spaces,
        cardIds : cardIds,
        active : 'on',
        cards: cards.map(
          c => {
            if (c.id === this.props.location.state.formData.cardIds.subcategory) {
              c.selected = true;
            } else {
              c.selected = false;
            }
            return c;
          }),
       })

    }

    handleActiveChange = (card, e) => {
        e.preventDefault();
        const cards  = this.state.cards;
        this.setState({
            active : 'on',
            cards: cards.map(
                c => {
                  if(c.id === card.id){
                    c.selected = true;
                  }else{
                    c.selected = false;
                  }
                  return c;
              }),
              spaces: {
                ...this.state.spaces,
                subcategory: card.value,
              },
              cardIds : {
                ...this.state.cardIds,
                subcategory: card.id,
              }
              
        });
    }

  
    render() {
       
        return (
            <div>
                <BigTitle text="공간유형 선택" />
                <MidTitle text="상업공간" />
                
                <ContentBox>   
                {
                    this.state.cards.map((card, index)=>
                    <ConciergeTextCard 
                      key={index} 
                      id={card.id}
                      title={card.title}
                      subTitle={card.subTitle}
                      selected={card.selected}
                      onClick={ e => this.handleActiveChange(card, e)}
                    />
                  )
                }
                </ContentBox>
                <BttonBox>
                    <Button onClick={_ => {
                        let {history,location} = this.props
                       history.push({
                        pathname:'/concierge/spaces2',
                        state: {
                          formData : { 
                              ...location.state.formData,
                              spaces : this.state.spaces,
                              cardIds : this.state.cardIds,
                          }
                        }
                
                       })
                      }     
                    }>이전으로</Button>
                   
                    <Button active={this.state.active}
                      style={{position:'absolute'}}
                      onClick={_ => {
                        let {history, location} = this.props
                        history.push({
                          pathname:'/concierge/measure',
                          state: {
                            formData : {
                              ...location.state.formData,
                              spaces : this.state.spaces,
                              cardIds : this.state.cardIds,
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



export default Spaces3;
