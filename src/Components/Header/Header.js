import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <nav id="mainNav">
                    <img src={require('./../Resources/images/Dev_Test_Assets/menu-icon-mobile.png')} alt="" id="menu-icon" />
                    <ul>
                        <h4>MENU</h4>
                        <p>X</p>
                        <li>
                            <a href="#">Pool & Spas</a>
                            <img src={require('./../Resources/images/Dev_Test_Assets/next-arrow.png')} alt=""/>
                        </li>
                        <li>
                            <a href="#">Supplies</a>
                            <img src={require('./../Resources/images/Dev_Test_Assets/next-arrow.png')} alt=""/>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                            <img src={require('./../Resources/images/Dev_Test_Assets/next-arrow.png')} alt=""/>
                        </li>
                        <li>
                            <a href="#">Services</a>
                            <img src={require('./../Resources/images/Dev_Test_Assets/next-arrow.png')} alt=""/>
                        </li>
                    </ul>
                </nav>
                {/* Header will contain:
                Nav
                Pool Image */}
            </header>
        );
    }
}

export default Header;
