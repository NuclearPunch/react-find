import React, { Component } from 'react';
import { StyledHeader, SpaceCard, Button } from 'components';

import styled from 'styled-components';
import Util from  './../../lib/Util';

const ContentBox = styled.div`
  width: 1064px;
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
    state = {
        active : 'off',
        card : [
                {id: 0, title: "상업공간", imgSrc: "/img/concierge/Retail.png",  subTitle: "Retail", selected:false},
                {id: 1, title: "주거공간", imgSrc: "/img/concierge/Residence.png", subTitle: "Residence", selected:false},
                {id: 2, title: "사무공간", imgSrc: "/img/concierge/Office.png",  subTitle: "Office", selected:false},
                {id: 3, title: "부분시공", imgSrc: "/img/concierge/Remdeling.png", subTitle: "Remdeling", selected:false},
               ]
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

    movePath(path, post=false) {
        if(post) this.props.history.push(Util.movePath(this.props.location.pathname, path));
        if (this.state.active === 'off') return false;
        this.props.history.push(Util.movePath(this.props.location.pathname, path));
    }

    render() {

        return (
            <div>
                <StyledHeader title="공간유형 선택" msg="컨설팅할 공간을 선택해 주세요." />
                <ContentBox>
                    <SpaceCard id={this.state.card[0].id} title={this.state.card[0].title} subTitle={this.state.card[0].subTitle} img={this.state.card[0].imgSrc} selected={this.state.card[0].selected} onClick={(e) => this.handleActiveChange(this.state.card[0].id, e)} type={"M"}/>
                    <SpaceCard id={this.state.card[1].id} title={this.state.card[1].title} subTitle={this.state.card[1].subTitle} img={this.state.card[1].imgSrc} selected={this.state.card[1].selected} onClick={(e) => this.handleActiveChange(this.state.card[1].id, e)} type={"M"}/>
                    <SpaceCard id={this.state.card[2].id} title={this.state.card[2].title} subTitle={this.state.card[2].subTitle} img={this.state.card[2].imgSrc} selected={this.state.card[2].selected} onClick={(e) => this.handleActiveChange(this.state.card[2].id, e)} type={"M"}/>
                    <SpaceCard id={this.state.card[3].id} title={this.state.card[3].title} subTitle={this.state.card[3].subTitle} img={this.state.card[3].imgSrc} selected={this.state.card[3].selected} onClick={(e) => this.handleActiveChange(this.state.card[3].id, e)} type={"M"}/>
                </ContentBox>
                <BttonBox>
                    <Button >이전으로</Button>
                    <Button active={this.state.active}  onClick={() => this.movePath(`/spaces2`) }>다음으로</Button>
                </BttonBox>
            </div>

        );
      }
    }



export default Spaces1;