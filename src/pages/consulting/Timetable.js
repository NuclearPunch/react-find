import React, { Component } from 'react';
import { SmallTitle, MidTitle, Button } from 'components';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Media from 'react-media';
import * as RMButton from '@material-ui/core/Button';

const ContentBox = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 3em;
  @media only screen and (max-width: 1146px) {
    width:95%;
    margin-top: 10px;
  }
`;

// const BttonBox = styled.div`
//   width: 456px;
//   height: 60px;
//   margin: 0 auto;
//   margin-top: 130px;
// `;

const SubTitle = styled.p`
  text-align: center;
  margin : 0px 0 0 0;
  border: 1px solid black;
  min-width:0;
  word-wrap:break-word;
  padding:10px;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  color: rgba(27, 27, 27, 0.7);
  @media only screen and (max-width: 320px){
    font-size: 8px;
    padding:2px;
  }
  @media only screen and (max-width: 450px) and (min-width: 321px){
    font-size: 11px;
    padding:2px;
  }

  ${p => p.type === 'tableTitle' && `
      
  `}
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


class ColumnGrid extends React.Component{
   gridColor = ['gray,yellow','white']
   
  render(){
    const data = this.props.data
    return (
      <Grid container spacing={0} wrap="nowrap" >
        <Grid item xs={2} style={{backgroundColor:'white'}}>
          <SubTitle> {'11:00 - 11:50'}</SubTitle> 
        </Grid>
        <Grid item xs={2}>
          <SubTitle> 11:00 - 11:50 </SubTitle> 
        </Grid>
        <Grid item xs={2} zeroMinWidth>
          <SubTitle> 11:00 - 11:50 </SubTitle>
        </Grid>
        <Grid item xs={2} zeroMinWidth>
          <SubTitle> 11:00 - 11:50 </SubTitle> 
        </Grid>
        <Grid item xs={2} zeroMinWidth>
          <SubTitle> 11:00 - 11:50 </SubTitle> 
        </Grid>
        <Grid item xs={2} zeroMinWidth>
          <SubTitle> 11:00 - 11:50 </SubTitle> 
        </Grid>
    </Grid>
    )
  }
}


class Timetable extends Component {

  constructor(props){
    super()
    this.state = {
        active : 'off',
        selectedId : ''
    }  
  }
  
    render() {
    
        return (
      
             
                <div>
                  <MidTitle type="timetableDestop" text="컨설팅 신청" />
                  <SmallTitle type="timetableDestop" text="인테리어 컨설팅 신청은 최대 5회까지 가능합니다." />
                  <SmallTitle type="timetableDestop" text="추천 전문가 상담이 마감되었거나, 추천 외 전문가와의 상담을 원하실 경우 사무국으로 문의해주시기 바랍니다." />
                  <SmallTitle type="timetableDestop" color="red" text="사무국: 02-6121-6439" />
                  <ContentBox>
  
                     <Grid item xs={12}  zeroMinWidth={true}>
                         <div>
                         
                          <SubTitle type="tableTitle">  
                                <h2 style={{display:'inline'}} onClick={ _ => alert('left')}> 
                                 {'<'}
                                </h2>

                                <h3 style={{display:'inline'}}> 
                                 {' 2월11일 '}
                                </h3>

                                <h2 style={{display:'inline'}} onClick={_=>alert('right')}> 
                                 {'>'}
                                </h2>
                            </SubTitle>
                         
                         </div>
                     </Grid>
                     <Grid container spacing={0}>
                       <Grid item xs={12}  zeroMinWidth={true}>
                        <ColumnGrid />
                       </Grid>
                       <Grid item xs={12}  zeroMinWidth={true}>
                       <ColumnGrid />
                      </Grid>
                      <Grid item xs={12}  zeroMinWidth={true}>
                      <ColumnGrid />
                     </Grid>
                     <Grid item xs={12}  zeroMinWidth={true}>
                     <ColumnGrid />
                    </Grid>
                        <Grid item xs={12}  zeroMinWidth={true}>
                        <ColumnGrid />
                      </Grid>
                        <Grid item xs={12}  zeroMinWidth={true}>
                        <ColumnGrid />
                        </Grid>
                        <Grid item xs={12}  zeroMinWidth={true}>
                        <ColumnGrid />
                      </Grid>
                      <Grid item xs={12}  zeroMinWidth={true}>
                      <ColumnGrid />
                      </Grid>
                      <Grid item xs={12}  zeroMinWidth={true}>
                      <ColumnGrid />
                      </Grid>
                     </Grid>
                    
                      
                  </ContentBox>
                  <BttonBox type="S">
                    <Button type="S">뒤로</Button>                 
                    <Button type="S" active={this.state.active}
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
                    >컨설팅 신청완료</Button>
                </BttonBox>
                 </div>

        );
      }
    }



export default Timetable;
