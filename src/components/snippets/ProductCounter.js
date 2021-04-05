import React, { useState } from 'react'

import { Plus, Minus } from 'react-feather'


const ProductCounter = () => {

    const [productCount, setProductCount] = useState(1);

    const increment = (count) => {
        if(count > 0) {
            count = count += 1;
            return setProductCount(count);
        }
    }

    const decrement = (count) => {
        if(count > 0) {
            count = count -= 1;
            return setProductCount(count);
        }
    }

    // const handleChange = (e) => {
    //     console.log(e.target.value);
    // }

    return (
        <div class="form-group mt-4">
            <div className="input-group counter-div">
                <div class="input-group-btn minus">
                    <button id="down" class="btn btn-sm btn-default" onClick={() => decrement(productCount)}>
                        <Minus size="15" />
                    </button>
                </div>
                <input type="text" id="myNumber" class="form-control-sm no-border" style={{width: "30px"}} value={productCount} onChange={e => setProductCount(e.target.value)} />
                <div class="input-group-btn plus">
                    <button id="up" class="btn btn-sm btn-default"  onClick={() => increment(productCount)}>
                        <Plus size="15" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCounter