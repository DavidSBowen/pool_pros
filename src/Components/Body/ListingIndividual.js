import React, { Component } from 'react';

import InstallationIcon from './../../Resources/images/Dev_Test_Assets/star-installation-pro.png';
import CommercialIcon from './../../Resources/images/Dev_Test_Assets/users-commercial-pro.png';
import ResidentialIcon from './../../Resources/images/Dev_Test_Assets/home-residential-pro.png';
import ServiceIcon from './../../Resources/images/Dev_Test_Assets/gear-service-pro.png';

class ListingIndividual extends Component {

    determineCertification = () => {

        const { dealer } = this.props;

        return dealer.certifications.map((certification, index) => {

            let icon;

            switch (certification) {
                case "Installation Pro":
                    icon = InstallationIcon;
                    break;
                case "Commercial Pro":
                    icon = CommercialIcon;
                    break;
                case "Residential Pro":
                    icon = ResidentialIcon;
                    break;
                case "Service Pro":
                    icon = ServiceIcon;
                    break;
                default:
                    break;
            }

            return this.renderCertification(icon, certification, index);
        })
    }

    renderCertification = (icon, certification, index) => {
        return (
            <div key={index} className="padding-1andhalf border halfWidth margin-3">
                <img className="icon-small padding-h-1" src={icon} alt={certification}></img>
                <p
                    className="text-left text-grey text-smaller padding">{certification}
                </p>

            </div>
        );
    }

    render() {
        const { dealer } = this.props;

        return (
            <div className="boxshadow-light flex flex-col">
                <div className="flex flex-col fullWidth">
                    <p className="padding-2 text-grey text-large text-thin text-wrap margin-2">
                        {dealer.name}
                    </p>

                    <div className="pointer flex flex-row background-lightblue border-radius">
                        <div className="background-blue text-white ss-phone margin-1 text-small padding-1andhalf"></div>
                        <p className="text-white text-verysmall padding-1">Tap to call</p>
                        <div className="text-bold text-large text-white padding-1 margin-1">
                            {dealer.phone1.replace(/-/g, ".")}
                        </div>
                    </div>

                    <em className="text-small text-grey margin-3">Can't talk now? Click below to send an email.</em>

                    <div className="flex flex-row border-teal-1 border-radius pointer padding-1andhalf">
                        <div className="text-blue ss-mail padding-1"></div>
                        <p className="text-blue padding-1 text-bold">Contact this Pro</p>
                    </div>

                    <div className="padding-3 flex flex-col">
                        <p className="padding text-grey text-bold text-small">Business Hours</p>
                        <p className="padding text-grey text-thin text-small">Weekdays</p>
                        <p className="padding text-grey text-thin text-small">Saturday</p>
                        <p className="padding text-grey text-thin text-small">Sunday</p>
                    </div>
                </div>
                <div className="background-lightgrey fullWidth padding-v-2">
                    <div className="margin-h-3 border">
                        {this.determineCertification()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ListingIndividual;