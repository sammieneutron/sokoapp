import React, { useContext } from 'react'
import meh from '../../assets/images/meh.svg'
import { AppContext } from '../../services/AppContext'
import { formatNumber, calculateDiscount } from '../../helpers/functions'
import { Row, Col } from 'react-bootstrap'
import ProductCounter from './ProductCounter'




const BagSnip = () => {
    const { dispatch, bag, itemsInBag } = useContext(AppContext);

    const subTotalPrice = bag.reduce((subtotal, item) => {
		return (subtotal += calculateDiscount(item.price, item.discount));
    }, 0);

    const totalPrice = bag.reduce((subtotal, item) => {
		return (subtotal += item.price);
    }, 0);
    
    const discountedPrice = () => {
        return totalPrice - subTotalPrice;
    }

    const clearBag = () => {

        dispatch({
            type: 'CLEAR_BAG',
            payload: bag,
        })
    }

    return (
        <div className="mid-padding bag">
            <div className="heading">
                <h5>Bag &nbsp;&nbsp;<span className="badge badge-md badge-primary">{itemsInBag}</span> 
                    <span>{ itemsInBag ? <span className="pull-right" style={{cursor: "pointer", textDecoration: "underline"}} onClick={clearBag}><small>Clear Bag</small></span> : "" }</span>
                </h5>
                
            </div>

            {
                !bag.length ? 
                    <div className="bag-item mt-5 text-center">
                        <img src={meh} className="mb-3" width="90" alt="Meh" />
                        <h6><b>It's empty in here</b></h6>
                        <small>Start shoppng to add items to your bag</small>
                    </div>
                :   

                    bag.map((item) => {
                        
                        return (
                            
                            <div>                                
                                <div className="bag-items">
                                    <p className="product-name">{item.name}</p>
                                    <span className="per-piece">Per piece</span>
                                    <Row className="center">
                                        <Col>
                                            <p className="product-price2">UGX {formatNumber(calculateDiscount(item.price, item.discount))}
                                            </p>
                                            <p className="product-price">{formatNumber(item.discount ? "UGX " + item.price : "")}</p>
                                        </Col>
                                        <Col className="pull-right">
                                            <ProductCounter className="pull-right"/>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        );
                        
                    })

            }

            { totalPrice ? 
                <div>
                    <hr/>
                    <div className="subtotal">
                        <span>Subtotal <span className="pull-right">UGX &nbsp;{formatNumber(subTotalPrice)}</span>
                        </span>
                        <p>Delivery <span className="pull-right">&nbsp;<span style={{color: "green", fontWeight: "600"}}>Free</span></span>
                        </p>
                    </div>
                    <div className="total">
                        <p>Total <span className="pull-right">UGX &nbsp;{formatNumber(subTotalPrice)}</span>
                        </p>
                        <span><small>Inclusive of all taxes</small></span>
                    </div>
                    <div className="mt-3">
                        <small style={{color: "green", fontWeight: "600"}}>You are about to save UGX {formatNumber(discountedPrice())} on this order</small>
                    </div>
                </div>
                : ""
            }
            
            
        </div>
    )
}

export default BagSnip