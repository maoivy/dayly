import React, { Component } from "react";
import Header from "../modules/Header.js";
import Notebook from "../modules/Notebook.js";
import Widget from "../modules/Widget.js";

class Daily extends Component {
    constructor(props) {
        super(props);
        // TODO: this.state
    }

    render() {
        return (
            <>
            <Header
                year={this.props.year}
                month={this.props.month}
                day={this.props.day}
                handleBackClick={this.props.handleBackClick}
                handleNextClick={this.props.handleNextClick}
            />
            <div className="widget-container"> 
                <Widget name="Mood" type="ColorWidget" value="" />
                <Widget name="Sleep" type="SliderWidget" value="" />
                <h3>Goals</h3>
                <Widget name="Go to the gym" type="BinaryWidget" value="" />
            </div>
            <Notebook />
            </>
        );
    }
}

export default Daily;