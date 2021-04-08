import React, {useContext} from 'react'
import { Row, Button } from 'react-bootstrap'
import { AppContext } from '../../services/AppContext'

const PurchaseButtons = (props) => {
    const { dispatch } = useContext(AppContext);

    const addTobag = () => {
        
        const bag = {
            id: props.id,
            name: props.name,
            price: props.price,
            discount: props.discount,
            info: props.info,
        }

        dispatch({
            type: 'ADD_TO_BAG',
            payload: bag,
        })

    }
    return (
        <div className="purchase-buttons">
            <Row>
                <div className="mr-3">
                    <Button className="add-to-bag" onClick={addTobag}>Add to Bag</Button>
                </div>
                <div>
                    <Button className="buy-now">Buy Now</Button>
                </div>
            </Row>
        </div>
    )
}

export default PurchaseButtons