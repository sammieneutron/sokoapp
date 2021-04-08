import React, { useContext, useState } from 'react'

import { Plus, Minus } from 'react-feather'
import { AppContext } from '../../services/AppContext';


const ProductCounter = (props) => {

    const [productCount, setProductCount] = useState(1);
    const { dispatch } = useContext(AppContext);

    const increment = (count) => {
        if(count > 0) {
            count = count += 1;

            const bag = {
                id: props.id,
                name: props.name,
                price: props.price,
                discount: props.discount,
                info: props.info,
            }

            dispatch({
                type: 'INCREASE_ITEM',
                payload: bag,
            })

            return setProductCount(count);
        }
    }

    const decrement = (count) => {
        if(count > 0) {
            count = count -= 1;

            const bag = {
                id: props.id,
                name: props.name,
                price: props.price,
                discount: props.discount,
                info: props.info,
            }

            dispatch({
                type: 'DECREASE_ITEM',
                payload: bag,
            })
            return setProductCount(count);
        }
    }

    return (
        <div className="form-group mt-4">
            <div className="input-group counter-div">
                <div className="input-group-btn minus">
                    <button id="down" className="btn btn-sm btn-default" onClick={() => decrement(productCount)}>
                        <Minus size="15" />
                    </button>
                </div>
                <input type="text" id="myNumber" class="form-control-sm no-border" style={{width: "30px"}} value={productCount} onChange={e => setProductCount(e.target.value)} />
                <div className="input-group-btn plus">
                    <button id="up" className="btn btn-sm btn-default"  onClick={() => increment(productCount)}>
                        <Plus size="15" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCounter