import React, { Component } from 'react';

import certifications from './../../Resources/certifications.json';

class FilterSelections extends Component {

    renderInfoBox = () => {
        return <div className="box border-radius-1 background-lightgrey-2 margin-1 pointer">
            <div className="centerIcon no_select text-verysmall text-lightblue">&#63;</div>
        </div>;
    }

    renderCertificationFilters() {
        return (
            certifications.certifications.map((certification, index) => {
                return (
                    <div key={index} className="flex flex-row padding-2">
                        <input type="checkbox" className="pointer checkbox" />
                        <div className="padding-1 text-grey no_select">{certification.name}</div>
                        {/* fix the below to render info box */}
                        {certification.information ? this.renderInfoBox() : false}
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div className="padding-h-2 background-white border">
                {this.renderCertificationFilters()}
            </div>
        );
    }
}

export default FilterSelections;