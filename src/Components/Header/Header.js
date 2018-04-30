import React, { Component } from 'react';

import './../../STyles/CSS/Header.css';

class Header extends Component {

    componentDidMount() {
        const menuIcon = document.getElementById('menu-icon');
        const ul = document.getElementById('menu-list');
        const button = document.getElementById('exit-menu-list');

        menuIcon.addEventListener('click', (event) => {
            ul.style.display = 'block';
        });
        button.addEventListener('click', (event) => {
            ul.style.display = 'none';
        });
    }

    render() {

        return (

            <header class="flexbox flexbox-row">
                {/* use picture element */}
                <img id="header-logo"
                    src={require('./../Resources/images/Dev_Test_Assets/pool-pros-logo.png')}
                    alt="" />

                <div id="flexbox flexbox-row">
                    <img
                        src={require('./../Resources/images/Dev_Test_Assets/location-icon.png')}
                        alt="" />
                    <p>Find a Pool Pro</p>
                </div>

                <nav id="main-nav">
                    <img src={require('./../Resources/images/Dev_Test_Assets/menu-icon-mobile.png')}
                        alt="" id="menu-icon" />
                    <ul id="menu-list">
                        <div className="flexbox flexbox-row">
                            <h4>MENU</h4>
                            <a id="exit-menu-list">X</a>
                        </div>
                        <div className="flexbox flexbox-col">
                            <a href="#">
                                <li>
                                    <p>Pool & Spas</p>
                                    <img src={require('./../Resources/images/Dev_Test_Assets/next-arrow.png')}
                                        alt="" />
                                </li>
                            </a>
                            <a href="#">
                                <li>
                                    <p>Supplies</p>
                                    <img src={require('./../Resources/images/Dev_Test_Assets/next-arrow.png')}
                                        alt="" />
                                </li>
                            </a>
                            <a href="#">
                                <li>
                                    <p>Resources</p>
                                    <img src={require('./../Resources/images/Dev_Test_Assets/next-arrow.png')}
                                        alt="" />
                                </li>
                            </a>
                            <a href="#">
                                <li>
                                    <p>Services</p>
                                    <img src={require('./../Resources/images/Dev_Test_Assets/next-arrow.png')}
                                        alt="" />
                                </li>
                            </a>
                        </div>
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
