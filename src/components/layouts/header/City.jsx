import React, { Component } from 'react';
import { stat } from 'fs';
import { stringify } from 'querystring';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

class City extends Component {
    constructor(props) {
        super(props);
        this.state = { city: [], isCityOpen: false };
        this._getCityData = this._getCityData.bind(this);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    _getCityData() {
        let url = this.props.api + '/cities';
        fetch(url)
            .then(response => response.json())
            .then(result => { this.setState({ city: result }) });
    }
    toggleClass() {
        const currentState = this.state.isCityOpen;
        this.setState({ isCityOpen: !currentState });
    }
    componentDidMount() {
        this._getCityData();
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    handleClickOutside(event) {
        if (this.state.isCityOpen) {
            if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
                this.toggleClass();
            }
        }
    }
    _getCityClassName() {
        if (this.state.isCityOpen) {
            return "item-arrow icon-arrow-up";
        }
        else {
            return "item-arrow icon-arrow-down";
        }
    }
    _addClassLoading() {
    }
    _getTranslation(state) {
        let language = state;
        let result = {};
        Object.keys(language).forEach(function (item) {
            let Items = language[item].translations;
            let Title = [];

            for (var io in Items) {
                if (Items.hasOwnProperty(io)) {
                    Title[io] = Items[io].name;
                }
            }
            let key = language[item].id;
            result[key] = Title;
        });
        this.props.addTranslation(result);
    }
    render() {
        if (this.state.city.length > 0) {
            this._getTranslation(this.state.city);
            return (
                <div className="city tkh-city-link" style={this.props.theme.city} ref={this.setWrapperRef} onClick={() => this.toggleClass()}>
                    <span className="icon-location" style={this.props.theme.right}></span>
                    <span className="city-caption"><Translate id="ChooseCity"></Translate>:</span>
                    <span className="city-val"><Translate id={this.state.city[0].id}></Translate></span>
                    <span className={this._getCityClassName()} style={this.props.theme.left}></span>
                    <div className="city-list acc" style={(this.state.isCityOpen) ? { display: "block" } : { display: "none" }}>
                        <ul>
                            {this.state.city.map((item, index) => {
                                var status = "";
                                if (index == 0)
                                    status = "active";
                                return (
                                    <li key={item.id} onClick={() => this._addClassLoading()}>
                                        <a className={status}>
                                            <Translate id={item.id}></Translate>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            );
        }
        else
            return(<div></div>)
    }
}

export default withLocalize(City);