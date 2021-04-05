import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Row, Col } from 'react-bootstrap'

import storelogo from '../../assets/images/store-logo.svg'
import {  ShoppingCart, User } from 'react-feather'

const Topnav = () => {
    return (
        <div>
            <div className="top-nav">
                <p className="align-middle">Store made with <span className="">Soko</span></p>
            </div>
            <Navbar collapseOnSelect expand="lg" className="middle-nav">
                <Navbar.Brand>                    
                    <Row>
                        <Col >
                            <Link to="/">
                                <img src={storelogo} className="" width="70" alt="logo" />
                            </Link>
                        </Col>
                        <Col className="d-none d-md-block">
                            <span className="logo-text">Target </span><br/><small>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</small>
                        </Col>
                    </Row>
                </Navbar.Brand>
                
                <div className="ml-auto nav-texts">
                    <Link to="/bag">
                        <ShoppingCart size="20"/>
                        <span className="ml-2">Bag</span>
                        <span class="ml-2 badge badge-pill badge-danger">0</span>
                    </Link>
                    <Link to="/account"><User size="20"/><span className="ml-2">Account</span></Link>
                </div>
            </Navbar>
        </div>
    )
}

export default Topnav