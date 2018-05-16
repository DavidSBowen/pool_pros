import React, { Component } from 'react';

import FooterMobile from './FooterMobile';
import FooterTablet from './FooterTablet';
import FooterDesktop from './FooterDesktop';

class Footer extends Component {
    render() {

        const { layout } = this.props;

        if (layout === "mobile") {
            return (
                <FooterMobile layout={layout} />
            );
        } else if (layout === "tablet") {
            return (
                <FooterTablet />
            );
        } else if (layout === "desktop") {
            return (
                <FooterDesktop />
            );
        };
    };
};

export default Footer;
