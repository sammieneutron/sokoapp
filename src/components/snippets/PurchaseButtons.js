import React from 'react'
import { Row, Button } from 'react-bootstrap'


const PurchaseButtons = () => {
    return (
        <div className="purchase-buttons">
            <Row>
                <div className="mr-3">
                    <Button className="add-to-bag">Add to Bag</Button>
                </div>
                <div>
                    <Button className="buy-now">Buy Now</Button>
                </div>
            </Row>
        </div>
    )
}

export default PurchaseButtons