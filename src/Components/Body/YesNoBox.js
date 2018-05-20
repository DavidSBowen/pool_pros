import React, { Component } from 'react'

export class YesNoBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { layout, dealer } = this.props;

    let idStateYes = "spaYesButton" + dealer.companyID;
    let idStateNo = "spaNoButton" + dealer.companyID;

    if (layout === 'desktop') {
      if (this.state[idStateYes]) {
        document.getElementById(idStateYes).classList.add("background-teal", "text-white");
        document.getElementById(idStateYes).classList.remove("text-grey");
        document.getElementById(idStateNo).classList.remove("background-teal", "text-white");
      } else if (this.state[idStateNo]) {
        document.getElementById(idStateYes).classList.remove("background-teal", "text-white");
        document.getElementById(idStateNo).classList.add("background-teal", "text-white");
        document.getElementById(idStateNo).classList.remove("text-grey");
      }
    } else {
      if (this.state[idStateYes]) {
        document.getElementById(idStateYes).checked = true;
        document.getElementById(idStateNo).checked = false;
      } else if (this.state[idStateNo]) {
        document.getElementById(idStateYes).checked = false;
        document.getElementById(idStateNo).checked = true;
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.layout !== nextProps.layout || nextState !== this.state) {
      return true;
    } else {
      return false;
    }
  }


  handleClick_spaButton = (button) => {

    const { dealer } = this.props;

    let idStateYes = "spaYesButton" + dealer.companyID;
    let idStateNo = "spaNoButton" + dealer.companyID;

    if (button === "yes") {
      this.setState({ [idStateYes]: true, [idStateNo]: false });
    } else if (button === "no") {
      this.setState({ [idStateYes]: false, [idStateNo]: true });
    };
  }

  render() {
    const { layout, dealer } = this.props;

    if (layout === "desktop") {
      return (
        <div className="flex flex-row margin-2 flex-align-flex_start margin-v-2">
          <div className="flex flex-row flex-align-flex_start">
            <button
              className="pointer padding-h-2 padding-v-1 border-radius-1 text-grey border-grey"
              id={"spaYesButton" + dealer.companyID}
              onClick={() => this.handleClick_spaButton("yes")}>
              Yes
            </button>
          </div>

          <div className="flex flex-row flex-align-flex_start margin-h-2">
            <button
              className="pointer padding-h-2 padding-v-1 border-radius-1 text-grey border-grey"
              id={"spaNoButton" + dealer.companyID}
              onClick={() => this.handleClick_spaButton("no")}>
              No
            </button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="flex flex-row margin-2 flex-align-flex_start margin-v-2">
          <div
            onClick={() => this.handleClick_spaButton("yes")}
            className="flex flex-row flex-align-flex_start">
            <input
              type="radio"
              id={"spaYesButton" + dealer.companyID}
              className="pointer checkbox checkbox-small checkbox-yesno"
              name="spa"
              value="yes" />
            <label
              className="padding-1 text-grey no_select">
              Yes</label>
          </div>

          <div
            onClick={() => this.handleClick_spaButton("no")}
            className="flex flex-row flex-align-flex_start margin-h-2">
            <input
              type="radio"
              id={"spaNoButton" + dealer.companyID}
              className="pointer checkbox checkbox-small checkbox-yesno"
              name="spa"
              value="no" />
            <label
              className="padding-1 text-grey no_select">
              No</label>
          </div>
        </div>
      )
    }
  }
}
