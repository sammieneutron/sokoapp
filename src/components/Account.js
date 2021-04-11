import React from 'react'
import DefaultLayout from '../layouts/default'
import {Link} from 'react-router-dom'
import {Button, Row, Col} from 'react-bootstrap'
import {ChevronLeft} from 'react-feather'
import AccountSidebar from './snippets/AccountSidebar'


const Account = ({children}) => {
    return (
        <DefaultLayout>
            <div className="def-padding2">
                <div className="breadcrumb-div">
                    <Row>
                        <Col>
                            <span><Link to="/" className="breadcrumb"><ChevronLeft />&nbsp;&nbsp;+91 345 675 6549</Link></span>
                        </Col>
                        <Col>
                            <span className="pull-right"><Button variant="outline-secondary">Logout</Button></span>
                        </Col>
                    </Row>
                </div>

                <div className="account">
                    <div>   
                        <Row>
                            <Col md={3} className="border-right">
                                <AccountSidebar/>
                            </Col>
                            <Col md={9}>
                                <div>{children}</div>
                            </Col>  
                        </Row>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Account