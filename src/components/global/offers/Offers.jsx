import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

class Offers extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render() {
        return (
            <div className="deal lazy-row lazy-loaded" data-rate={this.props.points} data-details="" data-lazy-row="6">
                <Link to={`/OfferDetail/${this.props.id}`}>
                    {/* <a href="" title={this.props.title}> */}
                    <span className="use-now" style={this.props.theme.useNowBefore}></span>
                    <picture className="deal-img">
                        <source className="lazy" srcSet="" />
                        {/* <LazyLoadImage className="lazy" alt={this.props.title} effect="blur" height="" src={`/images/Offers/${this.props.url}`} width="" /> */}
                        <img src={`/images/Offers/${this.props.url}`} />
                        <span className="icon-location location">{this.props.provider.address}</span>
                        <div className="vendor-rating tkh-vendor-rating">
                            <div className="rating-text">
                                <span className="points">{this.props.points}</span>
                            </div>
                            <div className="stars">
                                <div className="tkh-stars-fill stars-fill" data-rating={this.props.points} style={{ width: this.props.points + '%' }}></div>
                                <img className="stars-frame" src="/images/stars.svg" />
                            </div>
                        </div>
                    </picture>
                    <div className="deal-cnt clear">
                        <strong className="deal-title">
                            <div className="no-need-to-print"></div>
                            {this.props.title}
                        </strong>
                        <div className="deal-details-wrapper">
                            <div className="deal-discount clear">
                                <span className="deal-discount-number">{this.props.discount * 100}</span>
                                <span className="number-font deal-discount-sign"> % </span>
                                <span className="deal-discount-suffix"><Translate id="discount"></Translate></span>
                            </div>
                            <div className="deal-sales clear">
                                <span className="icon-basket"></span>
                                <span className="deal-sales-number">{this.props.quantity}</span>
                            </div>
                            <div className="deal-price clear">
                                <div className="deal-final-price">
                                    <span className="deal-price-number number-font">{this.props.finalPrice}</span>
                                    <span className="deal-price-currency"><Translate id="currency"></Translate></span>
                                </div>
                                <div className="deal-retail-price line-through number-font">
                                    {this.props.price}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* </a> */}
            </div>
        );
    }
}

export default withLocalize(Offers);