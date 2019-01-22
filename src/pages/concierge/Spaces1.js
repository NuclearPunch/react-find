import React, { Component} from 'react';
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

const BttonBox = styled.div`
  width: 456px;
  height: 60px;
  margin: 0 auto;
  margin-top: 130px;
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

class Spaces1 extends Component {

  constructor(props){
    super()
    this.state = {
        active : 'off',
        card : Util.spaces1,
        windowHeight: window.innerHeight
      }
  }
    handleActiveChange = (id, e) => {
        e.preventDefault();
        const card = this.state.card;
        this.setState({
          active: 'on',
          card: card.map(
            c => {
              if (c.id === id) {
                c.selected = true;
              } else {
                c.selected = false;
              }
              return c;
            })

        });
      }

    // handleResize = (e)=>{
    //     console.log(window.innerHeight)
    //     this.setState({windowWidth: window.innerHeight})
    // }
    // componentDidMount(){
    //     window.addEventListener('resize', this.handleResize);
    // }
    // componentWillUnmount() {
    //   window.removeEventListener('resize', this.handleResize);
    // }

    // shouldComponentUpdate(p,ns,c){
    //    return this.state.windowHeight !== ns.windowHeight
    // }

    render() {
    
        return (
            <div>

            <Media query="(max-width: 1146px)">
               {matches =>
                  matches ? (
                   
                   <>
                   
                   <BigTitle text="공간유형 선택" />
                   <MidTitle text="컨설팅할 공간을 선택해 주세요." />
                   <ContentBox>
                       <ConciergeCard id={this.state.card[0].id} title={this.state.card[0].title} subTitle={this.state.card[0].subTitle} img={this.state.card[0].imgSrc} selected={this.state.card[0].selected} onClick={(e) => this.handleActiveChange(this.state.card[0].id, e)} type={"M"}/>
                       <ConciergeCard id={this.state.card[1].id} title={this.state.card[1].title} subTitle={this.state.card[1].subTitle} img={this.state.card[1].imgSrc} selected={this.state.card[1].selected} onClick={(e) => this.handleActiveChange(this.state.card[1].id, e)} type={"M"}/>
                   </ContentBox>
                   <ContentBox>
                     <ConciergeCard id={this.state.card[2].id} title={this.state.card[2].title} subTitle={this.state.card[2].subTitle} img={this.state.card[2].imgSrc} selected={this.state.card[2].selected} onClick={(e) => this.handleActiveChange(this.state.card[2].id, e)} type={"M"}/>
                   
                   </ContentBox>
                  
                   <BttonBox>
                       <Button >이전으로</Button>                 
                       <Button active={this.state.active}
                         style={{position:'absolute'}}
                         onClick={_ => {
                           let {history} = this.props
                           history.push('/concierge/spaces2')
                         }     
                       }
                       >다음으로 </Button>
                    </BttonBox>

                   </>

               ) : (
                 <Page height={this.state.windowHeight}>
                <div>
                  <BigTitle text="공간유형 선택" />
                  <MidTitle text="컨설팅할 공간을 선택해 주세요." />
                </div>
                
                <ContentBox>
                    <ConciergeCard 
                      id={this.state.card[0].id} 
                      title={this.state.card[0].title} 
                      subTitle={this.state.card[0].subTitle} 
                      img={this.state.card[0].imgSrc} 
                      selected={this.state.card[0].selected} 
                      onClick={(e) => this.handleActiveChange(this.state.card[0].id, e)} 
                      type={"M"}/>
                    <ConciergeCard id={this.state.card[1].id} title={this.state.card[1].title} subTitle={this.state.card[1].subTitle} img={this.state.card[1].imgSrc} selected={this.state.card[1].selected} onClick={(e) => this.handleActiveChange(this.state.card[1].id, e)} type={"M"}/>
                    <ConciergeCard id={this.state.card[2].id} title={this.state.card[2].title} subTitle={this.state.card[2].subTitle} img={this.state.card[2].imgSrc} selected={this.state.card[2].selected} onClick={(e) => this.handleActiveChange(this.state.card[2].id, e)} type={"M"}/>
                </ContentBox>
                <div>
                <BttonBox>
                    <Button >이전으로</Button>                 
                    <Button active={this.state.active}
                      style={{position:'absolute'}}
                      onClick={_ => {
                        let {history} = this.props
                        history.push({
                          pathname:'/concierge/spaces2',
                          state: {
                            parentId : this.state.selectedId
                          }
                        })
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