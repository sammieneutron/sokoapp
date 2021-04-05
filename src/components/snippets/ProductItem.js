import React from "react";
import { Row, Col, Button } from 'react-bootstrap'
import facemask from '../../assets/images/facemask.png'
import { Plus } from 'react-feather'
import {formatNumber} from '../../helpers/functions'
const ProductItem = (props) => {

    const calculateDiscount = (price, discount) => {
        // props.discount ? (props.price / 100) * props.discount : props.price

        if (discount > 0) {
            discount = (price / 100) * discount;
            return price - discount;
        } else {
            return price
        }
    }

    return (
        <li className="product-item">
            <Row>
                <Col md={3} xs={3}>
                    <img src={facemask} className="product-image" alt={props.name} />
                </Col>
                <Col sm={9} xs={9}>
                    <p className="product-name">{props.name}</p>
                    <p className="product-discounted-price">UGX {formatNumber(calculateDiscount(props.price, props.discount))}</p>
                    <p className="product-price">{formatNumber(props.discount ? "UGX " + props.price : "")}</p>
                    <Button className="add-to-bag-btn pull-right" size="sm" variant="outline-primary"><Plus size="20" /> Add</Button>
                </Col>
            </Row>
        </li>
    )
}

export default ProductItem