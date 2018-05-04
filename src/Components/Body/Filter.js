import React, { Component } from 'react';

import FilterSelections from './FilterSelections';

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterVisible: false
        };
    };

    handleClick_filterDropdown = () => {
        this.setState(
            this.state.filterVisible ? { filterVisible: false } : { filterVisible: true }
        );
    };

    render() {

        const { zipcode, dealers } = this.props;

        return (
            <div className="background-lightgrey padding-2">
                <div className="flex flex-row flex-space-between">
                    <p className="text-lightblue text-bold padding-h-2">
                        {dealers.length} dealers in {zipcode}
                    </p>
                    <div className="flex flex-row">
                        <p className={"padding-2 border background-white " + (this.state.filterVisible ? "border-no_bottom" : "")}>Filter Results</p>
                        <a onClick={this.handleClick_filterDropdown}
                            id="filterDropdown"
                            className={"pointer border text-small padding-2 border-no_left " + (this.state.filterVisible ? "border-no_bottom ss-directup" : "ss-dropdown")}>
                        </a>
                    </div>
                </div>
                {this.state.filterVisible ? <FilterSelections /> : false}
            </div>
        );
    }
}

export default Filter;
