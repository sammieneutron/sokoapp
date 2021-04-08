import React from 'react'
import {Button, Col, Row} from 'react-bootstrap'
import {Filter} from 'react-feather'
import storelogo from '../assets/images/store-logo.svg'
import Account from './Account'


const Orders = () => {
    return (
        <Account>
            <div className="breadcrumb-div p-3">
                <Row className="">
                    <Col>
                        <span className="breadcrumb">Showing all orders</span>
                    </Col>
                    <Col>
                        <span className="pull-right"><Button variant="outline-secondary"><Filter/> Filter</Button></span>
                    </Col>
                </Row>
                <Row className="" style={{padding: "1rem"}}>
                    <Col className="orders">
                        <div>
                            <img src={storelogo} className="" width="50" alt="logo" />
                            <span className="ml-2 store-name">Target</span>
                        </div>
                        <div className="order-detail">
                                <span><b>Order #345432</b> <span className="pull-right">UGX &nbsp;34,000</span>
                            </span>
                            <p>3 Items <span className="pull-right">&nbsp;<span>25/04/2010, 05:55 PM</span></span>
                            </p>
                        </div>
                        <span className="per-piece" style={{color: "orange"}}><span className="order-status-shipped"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shipped</span>
                    </Col>
                    <Col className="orders">
                        <div>
                            <img src={storelogo} className="" width="50" alt="logo" />
                            <span className="ml-2 store-name">Ahbi's Juke Store</span>
                        </div>
                        <div className="order-detail">
                                <span><b>Order #345432</b> <span className="pull-right">UGX &nbsp;34,000</span>
                            </span>
                            <p>3 Items <span className="pull-right">&nbsp;<span>25/04/2010, 05:55 PM</span></span>
                            </p>
                        </div>
                        <span className="per-piece" style={{color: "#2766CC"}}><span className="order-status-delivered"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delivered</span>
                    </Col>
                </Row>
            </div>
        </Account>
    )
}

export default Orders