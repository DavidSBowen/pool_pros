import React, { Component } from 'react';

import Logo from './Logo';
import SocialLinks from './SocialLinks';
import ExtraLinks from './../MovingComponents/ExtraLinks';
import Copywrite from './Copywrite';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="background-blue flex flex-col padding-3">
                    <Logo />
                    <SocialLinks />
                </div>
                <ExtraLinks />
                <div className="background-lightblue">
                    <div className="horizontalLine-white margin-h-3"></div>
                </div>
                <Copywrite />
            </div>
        );
    }
}

export default Footer;
