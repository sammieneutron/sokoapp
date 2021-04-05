import React from 'react'
import meh from '../assets/images/meh.svg'
import DefaultLayout from '../layouts/default'
import {Link} from 'react-router-dom'



const Bag = () => {
    return (
        <DefaultLayout>
            <div className="mid-padding bag">
                <div className="bag-item mt-5 text-center">
                    <img src={meh} className="mb-3" width="100" alt="Meh" />
                    <h6><b>It's empty in here</b></h6>
                    <small>Start shoppng to add items to your bag</small>
                </div>
                <div className="text-center mt-5">
                    <Link to="/" className="buy-now">Back to homepage</Link>
                </div>
            </div>
        </DefaultLayout>

    )
}

export default Bag