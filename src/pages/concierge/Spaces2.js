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

class Spaces2 extends Component {
    state = {
        active : 'off',
        cards : []
      }

      componentDidMount(){
         let parentId = this.props.location.state.parentId
         console.log(this.props.location.state);
         let cards = Util.spaces2.filter(card => card.parentId == parentId)
         this.setState({cards})
      }
     

      handleActiveChange = (id, e) => {
        e.preventDefault();
        const card  = this.state.card;
        this.setState({
            active : 'on',
            card: card.map( 
                c => {
                  if(c.id === id){
                    c.selected = true;
                  }else{
                    c.selected = false;
                  }
                  return c;
              })
            
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
                      onClick={(e) => this.handleActiveChange(card.id, e)}
                    />
                  )
                 }
                    
                </ContentBox>
                <BttonBox>
                    <Button onClick={_ => {
                        let {history} = this.props
                        history.push('/concierge/spaces1')
                      }     
                    }>이전으로</Button>
                    <Button active={this.state.active}
                      style={{position:'absolute'}}
                      onClick={_ => {
                        let {history} = this.props
                        history.push('/concierge/spaces3')
                      }     
                    }
                    >다음으로 </Button>
                   
                </BttonBox>
            </div>
           
        );
      }
    }



export default Spaces2;
