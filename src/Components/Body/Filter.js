import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

import FilterSelections from './FilterSelections';

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 0,
        };
    };

    handleClick_filterDropdown = () => {
        const { height } = this.state;
        this.setState({
            height: height === 0 ? 'auto' : 0,
        });
    };

    render() {

        const { zipcode, dealers } = this.props;
        const { height } = this.state;

        return (
            <div className="background-lightgrey padding-2">
                <div className="flex flex-row flex-space-between">
                    <p id="test" className="text-lightblue text-bold padding-h-2">
                        {dealers.length} dealers in {zipcode}
                    </p>
                    <div className="flex flex-row">
                        <p className={"padding-2 border background-white " + (height === 'auto' ? "border-no_bottom" : "")}>Filter Results</p>
                        <a onClick={this.handleClick_filterDropdown}
                            id="filterDropdown"
                            className={"pointer border text-small padding-2 border-no_left " + (height === 'auto' ? "border-no_bottom ss-directup" : "ss-dropdown")}>
                        </a>
                    </div>
                </div>
                <AnimateHeight
                    duration={300}
                    height={height}>
                    <FilterSelections />
                </AnimateHeight>

            </div>
        );
    }
}

export default Filter;
