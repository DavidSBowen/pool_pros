import React, { Component } from 'react';

class Copywrite extends Component {
    render() {
        return (
            <div className="flex flex-row padding-2 background-lightblue flex-justify-center">
                <a href="/" className="margin-h-half">
                    <p className="hover text-white text-smaller">2017 Pool Pros</p>
                </a>
                <div className="verticalLine"></div>
                <a href="/" className="margin-h-half">
                    <p className="hover text-white text-smaller">Privacy Policy</p>
                </a>
                <div className="verticalLine"></div>
                <a href="/" className="margin-h-half">
                    <p className="hover text-white text-smaller">Terms and Conditions</p>
                </a>
            </div>
        );
    }
}

export default Copywrite;
