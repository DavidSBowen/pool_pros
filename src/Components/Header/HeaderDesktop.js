import React, { Component } from 'react';

import ExtraLinks from './../MovingComponents/ExtraLinks';

import Logo from './../../Resources/images/Dev_Test_Assets/pool-pros-logo.png';
import Location from './../../Resources/images/Dev_Test_Assets/location-icon.png';

class HeaderDesktop extends Component {

    handleClick_findAPro = () => {
        document.getElementById('filter').scrollIntoView();
    };

    render() {

        const { layout } = this.props;

        return (
            <div>
                <ExtraLinks layout={layout} />
                <header className="boxshadow padding-v-3 padding-h-10percent" id="banner">
                    <div className="flex flex-space-between">
                        <a href="/" className="">
                            <img className="hover img-desktop" src={Logo} alt="" />
                        </a>
                        <ul className="flex flex-row">
                            <a className="flex flex-space-between --modal-item text-blue hover margin-h-2 text-small text-bold" href="/">
                                <li className="pointer">Pools & Spas</li>
                            </a>
                            <a className="flex flex-space-between --modal-item text-blue hover margin-h-2 text-small text-bold" href="/">
                                <li className="pointer">Supplies</li>
                            </a>
                            <a className="flex flex-space-between --modal-item text-blue hover margin-h-2 text-small text-bold" href="/">
                                <li className="pointer">Resources</li>
                            </a>
                            <a className="flex flex-space-between --modal-item text-blue hover margin-h-2 text-small text-bold" href="/">
                                <li className="pointer">Services</li>
                            </a>
                            <div
                                onClick={this.handleClick_findAPro}
                                className="pointer hover flex flex-row flex-space-between flex-nowrap border-radius-1 border-lightblue border-width-tiny padding-1 margin-1 padding-v-1">
                                <img className="icon-small padding-1" src={Location} alt="" />
                                <p className="text-blue text-lightblue text-small padding-1">Find A Pool Pro</p>
                            </div>
                        </ul>
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

export default HeaderDesktop;
