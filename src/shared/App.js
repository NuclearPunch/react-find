import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Concierge, Consulting, SignIn, SignUp, ConsultingResult, NoMatch } from 'pages';


class App extends Component {
    render() {
        return (
            <div>            
                <Switch>         
                    <Route exact path="/" component={Main}/>
                    <Route path="/concierge" component={Concierge}/>  
                    <Route exact path="/consulting" component={Consulting}/>
                    <Route path="/user/signin" component={SignIn}/>
                    <Route path="/user/signup" component={SignUp}/>
                    <Route path="/consulting/result" component={ConsultingResult}/>
                    <Route componenct={NoMatch}/>
                </Switch>
              
            </div> 
        );
    }
}

export default App;