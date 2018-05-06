import React, { Component } from 'react';

import Filter from './Filter';
import Listings from './Listings';

import data from '../../Resources/dealers.json'
import certifications from '../../Resources/certifications.json'

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
            zipcode: data.zipcode,
            dealers: data.dealers,
        };
    };

    render() {
        return (
            <div>
                <Filter zipcode={this.state.zipcode} dealers={this.state.dealers} />
                <Listings dealers={this.state.dealers} />
            </div>
        );
    }
}

export default Body;
