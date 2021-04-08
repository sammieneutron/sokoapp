import React from 'react'

import '../../assets/css/style.css';
// import '../../assets/css/media-queries.css';

import Topnav from './Topnav'

const DefaultLayout = ( {children} ) => {
    return (
        <div>
            <Topnav/>
                <div>{children}</div>
        </div>
    )
}

export default DefaultLayout