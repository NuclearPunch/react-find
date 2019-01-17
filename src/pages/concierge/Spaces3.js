import React, { Component } from 'react';
import { StyledHeader, SpaceTextCard, Button } from 'components';

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
        card : [
                {id: 0, title: "상업공간", subTitle: "Retail", selected:false},
                {id: 1, title: "주거공간", subTitle: "Residence", selected:false},
                {id: 2, title: "사무공간", subTitle: "Office", selected:false},
                {id: 3, title: "부분시공", subTitle: "Remdeling", selected:false},
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
                <StyledHeader title="공간유형 선택" msg="상업공간" />
                <ContentBox>
                    <SpaceTextCard id={this.state.card[0].id} title={this.state.card[0].title} subTitle={this.state.card[0].subTitle} selected={this.state.card[0].selected} onClick={(e) => this.handleActiveChange(this.state.card[0].id, e)} />
                    <SpaceTextCard id={this.state.card[1].id} title={this.state.card[1].title} subTitle={this.state.card[1].subTitle} selected={this.state.card[1].selected} onClick={(e) => this.handleActiveChange(this.state.card[1].id, e)} />
                    <SpaceTextCard id={this.state.card[2].id} title={this.state.card[2].title} subTitle={this.state.card[2].subTitle} selected={this.state.card[2].selected} onClick={(e) => this.handleActiveChange(this.state.card[2].id, e)} />
                    <SpaceTextCard id={this.state.card[3].id} title={this.state.card[3].title} subTitle={this.state.card[3].subTitle} selected={this.state.card[3].selected} onClick={(e) => this.handleActiveChange(this.state.card[3].id, e)} />
                
                </ContentBox>
                <BttonBox>
                    <Button onClick={() => this.movePath(`/spaces2`, true) }>이전으로</Button>
            
                    <Button active={this.state.active}  onClick={() => this.movePath(`/measure`) }>다음으로</Button>
                </BttonBox>
            </div>
           
        );
      }
    }



export default Spaces3;
