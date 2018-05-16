import React, { Component } from 'react'

import Logo from './Logo';
import SocialLinks from './SocialLinks';
import ExtraLinks from './../MovingComponents/ExtraLinks';
import Copywrite from './Copywrite';

class FooterMobile extends Component {
    render() {

        const { layout } = this.props;

        return (
            <div>
                <div className="background-blue flex flex-col padding-3">
                    <Logo />
                    <SocialLinks />
                </div>
                <ExtraLinks layout={layout} />
                <div className="background-lightblue">
                    <div className="horizontalLine-white margin-h-3"></div>
                </div>
                <Copywrite />
            </div>
        )
    }
}

export default FooterMobile;