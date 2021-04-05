import React from 'react'
// import { Link, Route } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Icon, InlineIcon } from '@iconify/react';
import whatsappIcon from '@iconify/icons-mdi/whatsapp';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <p>STORE DETAILS</p>
                <h5>Target</h5>
                <small>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</small>
                <div className="mt-4">
                    <Button variant="success">
                        <Icon icon={whatsappIcon} style={{fontSize: '22px'}} />
                        &nbsp;Chat with us
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Footer