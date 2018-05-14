import React, { Component } from 'react';

import Circle from './../../Resources/images/Dev_Test_Assets/circle-form.png';
import CheckCircle from './../../Resources/images/Dev_Test_Assets/checkmark-circle.png';

class ListingModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: false,
            number: false,
            email: false,
            checkbox: false,
        };
    };

    checkFormValidity = () => {
        // check that all fields have proper content
    };

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
        // field.length > 0 ? checkCircle : circle;
    };

    render() {
        const { dealer } = this.props;
        return (
            <div className="">
                <div className="background-blue padding-2">
                    <div className="text-white text-small margin-2">EMAIL</div>
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
                            <input
                                id="commentInput"
                                className="padding-1andhalf fullWidth text-large"
                                type="text" />
                        </div>
                    </div>

                    <div className="margin-2 text-grey text-small text-bold margin-v-2">Do you currently own a pool or spa?</div>
                    <div className="flex flex-row margin-2 flex-align-flex_start margin-v-2">
                        {/* <input onChange={this.props.checkboxToggle} type="checkbox" className="pointer checkbox" /> */}
                        <div className="flex flex-row flex-align-flex_start">
                            <input
                                type="radio"
                                className="pointer checkbox checkbox-small"
                                name="spa"
                                value="yes" />
                            <label className="padding-1 text-grey no_select">Yes</label>
                        </div>

                        <div className="flex flex-row flex-align-flex_start margin-h-2">
                            <input
                                type="radio"
                                className="pointer checkbox checkbox-small"
                                name="spa"
                                value="no" />
                            <label className="padding-1 text-grey no_select">No</label>
                        </div>
                    </div>

                    <div className="horizontalLine-lightgrey2 margin-h-1 margin-v-2"></div>

                    <div className="text-right margin-v-2 margin-h-1 margin-v-3">
                        <a className="hover" href="/"><p className="text-teal">Send</p></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListingModal;
