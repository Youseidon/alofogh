import React, { Component } from 'react';
import Comment from './../../global/comment/Comment';
import { randomBytes } from 'crypto';
import { Link } from 'react-router-dom';
import SlideShow from './../../global/banner/SlideShow'
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

class OfferDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { offer: {}, provider: {} };
        this._getOffer = this._getOffer.bind(this);
    }
    _getOffer() {
        let url = this.props.api + '/offers/details/' + this.props.match.params.id;
        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.setState({ offer: result, provider: result.provider });
                this._getTranslation(result);
            });
    }
    _getTranslation(state) {
        // let language = state;
        // let result = {};
        // Object.keys(language).forEach(function (item) {
        //     let Items = language[item].translations;
        //     let Title = [];
        //     if (Items.length > 0)
        //         for (var io in Items) {
        //             if (Items.hasOwnProperty(io)) {
        //                 Title[io] = Items[io].title;
        //             }
        //         }
        //     else {
        //         Title[0] = language[item].title;
        //         Title[1] = language[item].title;
        //     }
        //     let key = language[item].id;
        //     result[key] = Title;
        // });
        // this.props.addTranslation(result);
    }
    _deal_features() {
        let result = [];
        let availableNow = (
            <div className="feature-item">
                <div className="feature-item-tooltip left-side">
                    <Translate id="AbilityToUse"></Translate>
                </div>
                <div className="inner">
                    <div className="sprites deal-time"></div>
                    <span><Translate id="AbilityToUseOf"></Translate> <br /> <Translate id="BuyingMoment"></Translate></span>
                </div>
            </div>
        )
        let withoutLimit = (
            <div className="feature-item">
                <div className="feature-item-tooltip left-side">
                    <Translate id="NumberOfPurchases"></Translate>
                </div>
                <div className="inner">
                    <div className="sprites deal-infinite"></div>
                    <span><Translate id="NoRestrictionsOn"></Translate> <br /><Translate id="NumberOfPurchases"></Translate></span>
                </div>
            </div>
        )
        let coupon = (
            <div className="feature-item">
                <div className="feature-item-tooltip right-side">
                    <Translate id="EveryPersonCoupons"></Translate>
                </div>
                <div className="inner">
                    <div className="sprites deal-tag"></div>
                    <span>
                        <Translate id="EveryPersonCoupons"></Translate>
                        <Translate id="EveryDiscountCoupon"></Translate> <br /> <Translate id="IsForOne"></Translate></span>
                </div>
            </div>
        )
        let printLess = (
            <div className="feature-item">
                <div className="feature-item-tooltip right-side">
                    <Translate id="GreenCoupons"></Translate>
                </div>
                <div className="inner">
                    <div className="sprites deal-green-dc"></div>
                    <span className="green-dc"><Translate id="GreenOfoghs"></Translate> <br /><Translate id="NoNeedToPrint"></Translate></span>
                </div>
            </div>
        )
        if (this.state.offer.availableNow)
            result.push(availableNow)
        if (this.state.offer.withoutLimit)
            result.push(withoutLimit)
        if (this.state.offer.coupon)
            result.push(coupon)
        if (this.state.offer.printLess)
            result.push(printLess)
        return result;
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this._getOffer();
        // this.setState({
        //     offer: {
        //         detail: {
        //             id: "1", title: "کنسرت فریدون آسرایی", url: "", location: "تهران",
        //             description: "آهای خوشگل عاشق: کنسرت بزرگ فریدون آسرایی در سالن میلاد نمایشگاه بین المللی تا ۵۰% تخفیف",
        //             discount: 50, sold: 78, price: 60, finalPrice: 30, deadline: "11:09:53"
        //         },
        //         features: <div>
        //             <p>بلیت ۶۰۰۰۰ تومانی کنسرت بزرگ فریدون آسرایی</p><p>بلیت ۷۵۰۰۰ تومانی کنسرت بزرگ فریدون آسرایی&nbsp;</p><p>بلیت ۸۵۰۰۰ تومانی کنسرت بزرگ فریدون آسرایی&nbsp;</p><p>بلیت ۹۰۰۰۰ تومانی کنسرت بزرگ فریدون آسرایی&nbsp;</p><p>بلیت ۹۵۰۰۰ تومانی کنسرت بزرگ فریدون آسرایی</p><p>بلیت ۱۰۰۰۰۰ تومانی کنسرت بزرگ فریدون آسرایی</p><p>بلیت ۱۰۵۰۰۰ تومانی کنسرت بزرگ فریدون آسرایی</p><p>بلیت ۱۱۰۰۰۰ تومانی کنسرت بزرگ فریدون آسرایی</p><p>بلیت ۱۲۰۰۰۰ تومانی کنسرت بزرگ فریدون آسرایی</p><p>بلیت ۱۲۵۰۰۰ تومانی کنسرت بزرگ فریدون آسرایی&nbsp;</p><p>بلیت ۱۴۰۰۰۰ تومانی کنسرت بزرگ فریدون آسرایی</p><p>
        //                 برای انتخاب نوع بلیت و سانس روی دکمه&nbsp;خرید&nbsp;کلیک
        //                 کنید.
        //             </p>
        //             <p>&nbsp;</p>
        //             <ul className="list">
        //                 <li><span><strong>روز اجرا: ۱۲ تیر</strong></span></li>
        //                 <li>
        //                     <span>
        //                         <strong>محل برگزاری:&nbsp;</strong>سالن میلاد نمایشگاه
        //                         بین المللی
        //             </span>
        //                 </li>
        //                 <li><span><strong>سانس اول:</strong> 19:45</span></li>
        //                 <li><span><strong>سانس دوم:</strong> 22:30</span></li>
        //                 <li><span>ظرفیت به تعداد محدود</span></li>
        //                 <li><span>اولویت جایگاه بر اساس زمان خرید</span></li>
        //             </ul><p>&nbsp;</p>
        //             <ul><li>شبی با شکوه همراه با خاطره انگیز ترین موزیک های سالیان اخیر</li><li>"همراه با اجرای آهنگ "آهای خوشگل عاشق...</li><li>خاطره ای شگفت انگیز را برای خودتان ثبت کنید</li></ul></div>,
        //         terms: {
        //             list: <div>
        //                 <li>
        //                     <span>
        //                         یک ساعت پیش از آغاز برنامه برای دریافت بلیط به سالن
        //                         مراجعه کنید.&nbsp;
        //                         </span>
        //                 </li>
        //                 <li>
        //                     <span>
        //                         وارد کردن شماره تماس خود هنگام خرید، الزامی
        //                         است.&nbsp;
        //                         </span>
        //                 </li>
        //                 <li>
        //                     <span>
        //                         قابل ذکر است که جایگاه صندلی شما مطابق با ارزش واقعی بلیت
        //                         شماست.&nbsp;
        //                         </span>
        //                 </li>
        //                 <li>
        //                     <span>
        //                         امکان استفاده از روش تحویل در محل وجود
        //                         ندارد.&nbsp;
        //                         </span>
        //                 </li>
        //                 <li>
        //                     <span>
        //                         افقی‌های عزیز که خرید خود را به صورت کارت به کارت
        //                         انجام می‌دهند حتما جهت دریافت کد افق خود با شرکت تماس حاصل
        //                         فرمایند. در غیر اینصورت مسئولیتی برعهده افق نیست.
        //                         </span>
        //                 </li>
        //             </div>,
        //             detail: {
        //                 dateFrom: "1398/4/12", dateTo: "1398/9/12",
        //                 responsiveness: "در دو سانس ۱۹:۴۵ و ۲۲:۳۰", service: "چهارشنبه ۱۲ تیرماه",
        //                 phone: "79264034", address: "Ghubrah, Muscat"
        //             }
        //         },
        //         description: <div><p>کنسرت فريدون آسرايي</p>
        //             <p></p></div>
        //     }
        // });
    }
    render() {
        return (
            <div className="container">
                <div id="tkh-message"></div>
                <div className="container clear relative-cnt main-container deal-page-container  in-moment">
                    <article>
                        <div className="deal-details-wrapper deal-page-card">
                            <div className="deal-detail-info-wrapper">
                                <div className="deal-info-header">
                                    <div className="deal-vendor-info">
                                        <a className="vendor-name " href="" title={this.state.offer.title}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#575757" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M12 18H6v-4h6m9 0v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6m0-10H4v2h16V4z"></path>
                                            </svg>
                                            {this.state.provider.title}
                                        </a>
                                        <a className="vendor-location" href="">
                                            <span className="icon-location"></span>
                                            <span className="text">{this.state.provider.address}</span>
                                        </a>
                                    </div>
                                    <h1 className="deal-title">
                                        {/* <div dangerouslySetInnerHTML={{ __html: this.state.offer.description }} /> */}
                                        {this.state.offer.title}
                                    </h1>
                                </div>
                            </div>
                            <div className="sliders-wrapper clear relative-cnt">
                                <div id="deal-page-slider" className="mightyslider_modern_skin black tkh-deal-page-slider rtl-slider horizontal mightySlider">
                                    {/* <div className="slides-counter">
                                        <span className="active-slide-index number-font">10</span>
                                        <em>/</em>
                                        <span className="slides-length number-font">12</span>
                                    </div> */}
                                    <div style={{ textAlign: "center" }}>
                                        <img src={`/images/Offers/${this.state.offer.url}`} alt={this.state.offer.title} style={{ width: "800px", height: "400px", borderRadius: "5px" }} />
                                    </div>
                                </div>
                                {/* <SlideShow api={this.props.api} /> */}
                            </div>
                            <div className="deal-detail-info-wrapper deal-detail-info-wrapper--sell thk-interest-tracker" data-interest-value="156670" data-interest-type="product" data-interest-period="1">
                                <div className="deal-details clear deal-details-single  in-moment no-rate  tkh-sale" data-product-id="156670" data-can-checkout="1" data-details="">
                                    <div className="deal-details-right-section clear">
                                        <div className="deal-discount" style={this.props.theme.dealsDeal}>
                                            <span className="icon-percent hide-on-desktop"></span>
                                            <span className="deal-discount-number-wrapper">
                                                <span className="deal-discount-number">{this.state.offer.discount * 100}</span>
                                                <em className="deal-discount-percent-sign number-font">%</em>
                                            </span>
                                            <span className="deal-discount-text"><Translate id="discount"></Translate></span>
                                        </div><div className="deal-price">
                                            <div className="deal-final-price tkh-price">
                                                <span className="deal-final-price-number number-font" data-template="%p">{this.state.offer.finalPrice}</span>
                                                <span className="deal-final-price-text"><Translate id="currency"></Translate></span>
                                            </div><div className="deal-retail-price">
                                                <span className="deal-retail-price-number number-font">{this.state.offer.price}</span>
                                                <span className="deal-retail-price-text"><Translate id="currency"></Translate></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="deal-details-middle-section clear">
                                        <div className="deal-rate-sold clear">
                                            <div className="deal-sold tkh-sold" data-template="">{randomBytes}</div>
                                        </div>
                                        <div className="deal-timer tkh-timer" data-product-id="156670">
                                            <div className="deal-timer-text-wrapper clear" style={this.props.theme.right}>
                                                <span className="icon-alarm" style={this.props.theme.right}></span>
                                                <span className="deal-timer-text"><Translate id="PurchaseDeadline"></Translate></span>
                                            </div>
                                            <div className="deal-countdown flip-clock-wrapper">
                                                <span className="flip-clock-divider days">
                                                    <span className="flip-clock-label"><Translate id="Day"></Translate></span>
                                                </span>
                                                <ul className="flip ">
                                                    <li className="flip-clock-before">
                                                        <a href="javascript:void(0)">
                                                            <div className="up">
                                                                <div className="shadow"></div>
                                                                <div className="inn">9</div>
                                                            </div>
                                                            <div className="down">
                                                                <div className="shadow"></div>
                                                                <div className="inn">9</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="flip-clock-active">
                                                        <a href="javascript:void(0)">
                                                            <div className="up">
                                                                <div className="shadow"></div>
                                                                <div className="inn">0</div>
                                                            </div>
                                                            <div className="down">
                                                                <div className="shadow"></div>
                                                                <div className="inn">0</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <ul className="flip ">
                                                    <li className="flip-clock-before">
                                                        <a href="javascript:void(0)">
                                                            <div className="up">
                                                                <div className="shadow"></div>
                                                                <div className="inn">5</div>
                                                            </div>
                                                            <div className="down">
                                                                <div className="shadow"></div>
                                                                <div className="inn">5</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="flip-clock-active">
                                                        <a href="javascript:void(0)">
                                                            <div className="up">
                                                                <div className="shadow"></div>
                                                                <div className="inn">6</div>
                                                            </div>
                                                            <div className="down">
                                                                <div className="shadow"></div>
                                                                <div className="inn">6</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <span className="flip-clock-divider hours">
                                                    <span className="flip-clock-label">ساعت</span>
                                                    <span className="flip-clock-dot top"></span>
                                                    <span className="flip-clock-dot bottom"></span>
                                                </span>
                                                <ul className="flip ">
                                                    <li className="flip-clock-before">
                                                        <a href="javascript:void(0)">
                                                            <div className="up">
                                                                <div className="shadow"></div>
                                                                <div className="inn">9</div>
                                                            </div>
                                                            <div className="down">
                                                                <div className="shadow"></div>
                                                                <div className="inn">9</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="flip-clock-active">
                                                        <a href="javascript:void(0)">
                                                            <div className="up">
                                                                <div className="shadow"></div>
                                                                <div className="inn">0</div>
                                                            </div>
                                                            <div className="down">
                                                                <div className="shadow"></div>
                                                                <div className="inn">0</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <ul className="flip ">
                                                    <li className="flip-clock-before">
                                                        <a href="javascript:void(0)">
                                                            <div className="up">
                                                                <div className="shadow"></div>
                                                                <div className="inn">9</div>
                                                            </div>
                                                            <div className="down">
                                                                <div className="shadow"></div>
                                                                <div className="inn">9</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="flip-clock-active">
                                                        <a href="javascript:void(0)">
                                                            <div className="up">
                                                                <div className="shadow"></div>
                                                                <div className="inn">0</div>
                                                            </div>
                                                            <div className="down">
                                                                <div className="shadow"></div>
                                                                <div className="inn">0</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <span className="flip-clock-divider minutes">
                                                    <span className="flip-clock-label">دقیقه</span>
                                                    <span className="flip-clock-dot top"></span>
                                                    <span className="flip-clock-dot bottom"></span>
                                                </span>
                                                <ul className="flip ">
                                                    <li className="flip-clock-before">
                                                        <a href="javascript:void(0)">
                                                            <div className="up">
                                                                <div className="shadow"></div>
                                                                <div className="inn">2</div>
                                                            </div>
                                                            <div className="down">
                                                                <div className="shadow"></div>
                                                                <div className="inn">2</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="flip-clock-active">
                                                        <a href="javascript:void(0)">
                                                            <div className="up">
                                                                <div className="shadow"></div>
                                                                <div className="inn">3</div>
                                                            </div>
                                                            <div className="down">
                                                                <div className="shadow"></div>
                                                                <div className="inn">3</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <ul className="flip  play">
                                                    <li className="flip-clock-before">
                                                        <a href="javascript:void(0)">
                                                            <div className="up">
                                                                <div className="shadow"></div>
                                                                <div className="inn">6</div>
                                                            </div>
                                                            <div className="down">
                                                                <div className="shadow"></div>
                                                                <div className="inn">6</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="flip-clock-active">
                                                        <a href="javascript:void(0)">
                                                            <div className="up">
                                                                <div className="shadow"></div>
                                                                <div className="inn">5</div>
                                                            </div>
                                                            <div className="down">
                                                                <div className="shadow"></div>
                                                                <div className="inn">5</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="deal-details-left-section clear">
                                        <button type="button" className="gift-btn tkh-grouped-gift-btn" style={this.props.theme.giftBtn} data-giftaddress="/ajax/account/enablegift">
                                            <span className="icon-gift"></span>
                                            <span className="text"><Translate id="GiveAGift"></Translate></span>
                                        </button>
                                        <Link className="buy-btn tkh-grouped-buy-btn" to={{
                                            pathname: '/Check',
                                            offerProps: {
                                                offerId: this.props.match.params.id,
                                                name: this.state.offer.title,
                                                url: this.state.offer.url,
                                                selectedQuantity: 1,
                                                unitPrice: this.state.offer.finalPrice,
                                                isQuantityOpen: false,
                                                offerPrice: this.state.offer.offerPrice
                                            }
                                        }}><p className="btn-text"><span className="icon-cart"></span><Translate id="BuyNow"></Translate></p></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="deal-features-wrapper deal-page-card clear">
                            <section className="deal-features deal-features-right clear col" style={this.props.theme.dealFeaturesRight}>
                                <div className="deal-card-title clear">
                                    <span className="icon-star" style={this.props.theme.itemsListUlLiLinkImg}></span>
                                    <h2 className="title" style={this.props.theme.right}><Translate id="Features"></Translate> {this.state.offer.title}</h2>
                                </div>
                                <div className="deal-page-card-cnt clear">
                                    <div dangerouslySetInnerHTML={{ __html: this.state.offer.featuresTop }} />
                                </div>
                            </section>
                            <section className="deal-features deal-features-left clear col">
                                <input id="show-phone-no" type="hidden" value="-" />
                                <div className="deal-card-title clear">
                                    <span className="icon-info" style={this.props.theme.itemsListUlLiLinkImg}></span>
                                    <h2 className="title" style={this.props.theme.right}><Translate id="TermsOfUse"></Translate></h2>
                                </div>
                                <div className="deal-page-card-cnt clear">
                                    <div className="deal-features-list clear">
                                        {this._deal_features().map((item) => {
                                            return item;
                                        })}
                                    </div>
                                    <div className="deal-custom-conditions">
                                        <ul className="list">
                                            {this.state.offer.featuresTop}
                                        </ul>
                                    </div>
                                    <div className="deal-vendor-info">
                                        <div className="deal-vendor-info-row clear">
                                            <div className="row-icon">
                                                <span className="icon-event"></span>
                                            </div><div className="row-text">
                                                <span className="row-text-caption"><Translate id="BuyingMoment"></Translate>:</span>
                                                <span className="row-text-value"><Translate id="From"></Translate> <em className="number-font">{this.state.offer.startDateTime}</em> <Translate id="To"></Translate> <em className="number-font">{this.state.offer.expirationDate}</em></span>
                                            </div>
                                        </div><div className="deal-vendor-info-row clear">
                                            <div className="row-icon">
                                                <span className="icon-clock"></span>
                                            </div><div className="row-text">
                                                <span className="row-text-caption"><Translate id="ServiceTime"></Translate>:</span>
                                                <span className="row-text-value">{this.state.offer.serviceHours}</span>
                                            </div>
                                        </div><div className="deal-vendor-info-row clear">
                                            <div className="row-icon">
                                                <span className="icon-calendar"></span>
                                            </div><div className="row-text">
                                                <span className="row-text-caption"><Translate id="ServiceDays"></Translate>:</span>
                                                <span className="row-text-value">{this.state.offer.serviceDays}</span>
                                            </div>
                                        </div><div className="deal-vendor-info-row tkh-deal-vendor-phone-number clear" data-product-id="156670">
                                            <div className="row-icon">
                                                <span className="icon-tel"></span>
                                            </div><div className="row-text">
                                                <span className="row-text-caption">
                                                    <Translate id="PhoneNumber"></Translate>&nbsp;
                                                    {/* {this.state.offer.provider.title}: */}
                                                </span>
                                                {/* <span className="show-phone-number">{this.state.offer.provider.mobile}</span> */}
                                                {/* <span className="show-phone-number">نمایش شماره تماس</span> */}
                                                {/* <span className="row-text-value number-font value-phone-number"></span> */}
                                            </div>
                                        </div>
                                        <div className="deal-vendor-info-row clear">
                                            <div className="row-icon">
                                                <span className="icon-location"></span>
                                            </div>
                                            <div className="row-text">
                                                <span className="row-text-caption">آدرس:</span>
                                                <span className="row-text-value">
                                                    {/* {this.state.offer.provider.address} */}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tmap" className="deal-map-wrapper clear" data-location="35.790057,51.399199">
                                        <div className="map-view-placeholder">
                                            <a href="javascript:void(0)" className="view-map-btn">
                                                <span className="icon-map"></span>
                                                <Translate id="SeeTheAddress"></Translate> {this.state.offer.title}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <section className="deal-description-wrapper deal-page-card clear">
                            <div className="deal-card-title clear">
                                <span className="deal-description-dot" style={this.props.theme.itemsListUlLiLinkImg}></span>
                                <h2 className="title" style={this.props.theme.right}>
                                    <Translate id="FurtherDetails"></Translate>&nbsp;
                                        <a href="" title={this.state.offer.title}>
                                        {this.state.offer.title}
                                    </a>
                                </h2>
                            </div>
                            <div className="deal-page-card-cnt clear">
                                <div dangerouslySetInnerHTML={{ __html: this.state.offer.description }} />
                            </div>
                        </section>
                    </article>
                    {/* <Translate key={this.props.match.params.id}>
                        {({ translate }) => ( */}
                    <Comment theme={this.props.theme} offerTitle={/*(translate(this.props.match.params.id))*/this.state.offer.title} offer={this.props.match.params.id} api={this.props.api} />
                    {/* )}
                    </Translate> */}
                </div>
            </div>
        );
    }
}

export default withLocalize(OfferDetail);