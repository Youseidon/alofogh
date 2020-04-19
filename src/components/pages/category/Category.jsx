import React, { Component } from 'react';
import OffersContainer from '../../global/offers/OffersContainer';
import PaidOffer from './PaidOffer';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = { category: {}, paidOffer: {}, subCategory: [], offers: [] };
        this.loadThisComponent = this.loadThisComponent.bind(this);
    }
    loadThisComponent() {
        let url = this.props.api + '/categories/sub/' + this.props.match.params.id;
        fetch(url)
            .then(response => response.json())
            .then(result => {
                console.log(result.specialOffer)
                this.setState({ category: result.detail, paidOffer: result.specialOffer, subCategory: result.subCategories })
            })
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.loadThisComponent();
    }
    componentDidUpdate() {
        if (this.state.category.id != this.props.match.params.id) {
            this.loadThisComponent();
        }
    }
    _loadPaidOffer() {
        if (this.state.paidOffer != null) {
            return (<PaidOffer api={this.props.api} theme={this.props.theme} title={(this.state.paidOffer.title)} imageUrl={this.state.paidOffer.url} offer={this.state.paidOffer.discount} soldCount={this.state.paidOffer.quantity} realPrice={this.state.paidOffer.price} offerPrice={this.state.paidOffer.finalPrice} location={this.state.paidOffer.title} alt={this.state.paidOffer.title} imageTitle={this.state.paidOffer.title} />);
        }
        else {
            return (<div></div>);
        }
    }
    render() {
        return (
            <div className="container ">
                <div id="tkh-message"></div>
                <div className="container main-container clear">
                    {this._loadPaidOffer()}
                    <div className="takhfifan-group tkh-os-tag-trigger clear" data-emsys="" data-os-val="" data-os-key="last_visited_category">
                        <div className="takhfifan-group col-res clear">
                            <div className="title clear with-sort-item">
                                <h1 style={this.props.theme.right}><a href="" title={this.state.category.title}><Translate id="OfoghsOf"></Translate> {this.state.category.title}</a>
                                </h1>
                                <ul className="tkh-subcategories-section subcategories-section" style={this.props.theme.subcategoriesSection}>
                                    <li className="subcategory-label active" data-categoryid="-1">
                                        <a href=""><Translate id="AllSubCategories"></Translate></a>
                                    </li>
                                    {this.state.subCategory.map((item) => {
                                        return (
                                            <li className="subcategory-label" data-categoryid="-1">
                                                <a href="">{item.title}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="category-vendor-rating " style={this.props.theme.categoryVendorRating}>
                                    <span className="tkh-sort-rating" data-list="#dealsWrapper">
                                        <Translate id="OrderizeByUsersRates"></Translate>
                                    </span>
                                </div>
                            </div>
                            <div id="dealsWrapper" className="deals three-col tkh-subcategories-deals-list clear">
                                <OffersContainer theme={this.props.theme} api={this.props.api} catId={this.props.match.params.id} from="Category" />
                            </div>
                            <div className="related-tags-wrapper">
                                <div className="title clear">
                                    <h2  style={this.props.theme.right}><Translate id="AllSubCategoriesOf"></Translate> {this.state.category.title}</h2>
                                </div>
                                <ul className="bottom-subcategories-section">
                                    {this.state.subCategory.map((item) => {
                                        return (
                                            <li className="subcategory-label">
                                                <a href="" className="btn">{item.title}<b className="number-font"></b></a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="deal-page-card category-des">
                                <p></p>
                                <p dir="RTL"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withLocalize(Category);