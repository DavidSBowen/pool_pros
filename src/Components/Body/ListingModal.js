import React, { Component } from 'react';

import { YesNoBox } from './YesNoBox.js';
import { SendContactProFormButton } from './SendContactProFormButton.js';

import Circle from './../../Resources/images/Dev_Test_Assets/circle-form.png';
import CheckCircle from './../../Resources/images/Dev_Test_Assets/checkmark-circle.png';

class ListingModal extends Component {

    constructor(props) {
        super(props);

        // 
        this.state = {
            name: false,
            number: false,
            email: false,
            checkbox: false,
        };
    };

    // checks if the field has any characters and returns a circle or green check circle above that field
    checkFieldValidity = (field) => {

        const { dealer } = this.props;
        const companyID = dealer.companyID

        switch (field) {
            case "name":
                const nameInput = document.getElementById("nameInput" + companyID);
                this.setState({
                    name: nameInput.value.length > 0 ? true : false
                });
                break;
            case "phone":
                const phoneInput = document.getElementById("phoneInput" + companyID);
                this.setState({
                    number: phoneInput.value.length > 0 ? true : false
                });
                break;
            case "email":
                const emailInput = document.getElementById("emailInput" + companyID);
                this.setState({
                    email: emailInput.value.length > 0 ? true : false
                });
                break;
            default:
                break;
        }
    };

    handleClick_exitButton = () => {
        this.props.changeModalDisplay();
    }

    render() {
        const { dealer, layout } = this.props;
        return (
            <div>
                <div className="background-blue padding-2">
                    <div className="flex">
                        <div className="text-white text-small margin-2">EMAIL</div>
                        <div
                            onClick={this.handleClick_exitButton}
                            className="pointer button-close text-white ss-delete text-large hover"></div>
                    </div>
                    <div className="text-white text-verylarge text-thin text-wrap margin-2">{dealer.name}</div>
                </div>

                <div className="margin-2">
                    <div className="text-wrap margin-2 margin-v-2 text-grey text-small">Fill out the form below and Premium Pools & Spas of Charlotte will get in touch.</div>

                    <div className="ninetyWidth margin-2 margin-v-2">
                        <div className="flex flex-row flex-space-between fullWidth margin-v-1">
                            <div className="text-grey text-small text-bold">First and last name</div>
                            <img
                                src={this.state.name ? CheckCircle : Circle}
                                className="icon-med"
                                alt="" />
                        </div>
                        <div className="flex flex-row fullWidth margin-v-1">
                            <input
                                onChange={() => this.checkFieldValidity("name")}
                                id={"nameInput" + dealer.companyID}
                                className="padding-1andhalf fullWidth text-large"
                                type="text"
                                placeholder="Jane Smith" />
                        </div>
                    </div>

                    <div className="sixtyWidth margin-2 margin-v-2">
                        <div className="flex flex-row flex-space-between fullWidth margin-v-1">
                            <div className="text-grey text-small text-bold">Phone number</div>
                            <img
                                src={this.state.number ? CheckCircle : Circle}
                                className="icon-med"
                                alt="" />
                        </div>
                        <div className="flex flex-row fullWidth margin-v-1">
                            <input
                                onChange={() => this.checkFieldValidity("phone")}
                                id={"phoneInput" + dealer.companyID}
                                className="padding-1andhalf fullWidth text-large"
                                type="tel" />
                        </div>
                    </div>

                    <div className="ninetyWidth margin-2 margin-v-2">
                        <div className="flex flex-row flex-space-between fullWidth margin-v-1">
                            <div className="text-grey text-small text-bold">Email address</div>
                            <img
                                src={this.state.email ? CheckCircle : Circle}
                                className="icon-med"
                                alt="" />
                        </div>
                        <div className="flex flex-row fullWidth margin-v-1">
                            <input
                                onChange={() => this.checkFieldValidity("email")}
                                id={"emailInput" + dealer.companyID}
                                className="padding-1andhalf fullWidth text-large"
                                type="text" />
                        </div>
                    </div>

                    <div className="ninetyWidth margin-2 margin-v-2">
                        <div className="flex flex-row flex-space-between fullWidth margin-v-1">
                            <div className="text-grey text-small text-bold">Comments or questions</div>
                            <p className="text-small text-lightgrey2"><em>optional</em></p>
                        </div>
                        <div className="flex flex-row fullWidth margin-v-1">
                            <textarea
                                id="commentInput"
                                className="padding-1andhalf fullWidth text-large"
                            />
                        </div>
                    </div>

                    <div className="margin-2 text-grey text-small text-bold margin-v-2">Do you currently own a pool or spa?</div>

                    <YesNoBox dealer={dealer} layout={layout} />

                    <div className="horizontalLine-lightgrey2 margin-h-1 margin-v-2"></div>

                    <SendContactProFormButton layout={layout} />

                </div>
            </div>
        );
    }
}

export default ListingModal;
