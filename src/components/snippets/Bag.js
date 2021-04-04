import React from 'react'
import meh from '../../assets/images/meh.svg'



const Bag = () => {
    return (
        <div className="mid-padding bag">
            <div className="heading">
                <h5>Bag &nbsp;&nbsp;<span className="badge badge-md badge-primary">0</span></h5>
            </div>

            <div className="bag-item mt-5 text-center">
                <img src={meh} className="mb-3" width="90" alt="Meh" />
                <h6><b>It's empty in here</b></h6>
                <small>Start shoppng to add items to your bag</small>
            </div>
        </div>
    )
}

export default Bag