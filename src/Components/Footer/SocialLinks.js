import React, { Component } from 'react';

import FBLogo from './../../Resources/images/Dev_Test_Assets/facebook-icon.png';
import TWLogo from './../../Resources/images/Dev_Test_Assets/twitter-icon.png';
import YTLogo from './../../Resources/images/Dev_Test_Assets/youtube-icon.png';

class SocialLinks extends Component {
    render() {
        return (
            <div className="flex flex-row flex-space-between flex-nowrap">
                <p className="text-white text-bold margin-h-3">CONNECT WITH US</p>
                <div className="flex flex-row">
                    <a href="/" className="margin-h-1">
                        <img src={TWLogo} alt="Twitter" className="hover icon-med" />
                    </a>
                    <a href="/" className="margin-h-1">
                        <img src={FBLogo} alt="Facebook" className="hover icon-extrasmall" />
                    </a>
                    <a href="/" className="margin-h-1">
                        <img src={YTLogo} alt="YouTube" className="hover icon-small" />
                    </a>
                </div>
            </div>
        );
    }
}

export default SocialLinks;
