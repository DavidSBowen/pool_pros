import React, { Component } from 'react';

import MobileMenu from './MobileMenu';

import Logo from './../../Resources/images/Dev_Test_Assets/pool-pros-logo.png';
import Location from './../../Resources/images/Dev_Test_Assets/location-icon.png';
import MenuIconMobile from './../../Resources/images/Dev_Test_Assets/menu-icon-mobile.png';
import WaterImage from './../../Resources/images/Dev_Test_Assets/water-image.png';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileHidden: true
        };
    }

    componentDidUpdate() {
        // console.log('state mobileHidden?:', this.state.mobileHidden);
    }

    handleClick_mobileMenu = () => {
        this.setState(
            this.state.mobileHidden ? { mobileHidden: false } : { mobileHidden: true }
        );
    };

    render() {
        return (
            <div>
                <header>
                    <div className="flex flex-space-between">
                        <img className="img-mobile" src={Logo} alt="" />
                        <div
                            className="flex flex-row flex-space-between flex-nowrap border-radius-1 border-lightblue padding-1 margin-1">
                            <img className="icon-small padding-1" src={Location} alt="" />
                            <p className="text-blue text-uppercase text-lightblue text-bold text-small padding-1">Find A Pro</p>
                        </div>
                        <img
                            className="pointer img-mobile-menu"
                            src={MenuIconMobile}
                            alt=""
                            onClick={this.handleClick_mobileMenu} />
                        {this.state.mobileHidden ? false : <MobileMenu handleClick_mobileMenu={this.handleClick_mobileMenu} />}
                    </div>
                </header>
                <img className="margin-1-v img-under_header" src={WaterImage} alt="" />
            </div>
        );
    }
}

export default Header;
