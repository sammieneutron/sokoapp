import React from 'react'
import Account from './Account'
import AddAddress from './snippets/AddAddress'
import {Button, Col, Row} from 'react-bootstrap'
import {Filter} from 'react-feather'

const Addresses = () => {
    return (
        <Account>
            <div className="breadcrumb-div p-3">
                <Row className="">
                    <Col>
                        <span className="breadcrumb">Showing all addresses</span>
                    </Col>
                </Row>
                <Row className="" style={{padding: "1rem"}}>
                    <AddAddress />
                </Row>
            </div>
        </Account>
    )
}

export default Addresses