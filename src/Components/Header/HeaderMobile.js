import React, { Component } from 'react';

import MobileMenu from './MobileMenu';

import Logo from './../../Resources/images/Dev_Test_Assets/pool-pros-logo.png';
import Location from './../../Resources/images/Dev_Test_Assets/location-icon.png';
import MenuIconMobile from './../../Resources/images/Dev_Test_Assets/menu-icon-mobile.png';

class HeaderMobile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileHidden: true
        };
    }

    handleClick_findAPro = () => {
        document.getElementById('filter').scrollIntoView({
            behavior: "smooth"
        });
    };


    handleClick_mobileMenu = () => {
        this.setState(
            { mobileHidden: this.state.mobileHidden ? false : true }
        );
    };

    render() {
        return (
            <div>
                <header className="boxshadow" id="banner">
                    <div className="flex flex-space-between">
                        <a href="/">
                            <img className="hover img-mobile" src={Logo} alt="" />
                        </a>
                        <div
                            onClick={this.handleClick_findAPro}
                            className="pointer hover flex flex-row flex-space-between flex-nowrap border-radius-1 border-lightblue padding-1 margin-1">
                            <img className="icon-small padding-1" src={Location} alt="" />
                            <p className="text-blue text-uppercase text-lightblue text-bold text-small padding-1">Find A Pro</p>
                        </div>
                        <img
                            className="hover pointer img-mobile-menu"
                            src={MenuIconMobile}
                            alt=""
                            onClick={this.handleClick_mobileMenu} />
                        <MobileMenu hidden={this.state.mobileHidden} handleClick_mobileMenu={this.handleClick_mobileMenu} />
                    </div>
                </header>
                <div className="banner-container">
                    <div className="margin-v-1 banner" alt="" >
                    </div>
                </div>
            </div >
        );
    }
}

export default HeaderMobile;
