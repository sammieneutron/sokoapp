import React from 'react'
import badge from '../../assets/images/badge.svg'
import truck from '../../assets/images/truck.svg'
import h24 from '../../assets/images/24.svg'

import { Row, Col } from 'react-bootstrap'

const Features = () => {
    return (
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
    )
}

export default Features