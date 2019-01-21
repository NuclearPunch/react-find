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
    // state = {
    //     active : 'off',
    //     card : [
    //             {id: 0, title: "상업공간", subTitle: "Retail", selected:false},
    //             {id: 1, title: "주거공간", subTitle: "Residence", selected:false},
    //             {id: 2, title: "사무공간", subTitle: "Office", selected:false},
    //             {id: 3, title: "부분시공", subTitle: "Remdeling", selected:false},
    //            ]
    //  }
    state = {
        active : 'off',
        cards : [],
        selectedId: ''
    }

    componentDidMount(){
        let parentId = this.props.location.state.parentId
        let cards = Util.spaces3.filter(card => card.parentId == parentId)
        this.setState({cards})
    }

    handleActiveChange = (id, e) => {
        e.preventDefault();
        const cards  = this.state.cards;
        this.setState({
            active : 'on',
            cards: cards.map(
                c => {
                  if(c.id === id){
                    c.selected = true;
                  }else{
                    c.selected = false;
                  }
                  return c;
              }),
            selectedId: id
        });
    }

  
    render() {
       
        return (
            <div>
                <BigTitle text="공간유형 선택" />
                <MidTitle text="상업공간" />
                
                <ContentBox>   
                  {
                    this.state.cards.map((card,index)=>
                    <ConciergeTextCard 
                      key={index} 
                      id={card.id}
                      title={card.title}
                      subTitle={card.subTitle}
                      selected={card.selected}
                      onClick={ e => this.handleActiveChange(card.id, e)}
                    />
                  )
                  }
                </ContentBox>
                <BttonBox>
                    <Button onClick={_ => {
                        let {history,location} = this.props
                       // history.push('/concierge/spaces2')
                       history.push({
                        pathname:'/concierge/spaces2',
                        state: {
                          parentId : location.state.parentId
                        }
                       })
                      }     
                    }>이전으로</Button>
                   
                    <Button active={this.state.active}
                      style={{position:'absolute'}}
                      onClick={_ => {
                        let {history} = this.props
                        history.push('/concierge/measure')
                      }     
                    }
                    >다음으로 </Button>
                   
                </BttonBox>
            </div>
           
        );
      }
    }



export default Spaces3;
