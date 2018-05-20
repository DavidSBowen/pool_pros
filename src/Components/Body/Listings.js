import React, { Component } from 'react';

import ListingIndividual from './ListingIndividual';

class Listings extends Component {

    renderListings = () => {
        const { dealers, layout } = this.props;

        return dealers.map(dealer => {
            if (layout === 'mobile') {
                return (
                    <div
                        key={dealer.data.companyID}>
                        <ListingIndividual
                            layout={layout}
                            dealer={dealer.data} />
                    </div>
                )
            } else if (layout === 'tablet') {
                return (
                    <div
                        className="border-radius-3 flex-evensize margin-2"
                        key={dealer.data.companyID}>
                        <ListingIndividual
                            layout={layout}
                            dealer={dealer.data} />
                    </div>
                )
            } else if (layout === 'desktop') {
                return (
                    <div
                        className="border-radius-3 margin-2 listingWidth"
                        key={dealer.data.companyID}>
                        <ListingIndividual
                            layout={layout}
                            dealer={dealer.data} />
                    </div>
                )
            } else return false;
        })
    }

    render() {

        const { layout } = this.props;

        if (layout === 'mobile') {
            return (
                <div className="padding-h-3 margin-bottom-3">
                    {this.renderListings()}
                </div>
            );
        } else if (layout === 'tablet') {
            return (
                <div className="padding-h-3 margin-bottom-3">
                    {this.renderListings()}
                </div>
            );
        } else if (layout === 'desktop') {
            return (
                <div className="margin-h-20percent margin-v-2 margin-bottom-3 flex flex-row flex-wrap flex-justify-center">
                    {this.renderListings()}
                </div>
            );
        }
    }
}

export default Listings;