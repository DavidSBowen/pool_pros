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

    componentDidMount() {
        // console.log('test',this.state);
        // console.log(data.zipcode);
        // console.log(data.location.lat);
        // console.log(data.location.lon);
        // data.dealers.map(dealer => console.log(dealer.data));
        // console.log(data.dealers);
    };

    render() {
        return (
            <div>
                <Filter zipcode={this.state.zipcode} dealers={this.state.dealers} />
                <Listings />
          {/* Body will contain:
                Filter
                Business listings */}
            </div>
        );
    }
}

export default Body;
