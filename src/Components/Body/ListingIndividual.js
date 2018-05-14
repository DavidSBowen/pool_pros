import React, { Component } from 'react';

import ListingModal from './ListingModal';

import InstallationIcon from './../../Resources/images/Dev_Test_Assets/star-installation-pro.png';
import CommercialIcon from './../../Resources/images/Dev_Test_Assets/users-commercial-pro.png';
import ResidentialIcon from './../../Resources/images/Dev_Test_Assets/home-residential-pro.png';
import ServiceIcon from './../../Resources/images/Dev_Test_Assets/gear-service-pro.png';

class ListingIndividual extends Component {

    componentDidMount() {
        const dealerID = this.props.dealer.companyID; // Grabbing dealerId from dealers json
        const dealerModal = document.getElementById(dealerID); // select modal element with ID from dealerId
        const dealerContact = document.getElementById(dealerID + '-contact'); // selecting element 

        // Event Listeners for "Contact this Pro" buttons
        dealerModal.addEventListener('click', (event) => {
            if (event.target === dealerModal) {
                dealerModal.style.display = dealerModal.style.display === 'none' ? 'block' : 'none';
            }
        });

        // Event Listeners for Modals 
        dealerContact.addEventListener('click', (event) => {
            dealerModal.style.display = dealerModal.style.display === 'none' ? 'block' : 'none';
        });
    };

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
            <div id="proItem" key={index} className="flex flex-row margin-v-1">
                <img className="icon-small padding-h-1" src={icon} alt={certification}></img>
                <p
                    className="text-left text-grey text-smaller padding">{certification}
                </p>
            </div>
        );
    };

    renderWeekdayHours = () => {
        const hours = this.props.dealer.weekHours;
        const { mon, tue, wed, thu, fri } = hours;

        if (mon === tue && mon === wed && mon === thu && mon === fri) {
            return "Weekdays " + mon;
        }
    };

    renderWeekendHours = (day) => {

        const renderHours = (hours) => {
            if (!hours.length) {
                return "- CLOSED";
            } else if (hours === "On Call") {
                return "- On Call";
            } else {
                return hours;
            }
        };

        if (day === 'saturday') {
            let hours = this.props.dealer.weekHours.sat;
            return renderHours(hours);
        } else if (day === 'sunday') {
            let hours = this.props.dealer.weekHours.sun;
            return renderHours(hours);
        }
    };

    render() {
        const { dealer } = this.props;

        return (
            <div className="boxshadow-light flex flex-col">
                <div className="flex flex-col fullWidth">
                    <p className="padding-2 text-grey text-large text-thin text-wrap text-center margin-2">
                        {dealer.name}
                    </p>

                    <div className="hover pointer flex flex-row background-lightblue border-radius">
                        <div className="background-blue text-white ss-phone margin-1 text-small padding-1andhalf"></div>
                        <p className="text-white text-verysmall padding-1">Tap to call</p>
                        <a href='/'>
                            <div className="text-bold text-large text-white padding-1 margin-1">
                                {dealer.phone1.replace(/-/g, ".")}
                            </div>
                        </a>
                    </div>

                    <em className="text-small text-grey margin-3">Can't talk now? Click below to send an email.</em>

                    <div
                        id={dealer.companyID + '-contact'}
                        className="hover flex flex-row border-teal-1 border-radius pointer padding-1andhalf">
                        <div className="text-blue ss-mail padding-1"></div>
                        <p className="text-blue padding-1 text-bold">Contact this Pro
                        </p>
                    </div>

                    <div className="padding-3 flex flex-col">
                        <p className="padding text-grey text-bold text-small">Business Hours</p>
                        <p className="padding text-grey text-thin text-small">{this.renderWeekdayHours()}</p>
                        <p className="padding text-grey text-thin text-small">Saturdays {this.renderWeekendHours('saturday')}</p>
                        <p className="padding text-grey text-thin text-small">Sundays {this.renderWeekendHours('sunday')}</p>
                    </div>
                </div>
                <div className="background-lightgrey fullWidth padding-v-2">
                    <div id="proItemBox" className="flex flex-row flex-wrap">
                        {this.determineCertification()}
                    </div>
                </div>
                <div className="pro-modal"
                    id={dealer.companyID}
                    style={{ display: "none" }}>
                    <div
                        className="pro-modal-content">
                        <ListingModal dealer={dealer} />
                    </div>
                </div>
            </div >
        );
    }
}

export default ListingIndividual;