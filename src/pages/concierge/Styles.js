import React, { Component } from 'react';
import { BigTitle, MidTitle, ConciergeCard, Button } from 'components';
import Util from  './../../lib/Util';
import styled from 'styled-components';


const ContentBox = styled.div`
  width: 984px;
  min-height: 440px;
  height: auto;
  margin: 0 auto;
  margin-top: 40px;

`;

const BttonBox = styled.div`
  width: 456px;
  height: 60px;
  margin: 0 auto;
  margin-top: 160px;
`;

class Styles extends Component {
    state = {
        active : 'off',
        cards : Util.style,
        style : []
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
            </div>

        );
    }
}



export default Styles;
