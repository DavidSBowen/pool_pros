import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

import FilterSelections from './FilterSelections';

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            selectedFilters: []
        };
    };

    handleClick_filterDropdown = () => {
        const { height } = this.state;
        this.setState({
            height: height === 0 ? 'auto' : 0,
        });
    };

    render() {

        const { zipcode, dealers, checkboxToggle, layout } = this.props;
        const { height } = this.state;


        if (layout === "mobile") {
            return (
                <div className="background-lightgrey padding-3 border-bottom" id="filter">
                    <div className="flex flex-row flex-space-between">
                        <p className="text-lightblue text-bold padding-h-2">
                            {dealers.length} dealers in {zipcode}
                        </p>
                        <div className="flex flex-row">
                            <p className={"padding-2 border background-white " + (height === 'auto' ? "border-no_bottom" : "")}>Filter Results</p>
                            <a onClick={this.handleClick_filterDropdown}
                                id="filterDropdown"
                                className={"hover pointer border text-small padding-2 border-no_left " + (height === 'auto' ? "border-no_bottom ss-directup" : "ss-dropdown")}>
                            </a>
                        </div>
                    </div>
                    <AnimateHeight
                        duration={300}
                        height={height}>
                        <FilterSelections checkboxToggle={checkboxToggle} />
                    </AnimateHeight>
                </div>
            );
        } else if (layout === "tablet") {
            return (
                <div className="background-lightgrey padding-3 border-bottom margin-h-3 border-radius-3" id="filter">
                    <div className="flex flex-row flex-space-between">
                        <p className="text-lightblue text-bold padding-h-2">
                            {dealers.length} dealers in {zipcode}
                        </p>
                        <div className="flex flex-row">
                            <p className={"padding-2 border background-white " + (height === 'auto' ? "border-no_bottom" : "")}>Filter Results</p>
                            <a onClick={this.handleClick_filterDropdown}
                                id="filterDropdown"
                                className={"hover pointer border text-small padding-2 border-no_left " + (height === 'auto' ? "border-no_bottom ss-directup" : "ss-dropdown")}>
                            </a>
                        </div>
                    </div>
                    <AnimateHeight
                        duration={300}
                        height={height}>
                        <FilterSelections checkboxToggle={checkboxToggle} />
                    </AnimateHeight>
                </div>
            );
        } else if (layout === "desktop") {
            return (
                <div className="background-lightgrey padding-3 border-bottom margin-h-20percent border-radius-3" id="filter">
                    <div className="flex flex-row flex-justify-center">
                        <p className="text-lightblue text-small padding-h-2">
                            {dealers.length} dealers in {zipcode}
                        </p>
                        <div className="verticalLine-medium"></div>
                        <FilterSelections layout={layout} checkboxToggle={checkboxToggle} />
                    </div>
                </div>
            );
        }
    }
}

export default Filter;
