import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Timetable, Information, ApplicationForm } from 'pages'; 


const Consulting = ({match}) => {
    return (
        <div>
           {
               /* 
                    <h2>consulting List</h2> 
                <ul>
                        <li><Link to={`${match.url}/timetable`}>시간표</Link></li>
                        <li><Link to={`${match.url}/information`}>추가정보입력</Link></li>
                        <li><Link to={`${match.url}/applicationForm`}>신청내역</Link></li>
                </ul>
               */
           }
           
           <Route exact path={match.url} component={Timetable}/>
           <Route path={`${match.url}/timetable`} component={Timetable}/>
           <Route path={`${match.url}/information`} component={Information}/>
           <Route path={`${match.url}/applicationForm`} component={ApplicationForm}/>
        
        </div>
    );
};

export default Consulting;