import React, { Component } from 'react';

import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

import './Main.css';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* Header will contain:
                Nav
                Pool Image */}
                <Body />
                {/* Body will contain:
                Filter
                Business listings */}
                <Footer />
                {/* Footer will contain:
                Logo
                Social Media Links
                Copyright
                Moving Links */}
            </div>
        );
    }
}

export default Main;
