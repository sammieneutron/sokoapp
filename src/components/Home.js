import React from 'react'
import DefaultLayout from '../layouts/default'
import Features from './snippets/Features'

import Bag from './snippets/BagSnip'
import SearchProduct from './snippets/SearchProduct'
import ProductList from './snippets/ProductList'
import Categories from './snippets/Categories'
import Footer from '../layouts/default/Footer'


import { Row, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <DefaultLayout>
            <div>
                <Row>
                    <Col md={3} className="border-right">
                        <Categories/>
                    </Col>
                    <Col md={6}>
                        <SearchProduct/>
                        <ProductList/>
                    </Col>
                    <Col md={3} className="border-left">
                        <Bag/>
                    </Col>
                </Row>
                <Features />
            </div>
            <Footer/>
        </DefaultLayout>
    )
}

export default Home