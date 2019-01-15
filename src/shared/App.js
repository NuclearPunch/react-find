import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main, Concierge } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
               <Route exact path="/" component={Main}/>
               <Route path="/concierge" component={Concierge}/>
            </div>
        );
    }
}

export default App;