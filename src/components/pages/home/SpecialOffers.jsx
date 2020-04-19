import React, { Component } from 'react';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

class SpecialOffers extends Component {
    constructor(props) {
        super(props);
        this.state = { specials: [] };
        this._getSpecialOfferData = this._getSpecialOfferData.bind(this);
    }
    componentDidMount() {
        this._getSpecialOfferData();
    }
    _getSpecialOfferData() {
        let url = this.props.api + '/offers/specials/6';
        fetch(url)
            .then(response => response.json())
            .then(result => { this.setState({ specials: result }) })
    }
    render() {
        if (this.state.specials.length > 0) {
            return (
                <div className="takhfifan-group clear">
                    <div className="title title-center clear">
                        <h2><Translate id="SpecialOffers"></Translate></h2>
                    </div>
                    <div className="simple-grid">
                        {this.state.specials.map((item) => {
                            return (
                                <a className="simple-grid__item ga-promo-item" key={item.id} href="#">
                                    <img className="lazy-img lazy-loaded" src={`\\images\\Offers\\${item.url}`} alt={item.title} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            );
        }
        else
            return (<div></div>);
    }
}

export default withLocalize(SpecialOffers);