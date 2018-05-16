import React, { Component } from 'react';

import ActionCommercialIcon from './../../Resources/images/Dev_Test_Assets/action-commercial-icon.png'

class ExtraLinks extends Component {

    render() {

        const { layout } = this.props;
        if (layout === "mobile") {
            return (
                <div className="flex flex-row padding-2 background-lightblue flex-justify-center flex-align-center">
                    <a href="/" className="margin-h-1">
                        <p className="hover text-white text-smaller">Dealers and Distributors</p>
                    </a>
                    <div className="verticalLine"></div>
                    <a href="/" className="hover margin-h-1">
                        <div className="flex flex-justify-center">
                            <p className="text-white text-smaller">Commercial Service</p>
                            <img src={ActionCommercialIcon} alt="Commercial Service" className="icon-small padding-h-1" />
                        </div>
                    </a>
                </div>
            );
        } else if (layout === "tablet") {
            return (
                <div className="flex flex-row padding-1andhalf background-blue flex-justify-end flex-align-center">
                    <a href="/" className="hover margin-h-2">
                        <p className="text-white text-smaller text-thin">Dealers and Distributors</p>
                    </a>
                    <a href="/" className="hover margin-h-2">
                        <div className="flex flex-justify-center">
                            <p className="text-white text-smaller text-thin">Commercial Service</p>
                            <img src={ActionCommercialIcon} alt="Commercial Service" className="icon-small padding-h-1" />
                        </div>
                    </a>
                </div>
            )
        } else if (layout === "desktop") {
            return (
                <div className="flex flex-row padding-1andhalf background-blue flex-justify-end flex-align-center">
                    <a href="/" className="hover margin-h-2">
                        <p className="text-white text-smaller text-thin">Dealers and Distributors</p>
                    </a>
                    <a href="/" className="hover margin-h-2">
                        <div className="flex flex-justify-center">
                            <p className="text-white text-smaller text-thin">Commercial Service</p>
                            <img src={ActionCommercialIcon} alt="Commercial Service" className="icon-small padding-h-1" />
                        </div>
                    </a>
                </div>
            )
        }
    };
}

export default ExtraLinks;
