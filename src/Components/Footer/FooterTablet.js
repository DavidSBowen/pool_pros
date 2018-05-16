import React, { Component } from 'react'

import Logo from './Logo';
import SocialLinks from './SocialLinks';
import Copywrite from './Copywrite';

class FooterTablet extends Component {
    render() {
        return (
            <div>
                <div className="background-blue flex flex-col padding-3">
                    <Logo />
                    <SocialLinks />
                </div>
                <Copywrite />
            </div>
        )
    }
}

export default FooterTablet