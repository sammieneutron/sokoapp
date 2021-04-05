import React from 'react'
import success from '../assets/images/success.svg'
import DefaultLayout from '../layouts/default'
import {Link} from 'react-router-dom'
import {Button, Row, Col} from 'react-bootstrap'



const OrderSuccess = () => {
    return (
        <DefaultLayout>
            <div className="mid-padding bag">
                <div className="bag-item mt-5 text-center">
                    <img src={success} className="mb-5" width="130" alt="Meh" />
                    <h6><b>Thank you!</b></h6>
                    <h6><b>Your order has been placed successfully!</b></h6>
                    <small>You will receive a confirmation message as soon as the order is accepted</small>
                    <div className="mt-3">
                        <small className="mt-2">Order Number: John - 271e</small>
                    </div>
                </div>
                
                <div className="text-center mt-5">

                    <Row className="text-center">
                        {/* <div style={{margin: "0 auto"}}> */}
                            <Col className="mr-3">
                                <Button className="add-to-bag"><Link to="/track-order">Track Order</Link></Button>
                            </Col>
                            <Col>
                                <Button className="buy-now"><Link to="/">Continue Shopping</Link></Button>
                            </Col>
                        {/* </div> */}
                        
                    </Row>                    
                </div>
            </div>
        </DefaultLayout>

    )
}

export default OrderSuccess