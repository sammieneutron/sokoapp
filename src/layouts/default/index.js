import React from 'react'

import '../../assets/css/style.css';
// import '../../assets/css/media-queries.css';

import Topnav from './Topnav'
import Footer from './Footer'

const DefaultLayout = ( {children} ) => {
    return (
        <div>
            <Topnav/>
                <div>{children}</div>
            <Footer/>
        </div>
    )
}

export default DefaultLayout