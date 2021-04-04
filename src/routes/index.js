import React from 'react'
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';

import Home from '../components/Home'
import Bag from '../components/snippets/Bag'



const Routes = (props) => {
    return (
        <Router {...props}>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/bag" component={ Bag } />
            </Switch>
        </Router>
    )
}


export default Routes