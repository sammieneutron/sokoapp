import React, {useState, useContext} from 'react'
import DefaultLayout from '../layouts/default'
import BagSnip from './snippets/BagSnip'
import { Col, Row, Form, Button, FormControl, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap'
import AddAddress from './snippets/AddAddress'
import VerifyNumber from './snippets/VerifyNumber'
import {Link} from 'react-router-dom'

import {AppContext} from '../services/AppContext'

const Bag = () => {
    const [modalShow, setModalShow] = useState(false);
    const {bag} = useContext(AppContext);

    return (
        <DefaultLayout>
            <VerifyNumber
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            { !bag.length ? 
            <div>
                <BagSnip/> 
                <div className="text-center">
                    <Button className="buy-now"><Link to="/">Shop Now</Link></Button>
                </div>
            </div> : 
            
            <Row>
                <Col md={8} className="def-padding2">
                    <div class="experience">
                        <div class="item Account active">
                            <h5 class="">Account</h5>
                            <p>To place your order, login by entering your 10 digit mobile number</p>
                        </div>
                        <div>
                            <small>Mobile Number</small>
                            <Form inline>
                                <InputGroup className="mb-3">
                                    <DropdownButton
                                    as={InputGroup.Prepend}
                                    variant="outline-secondary"
                                    title="+234"
                                    id="input-group-dropdown-1"
                                    >
                                    <Dropdown.Item href="#">+256</Dropdown.Item>
                                    <Dropdown.Item href="#">+222</Dropdown.Item>
                                    <Dropdown.Item href="#">+343</Dropdown.Item>
                                    </DropdownButton>
                                    <FormControl aria-describedby="basic-addon1" style={{width: "70%"}} className="mr-sm-2" />
                                </InputGroup>
                                
                                <Button type="button" onClick={() => setModalShow(true)} className="login-btn mb-3">
                                    Login
                                </Button>
                            </Form>
                        </div>

                        <div class="item delivery mt-5">
                            <h5 class="">Delivery Address</h5>
                            <div>
                                <p>Select your delivery address from the existing one or add new one.</p>
                            </div>
                            
                        </div>
                        <AddAddress/>

                        <div class="item payment mt-5">
                            <h5 class="">Payment</h5>
                            <div>
                                <p>Select your payment method.</p>
                            </div>
                            <div>
                                <div className="mb-3">
                                    <Form.Check 
                                        type="radio"
                                        id="default-radio"
                                        label="Cash on delivery"
                                        className="order-radio"
                                    />
                                </div>
                                <div>
                                    <Button className="buy-now"><Link to="/order-success">Place Order</Link></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="def-padding3" style={{borderLeft: "1px solid #ccc"}}>
                    <BagSnip/>
                </Col>
            </Row>
            
            }
            
        </DefaultLayout>

    )
}

export default Bag