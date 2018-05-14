import React, { Component } from 'react';

import PoolLogo from './../../Resources/images/Dev_Test_Assets/pool-pros-logo-footer.png';

class Logo extends Component {
    render() {
        return (
            <div>
                <img src={PoolLogo} alt="Pool Logo" className="img-mobile padding-3"></img>
            </div>
        );
    }
}

export default Logo;
