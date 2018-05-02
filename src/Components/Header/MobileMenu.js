import React, { Component } from 'react';

import Arrow from './../../Resources/images/Dev_Test_Assets/next-arrow.png';

class MobileMenu extends Component {

    render() {
        const { handleClick_mobileMenu } = this.props;

        return (
            <nav className="modal border-top-teal border-bottom-teal">
                <div className="flex">
                    <p className="text-center --modal-title text-bold text-uppercase text-lightblue">Menu</p>
                    <p 
                        className="pointer button-close text-teal text-bold"
                        onClick={handleClick_mobileMenu}>X</p>
                </div>
                <ul>
                    <a className="flex flex-space-between --modal-item text-grey hover" href="/">
                        <li className="pointer">Pools & Spas</li>
                        <img src={Arrow} alt="" />
                    </a>
                    <a className="flex flex-space-between --modal-item text-grey hover" href="/">
                        <li className="pointer">Supplies</li>
                        <img src={Arrow} alt="" />
                    </a>
                    <a className="flex flex-space-between --modal-item text-grey hover" href="/">
                        <li className="pointer">Resources</li>
                        <img src={Arrow} alt="" />
                    </a>
                    <a className="flex flex-space-between --modal-item text-grey hover" href="/">
                        <li className="pointer">Services</li>
                        <img src={Arrow} alt="" />
                    </a>
                </ul>
            </nav>
        );
    }
}

export default MobileMenu;
