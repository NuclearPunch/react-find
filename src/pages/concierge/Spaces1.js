import React, { Component } from 'react';
import { BigTitle, MidTitle, ConciergeCard, Button } from 'components';
import styled from 'styled-components';
import Util from  './../../lib/Util';
import Media from 'react-media';

const ContentBox = styled.div`
  width: 798px;
  height: 330px;
  margin: 0 auto;
  margin-top: 170px;

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

const UnusefulCard = styled.div`
width: 156px;
height: 204px;
margin-left: 29px;
@media only screen and (max-width: 320px) {
  margin-left: 11px;
}
`;

const MobilePage = styled.div`
    

@media only screen and (max-width: 320px) {
   
}
`

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
        },
        windowHeight : window.innerHeight
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

            <Media query="(max-width: 1146px)">
               {matches =>
                  matches ? (
                   
                   <MobilePage>
                      <div>  
                        <BigTitle text="공간유형 선택" type="B"/>
                        <MidTitle text="컨설팅할 공간을 선택해 주세요." type="B" />
                      </div>
                       
                          <MoblileContentBox >
                              <ConciergeCard id={this.state.cards[0].id} title={this.state.cards[0].title} subTitle={this.state.cards[0].subTitle} img={this.state.cards[0].imgSrc} selected={this.state.cards[0].selected} onClick={(e) => this.handleActiveChange(this.state.cards[0], e)} type={"S"}/>
                              <ConciergeCard id={this.state.cards[1].id} title={this.state.cards[1].title} subTitle={this.state.cards[1].subTitle} img={this.state.cards[1].imgSrc} selected={this.state.cards[1].selected} onClick={(e) => this.handleActiveChange(this.state.cards[1], e)} type={"S"}/>
                          </MoblileContentBox>
                          <MoblileContentBox style={{marginTop:10}}>
                            <ConciergeCard id={this.state.cards[2].id} title={this.state.cards[2].title} subTitle={this.state.cards[2].subTitle} img={this.state.cards[2].imgSrc} selected={this.state.cards[2].selected} onClick={(e) => this.handleActiveChange(this.state.cards[2], e)} type={"S"}/>
                            <UnusefulCard />
                          </MoblileContentBox>
                       
                      <div > 
                        <BttonBox type="S">
                            <Button type="S">이전으로</Button>                 
                            <Button type="S" active={this.state.active}
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
                                        cardIds : this.state.cardIds,
                                        specialty : {
                                          main : 'interior'
                                        },
                                        status : 'koreaBuild'
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

               ) : (
                 <Page height={this.state.windowHeight}>
                <div>
                  <BigTitle text="공간유형 선택" />
                  <MidTitle text="컨설팅할 공간을 선택해 주세요." />
                </div>
                
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
                <div>
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
                                cardIds : this.state.cardIds,
                                specialty : {
                                  main : 'interior'
                                },
                                status : 'koreaBuild'
                              }
                            }
                          })
                        }
                
                      }     
                    }
                    >다음으로 </Button>
                 </BttonBox>
                 </div>

                </Page>
               )
            }
        </Media>
                
            </div>

        );
      }
    }



export default Spaces1;