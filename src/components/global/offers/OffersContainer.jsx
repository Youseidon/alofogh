import React, { Component } from 'react';
import Offers from './Offers';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

let offerCat = '';
let propsCat = '';
class OffersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { offers: [] };
        this._getlastOffers = this._getlastOffers.bind(this);
        this._getOffersByCategory = this._getOffersByCategory.bind(this);
    }
    componentDidUpdate() {
        if (this.props.from == "Category") {
            if ((propsCat != offerCat) || (propsCat == '' && propsCat == '')) {
                this._getOffersByCategory();
            }
        }
    }
    componentDidMount() {
        if (this.props.from == "Category") {
            this._getOffersByCategory();
        }
        else
            this._getlastOffers();
    }
    _getlastOffers() {
        let url = this.props.api + '/offers/last/33';
        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.setState({ offers: result })
                this._getTranslation(result)
            });
    }
    _getOffersByCategory() {
        let url = this.props.api + '/offers/lastbycat/' + this.props.catId;
        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.setState({ offers: result })
                this._getTranslation(result)
            });
    }
    _getOffersData(Items) {
        return (
            Items.map((item) => {
                offerCat = item.categoryId;
                propsCat = this.props.catId;
                return (
                    <Translate key={item.id}>
                        {({ translate }) => (
                            <Offers id={item.id} theme={this.props.theme} provider={item.provider} key={item.id} title={translate(item.id)} description={item.description} discount={item.discount} expirationDate={item.expirationDate} finalPrice={item.finalPrice} offerPrice={item.offerPrice} price={item.price} url={item.url} quantity={item.quantity} />
                        )}
                    </Translate>
                );
            })
        );
    }
    _getTranslation(state) {
        let language = state;
        let result = {};
        Object.keys(language).forEach(function (item) {
            let Items = language[item].translations;
            let Title = [];
            if (Items.length > 0)
                for (var io in Items) {
                    if (Items.hasOwnProperty(io)) {
                        Title[io] = Items[io].title;
                    }
                }
            else {
                Title[0] = language[item].title;
                Title[1] = language[item].title;
            }
            let key = language[item].id;
            result[key] = Title;
        });
        this.props.addTranslation(result);
    }
    HomePage() {
        return (
            <div className="takhfifan-group clear" data-emsys="">
                <div className="title title-center clear">
                    <h2><Translate id="TodaysOffers"></Translate></h2>
                </div>
                <div className="deals three-col clear lazy-parent">
                    {this._getOffersData(this.state.offers)}
                </div>
            </div>
        );
    }
    CategoryPage() {
        return (
            <div className="deals three-col tkh-subcategories-deals-list clear">
                {this._getOffersData(this.state.offers)}
            </div>
        );
    }
    render() {
        if (this.state.offers.length > 0) {
            if (this.props.from == "Category")
                return this.CategoryPage();
            else
                return this.HomePage();
        }
        else
            return (<div></div>);
    }
}

export default withLocalize(OffersContainer);