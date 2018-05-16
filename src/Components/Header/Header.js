import React, { Component } from 'react';

import HeaderMobile from './HeaderMobile';
import HeaderTablet from './HeaderTablet';
import HeaderDesktop from './HeaderDesktop';

class Header extends Component {

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.layout !== this.props.layout;
    }

    render() {
        const { layout } = this.props;

        if (layout === 'mobile') {
            return <HeaderMobile />
        } else if (layout === 'tablet') {
            return <HeaderTablet layout={layout} />
        } else if (layout === 'desktop') {
            return <HeaderDesktop layout={layout} />
        }
    }
}

export default Header;
