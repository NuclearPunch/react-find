import React, { Component } from 'react';
import { BigTitle, MidTitle, ConciergeCard, Button } from 'components';
import styled from 'styled-components';
import Util from  './../../lib/Util';


const ContentBox = styled.div`
  width: 798px;
  height: 330px;
  margin: 0 auto;
  margin-top: 170px;

`;

const BttonBox = styled.div`
  width: 456px;
  height: 60px;
  margin: 0 auto;
  margin-top: 130px;
`;


class Spaces1 extends Component {

  constructor(props){
    super()
    this.state = {
        active : 'off',
        cards : Util.spaces1,
        spaces : {
          category : '',
          space : '',
          subcategory : '',
        },
        cardIds : {
          category : '',
          space : '',
          subcategory : '',
        }
      }
  }

  componentDidMount(){
    if(!this.props.location.state) return false;
    if(!this.props.location.state.formData.spaces.category) return false;
    let spaces = this.props.location.state.formData.spaces;
    let cardIds = this.props.location.state.formData.cardIds;
  
  
    const cards = this.state.cards;
   
    this.setState({
      spaces : spaces,
      cardIds : cardIds,
      active : 'on',
      cards: cards.map(
        c => {
          if (c.id === this.props.location.state.formData.cardIds.category) {
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
    const cards = this.state.cards;
    this.setState({
      active: 'on',
      cards: cards.map(
        c => {
          if (c.id === card.id) {
            c.selected = true;
          } else {
            c.selected = false;
          }
          return c;
        }),
        spaces: {
          ...this.state.spaces,
          category: card.value,
        },
        cardIds : {
          ...this.state.cardIds,
          category: card.id,
        }
    });
  }


    render() {
    
        return (
            <div>
                <BigTitle text="공간유형 선택" />
                <MidTitle text="컨설팅할 공간을 선택해 주세요." />
                <ContentBox>
                  { 
                    this.state.cards.map((card, index)=>
                      <ConciergeCard 
                        key={index} 
                        id={card.id}
                        title={card.title}
                        img={card.imgSrc}
                        subTitle={card.subTitle}
                        selected={card.selected}
                        type={"M"}
                        onClick={ e => this.handleActiveChange(card, e)}
                      />
                    )
                  }
                </ContentBox>
                <BttonBox>
                    <Button >이전으로</Button>                 
                    <Button active={this.state.active}
                      style={{position:'absolute'}}
                      onClick={_ => {
                        if(this.state.active === 'on'){
                          let {history, location} = this.props
                          if(!location.state){
                            location.state = {
                              formData : {},
                            }
                          }
                          history.push({
                            pathname:'/concierge/spaces2',
                            state: {
                              formData : {
                                ...location.state.formData,
                                spaces : this.state.spaces,
                                cardIds : this.state.cardIds
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



export default Spaces1;