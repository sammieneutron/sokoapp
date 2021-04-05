import React from 'react'
import DefaultLayout from '../layouts/default'

import badge from '../assets/images/badge.svg'
import truck from '../assets/images/truck.svg'
import h24 from '../assets/images/24.svg'

import Bag from './snippets/Bag'
import SearchProduct from './snippets/SearchProduct'
import ProductList from './snippets/ProductList'
import Categories from './snippets/Categories'

import { Row, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <DefaultLayout>
            <div>
                <Row>
                    <Col md={4} className="border-right">
                        <Categories/>
                    </Col>
                    <Col md={5}>
                        <SearchProduct/>
                        <ProductList/>
                    </Col>
                    <Col md={3} className="border-left">
                        <Bag/>
                    </Col>
                </Row>
                <div className="features text-center">
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Row>
                                <Col>
                                    <img src={truck} className="mb-3" width="40" alt="Fast Delivery" />
                                    <p>Fast Delivery</p>
                                </Col>
                                <Col>
                                    <img src={badge} className="mb-3" width="40" alt="Buyer Protection" />
                                    <p>Buyer Protection</p>
                                </Col>
                                <Col>
                                    <img src={h24} className="mb-3" width="40" alt="Customer Support" />
                                    <p>Customer Support</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Home