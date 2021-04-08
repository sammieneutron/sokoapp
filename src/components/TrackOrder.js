import React from 'react'
import DefaultLayout from '../layouts/default'
// import Breadcrumb from './snippets/Breadcrumb'
import {Link} from 'react-router-dom'
import {ChevronLeft} from 'react-feather'
// import { AppContext } from '../services/AppContext'
import {Row, Col} from 'react-bootstrap'
import facemask from '../assets/images/facemask.png'
import storelogo from '../assets/images/store-logo.svg'
import { CheckCircle } from 'react-feather'


const TrackOrder = () => {

    return (
        <DefaultLayout>
            <div className="def-padding4">
                <div className="breadcrumb-div">
                    <Link to="/" className="breadcrumb"><ChevronLeft />&nbsp;&nbsp;Order #4334543</Link>
                </div>

                <div className="order-details">
                    <div>   
                        <Row className="border-bottom mb-3">
                            <div className="mr-3">
                                <img src={storelogo} className="" width="50" alt="logo" />
                            </div>
                            <div>
                                <h6><b>Target</b></h6>
                                <p>25/02/2021, 02:45 PM | 3 Items | UGX 1,200</p>
                            </div>
                        </Row>
                        <Row className="border-bottom mb-3">
                            <div className="mr-3">
                                <CheckCircle color="green" size="40" />
                            </div>
                            <div>
                                <h6><b>Order Confirmed</b></h6>
                                <p>25/02/2021, 02:45 PM</p>
                            </div>
                        </Row>
                        <Row className="border-bottom mb-3">
                            <div className="mr-3">
                                <CheckCircle color="green" size="40" />
                            </div>
                            <div>
                                <h6><b>Shipped</b></h6>
                                <p>25/02/2021, 02:45 PM</p>
                            </div>
                        </Row>
                        <Row className="border-bottom mb-3">
                            <div className="mr-3">
                                <CheckCircle color="#ccc" size="40" />
                            </div>
                            <div>
                                <h6><b>Delivered</b></h6>
                                <p>The delivery partner is on his way to deliver your order</p>
                            </div>
                        </Row>
                        <small>3 items</small>
                        <Row className="mb-3">
                            <Col md={2} xs={3}>
                                <img src={facemask} className="product-image" width="100" alt="" />
                            </Col>  
                            <Col md={10}>                           
                                <div className="bag-items">
                                    <p className="product-name">Product Name</p>
                                    <span className="per-piece">Size: <span>&nbsp;&nbsp;<b>Medium</b></span></span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="per-piece">Color: &nbsp;&nbsp;&nbsp;<span className="product-color"></span></span>
                                    <Row className="center">
                                        <Col>
                                            <span className="badge badge-md badge-secondary mt-4">X2</span>
                                        </Col>
                                        <Col className="pull-right">
                                            <p className="product-price2 pull-right"><b>UGX 1,200</b></p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2} xs={3}>
                                <img src={facemask} className="product-image" width="100" alt="" />
                            </Col>  
                            <Col md={10}>                           
                                <div className="bag-items">
                                    <p className="product-name">Product Name</p>
                                    <span className="per-piece">Size: <span>&nbsp;&nbsp;<b>Medium</b></span></span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="per-piece">Color: &nbsp;&nbsp;&nbsp;<span className="product-color"></span></span>
                                    <Row className="center">
                                        <Col>
                                            <span className="badge badge-md badge-secondary mt-4">X2</span>
                                        </Col>
                                        <Col className="pull-right">
                                            <p className="product-price2 pull-right"><b>UGX 1,200</b></p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <div className="mb-3">
                            <hr/>
                            <div className="subtotal">
                                <span>Subtotal <span className="pull-right">UGX &nbsp;34,000</span>
                                </span>
                                <p>Delivery <span className="pull-right">&nbsp;<span style={{color: "green", fontWeight: "600"}}>Free</span></span>
                                </p>
                            </div>
                            <div className="total">
                                <p>Total <span className="pull-right">UGX &nbsp;22,000</span>
                                </p>
                                <span><small>Inclusive of all taxes</small></span>
                            </div>
                            <div className="mt-3">
                                <small style={{color: "green", fontWeight: "600"}}>You are about to save UGX 7,000 on this order</small>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <div className="mt-5">
                                <p style={{fontSize: "13px", color: "#ccc", fontWeight: "600"}}>YOUR DELIVERY DETAILS</p>
                            </div>
                            <div className="delivery-details mt-3">
                                <h5>Sarah Connor</h5>
                                <p className="address">Cash on delivery</p>
                                <p className="address">Quench Ville, Plot 12, Nkrumah Rd,<br/> Kampala, Uganda</p>
                                <p className="phone">+245 654 789 7958</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default TrackOrder