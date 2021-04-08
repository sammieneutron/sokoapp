import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import DefaultLayout from '../layouts/default'
import Features from './snippets/Features'
import facemask from '../assets/images/facemask.png'
import { Row, Col } from 'react-bootstrap'
import {formatNumber, calculateDiscount} from '../helpers/functions'
import ProductCounter from './snippets/ProductCounter'
import PurchaseButtons from './snippets/PurchaseButtons'
import RelatedProducts from './snippets/RelatedProducts'
import Breadcrumb from './snippets/Breadcrumb'
import { AppContext } from '../services/AppContext'

const ProductDetails = () => {

    const { products } = useContext(AppContext);

    const location = useLocation();
    const id = location.state.id - 1;

    return (
        <DefaultLayout>
            <div className="def-padding2">
                <Breadcrumb/>
                <Row className="">
                    <Col md={4} xs={12}>
                        <img src={facemask} className="img-fluid product-image2" alt={products[id].name} />
                    </Col>
                    <Col sm={8} xs={12}>
                        <div className="m-top-3">
                            <p className="product-name">{products[id].name}</p>
                            <p className="product-info">{products[id].info}</p>
                            <p className="product-price2">UGX {formatNumber(calculateDiscount(products[id].price, products[id].discount))} <span className="ml-5 badge badge-danger badge-sm">-{products[id].discount}%</span></p>
                            <p className="product-price">{formatNumber(products[id].discount ? "UGX " + products[id].price : "")}</p>

                            <ProductCounter />
                            <PurchaseButtons />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <RelatedProducts/>
                    </Col>
                </Row>
            </div>
            <Features />
        </DefaultLayout>
    )
}

export default ProductDetails