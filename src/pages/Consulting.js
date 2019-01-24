import React from 'react';
import { Route } from 'react-router-dom';
import { Timetable, Information, ApplicationForm } from 'pages'; 
import styled from 'styled-components';

const Box = styled.div`
    position: relative;
    max-width: 1146px;
    height: auto;
    overflow:auto;
    padding-bottom: 30px;
    background: #f9f9f9;
    left: 50%;
    transform: translateX(-50%);
`;

const Consulting = ({match}) => {
    return (
        <div>
            <Box>
                <Route exact path={match.url} component={Timetable}/>
                <Route path={`${match.url}/timetable`} component={Timetable}/>
                <Route path={`${match.url}/information`} component={Information}/>
                <Route path={`${match.url}/applicationForm`} component={ApplicationForm}/>
            </Box>
         
        
        </div>
    );
};

export default Consulting;