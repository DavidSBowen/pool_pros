import React, { Component } from 'react';

import ListingIndividual from './ListingIndividual';

class Listings extends Component {

    renderListings = () => {
        const { dealers } = this.props;

        return dealers.map(dealer => {
            return <div
                key={dealer.data.companyID}>
                <ListingIndividual
                    dealer={dealer.data} />
            </div>
        })
    }

    render() {

        return (
            <div className="padding-h-3 margin-bottom-3">
                {this.renderListings()}
            </div>
        );
    }
}

export default Listings;