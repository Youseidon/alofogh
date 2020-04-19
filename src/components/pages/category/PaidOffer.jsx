import React, { Component } from 'react';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import SlideShow from "./../../global/banner/SlideShow"

class PaidOffer extends Component {
    render() {
        return (
            <div className="main-deal-wrapper clear">
                <div className="main-deal clear ga-promo-item in-moment" style={this.props.theme.mainDeal} data-details="">
                    <div className="main-deal-img" style={Object.assign({}, this.props.theme.left, this.props.theme.mainDealImg)}>
                        <div className="discount">
                            <div className="location">
                                <span className="icon-location"></span>
                                <span className="text">
                                    {this.props.location}
                                </span>
                            </div>
                        </div>
                        <div id="main-deal-slider" className="tkh-main-deal-slider">
                            <div className="bx-wrapper">
                                <div className="bx-viewport" style={{ height: 371 + 'px' }}>
                                    <ul className="bxslider">
                                        <li className="lazy-loaded">
                                            <a href="">
                                                <img src={`/images/Offers/${this.props.imageUrl}`} data-src="" width="600" height="372" alt={this.props.alt} />
                                            </a>
                                        </li>
                                        {/* <SlideShow api={this.props.api} from="Home" theme={this.props.theme} /> */}
                                    </ul>
                                </div>
                                <div className="bx-controls bx-has-controls-direction">
                                    <div className="bx-controls-direction">
                                        <a className="bx-prev disabled" href="javascript:void(0)">
                                        </a>
                                        <a className="bx-next disabled" href="javascript:void(0)">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-deal-text tkh-sale tkh-timer" style={this.props.theme.right} data-product-id="152709">
                        <div className="title">
                            <strong>
                                <a href="" title={this.props.imageTitle}>{this.props.title}</a>
                            </strong>
                        </div>
                        <div className="main-deal-top">
                            <div className="discount-price">
                                <span className="caption"><Translate id="YouPaid"></Translate></span>
                                <span className="value">{this.props.offerPrice}<em><Translate id="Rial"></Translate></em></span>
                            </div>
                            <div className="discount discount-progress">
                                <div className="discount-inner" data-percent={this.props.offer}>
                                    <svg width="90" height="90">
                                        <circle cx="55" cy="45" r="40" transform="rotate(270 50 50)" className="circle"></circle>
                                        <circle cx="55" cy="45" r="40" transform="rotate(270 50 50)" className="fill"></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="main-deal-bottom">
                            <div className="bought">
                                <span className="caption"><Translate id="Sold"></Translate></span>
                                <span className="value number-font tkh-sold" data-template="">{this.props.soldCount}</span>
                            </div>
                            <div className="price">
                                <span className="caption"><Translate id="OffersValue"></Translate></span>
                                <span className="value"><i>{this.props.realPrice}</i><em><Translate id="YouPaid"></Translate>  </em></span>
                            </div>
                        </div>
                        <a href="" title="" className="buy-btn">
                            <div className="btn-icon">
                                <div className="btn-icon-before" style={this.props.theme.btnIconBefore}>
                                </div>
                                <span className="icon-basket">
                                </span>
                                <div className="btn-icon-after" style={this.props.theme.btnIconAfter}>
                                </div>
                            </div>
                            <div className="btn-text"><Translate id="DetailsAndPurchase"></Translate></div>
                        </a>
                    </div>
                </div>
                <div className="extra-box" style={this.props.theme.extraBox}>
                    <div className="first-banner">
                        <a title="" onclick="" href="" data-detail="">
                            <img className="lazy-img lazy-loaded" alt="دلفیناریوم" data-src="https://cdn.takhfifan.com/media/catalog/product/2/_/2_2_1_1_1.jpg" src="https://cdn.takhfifan.com/media/catalog/product/2/_/2_2_1_1_1.jpg" />
                        </a>
                    </div>
                    <div className="sec-banner">
                        <a onclick="" href="" target="_blank" data-detail=""><img className="lazy-img lazy-loaded" alt=" دلفیناریوم" data-src="https://cdn.takhfifan.com/media/catalog/product/1/_/1_1_1_2_1.jpg" src="https://cdn.takhfifan.com/media/catalog/product/1/_/1_1_1_2_1.jpg" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withLocalize(PaidOffer);