import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Arrow from './../../Resources/images/Dev_Test_Assets/next-arrow.png';

export class SendContactProFormButton extends Component {
    render() {
        const { layout } = this.props;

        if (layout === "desktop") {
            return (
                <div className="text-right margin-h-1 margin-v-3">
                    <a className="hover flex flex-row flex-align-center flex-justify-center" href="/">
                        <p className="text-grey text-bold text-small">Send my email</p>
                        <img
                            className="icon-extrasmall margin-h-1"
                            src={Arrow} alt="" />
                    </a>
                </div>
            )
        }
        return (
            <div className="text-right margin-h-1 margin-v-3">
                <a className="hover" href="/">
                    <p className="text-teal">Send</p>
                </a>
            </div>
        )
    }
}

SendContactProFormButton.propTypes = {
    layout: PropTypes.string.isRequired,
};

SendContactProFormButton.defaultProps = {
    layout: "desktop"
};
