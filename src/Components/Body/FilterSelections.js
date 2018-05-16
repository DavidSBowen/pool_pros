import React, { Component } from 'react';

import certifications from './../../Resources/certifications.json';

class FilterSelections extends Component {

    renderInfoBox = () => {
        return <div className="box border-radius-1 background-lightgrey-2 margin-1 pointer">
            <div className="centerIcon no_select text-verysmall text-lightblue">&#63;</div>
        </div>;
    }

    renderCertificationFilters() {
        const { layout } = this.props;

        if (layout === "desktop") {
            return (
                certifications.certifications.map((certification, index) => {
                    return (
                        <div key={index} className="flex flex-row padding-2">
                            <input id={certification.name} onChange={this.props.checkboxToggle} type="checkbox" className="pointer checkbox-small" />
                            <label htmlFor={certification.name} className="padding-1 text-small text-grey no_select">{certification.name}</label>

                            {certification.information ? this.renderInfoBox() : false}
                        </div>
                    );
                })
            );
        } else {
            return (
                certifications.certifications.map((certification, index) => {
                    return (
                        <div key={index} className="flex flex-row padding-2">
                            <input id={certification.name} onChange={this.props.checkboxToggle} type="checkbox" className="pointer checkbox" />
                            <label htmlFor={certification.name} className="padding-1 text-small text-grey no_select">{certification.name}</label>

                            {certification.information ? this.renderInfoBox() : false}
                        </div>
                    );
                })
            );
        }
    }

    render() {
        const { layout } = this.props;

        if (layout === "desktop") {
            return (
                <div className="flex flex-row">
                    {this.renderCertificationFilters()}
                </div>
            );
        } else {
            return (
                <div className="padding-h-2 background-white border">
                    {this.renderCertificationFilters()}
                </div>
            );
        }
    }
}

export default FilterSelections;