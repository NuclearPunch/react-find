import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Spaces1, Spaces2, Spaces3, Measure, Budget, Styles, Priority, Splash, Experts } from 'pages'; 

import styled, { css } from 'styled-components';

const Box = styled.div`
  position: fixed;
  width: 1146px;
  height: 100%;
  background: #f9f9f9;
  left: 50%;
  transform: translateX(-50%);
`;


const Concierge = ({match}) => {
    return (
        <div>
             <Box>
                {/* <h2>concierge List</h2> 
                    <StyledButton big>버튼</StyledButton>
                    <StyledButton small>버튼</StyledButton>
                <ul>
                    <li><Link to={`${match.url}/spaces1`}>공간 대분류</Link></li>
                    <li><Link to={`${match.url}/spaces2`}>공간 중분류</Link></li>
                    <li><Link to={`${match.url}/spaces3`}>공간 소분류</Link></li>
                    <li><Link to={`${match.url}/measure`}>면적</Link></li>
                    <li><Link to={`${match.url}/budget`}>금액범위</Link></li>
                    <li><Link to={`${match.url}/styles`}>스타일</Link></li>
                    <li><Link to={`${match.url}/priority`}>우선순위</Link></li>
                    <li><Link to={`${match.url}/splash`}>로딩</Link></li>
                    <li><Link to={`${match.url}/experts`}>결과</Link></li>
                </ul> */}
                <Route exact path={match.url} component={Spaces1}/>
                <Route path={`${match.url}/spaces1`} component={Spaces1}/>
                <Route path={`${match.url}/spaces2`} component={Spaces2}/>
                <Route path={`${match.url}/spaces3`} component={Spaces3}/>
                <Route path={`${match.url}/measure`} component={Measure}/>
                <Route path={`${match.url}/budget`} component={Budget}/>
                <Route path={`${match.url}/styles`} component={Styles}/>
                <Route path={`${match.url}/priority`} component={Priority}/>
                <Route path={`${match.url}/splash`} component={Splash}/>
                <Route path={`${match.url}/experts`} component={Experts}/>
           </Box>
        </div>
    );
};

export default Concierge;