import React from 'react'
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

const ProductDetails = () => {

    const location = useLocation();
    console.log(location.state);

    const product = { 
        id: 1, 
        name: "Kid's 2pk Cloth Face masks", 
        price: 185000, 
        discount: 20, 
        info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." 
    };

    return (
        <DefaultLayout>
            <div className="def-padding2">
                <Breadcrumb/>
                <Row className="">
                    <Col md={4} xs={12}>
                        <img src={facemask} className="img-fluid product-image2" alt={product.name} />
                    </Col>
                    <Col sm={8} xs={12}>
                        <div className="m-top-3">
                            <p className="product-name">{product.name}</p>
                            <p className="product-info">{product.info}</p>
                            <p className="product-price2">UGX {formatNumber(calculateDiscount(product.price, product.discount))} <span className="ml-5 badge badge-danger badge-sm">-{product.discount}%</span></p>
                            <p className="product-price">{formatNumber(product.discount ? "UGX " + product.price : "")}</p>

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