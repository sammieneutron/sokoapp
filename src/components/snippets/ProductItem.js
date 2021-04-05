import React from "react";
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import facemask from '../../assets/images/facemask.png'
import { Plus } from 'react-feather'
import {formatNumber, calculateDiscount} from '../../helpers/functions'

const ProductItem = (props) => {
    return (
        <li className="product-item">
            <Link to={{ pathname: `/product-details/${props.id}`, 
                        state: { 
                            id: props.id,
                            name: props.name,
                            price: props.price,
                            discount: props.discount,
                            info: props.info,
                        }
                    }} >
                <Row className="hover">
                    <Col md={3} xs={3}>
                        <img src={facemask} className="product-image" alt={props.name} />
                    </Col>
                    <Col sm={9} xs={9}>
                        <div className="m-top-3">
                            <p className="product-name">{props.name}</p>
                            <p className="product-discounted-price">UGX {formatNumber(calculateDiscount(props.price, props.discount))}</p>
                            <p className="product-price">{formatNumber(props.discount ? "UGX " + props.price : "")}</p>
                        </div>
                        <Button className="add-to-bag-btn pull-right" size="sm" variant="outline-primary"><Plus size="20" /> Add</Button>
                    </Col>
                </Row>
            </Link>

        </li>
    )
}

export default ProductItem