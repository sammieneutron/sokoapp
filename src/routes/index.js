import React from 'react'
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';

import Home from '../components/Home'
import ProductDetails from '../components/ProductDetails';
import Bag from '../components/Bag'
import OrderSuccess from '../components/OrderSuccess';
import TrackOrder from '../components/TrackOrder';
import Account from '../components/Account';
import Orders from '../components/Orders';
import Addresses from '../components/Addresses';



const Routes = (props) => {
    return (
        <Router {...props}>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/bag" component={ Bag } />
                <Route path="/order-success" component={ OrderSuccess } />
                <Route path="/track-order" component={ TrackOrder } />
                <Route path="/account" component={ Account } />
                <Route path="/my-orders" component={ Orders } />
                <Route path="/my-address" component={ Addresses } />
                <Route path="/product-details/:id" component={ ProductDetails } />
            </Switch>
        </Router>
    )
}


export default Routes