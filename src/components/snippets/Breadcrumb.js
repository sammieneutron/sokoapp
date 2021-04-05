import React from 'react'
import {Link} from 'react-router-dom'
import { ChevronLeft } from 'react-feather'

const Breadcrumb = () => {
    return (
        <div className="breadcrumb-div">
            <Link to="/" className="breadcrumb"><ChevronLeft />&nbsp;&nbsp;Furniture</Link>
        </div>
    )
}

export default Breadcrumb
