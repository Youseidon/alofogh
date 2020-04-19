import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

class BasketSteps extends Component {
    totalAmount = 0;
    totalSave = 0;
    constructor(props) {
        super(props);
        this.state = { step: 1, order: {}, paymentWay: true };
        this._getOrderData = this._getOrderData.bind(this);
        this._toggleQuantity = this._toggleQuantity.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }
    _getOrderData() {
        let url = this.props.api + '/orders/' + this.props.match.params.id;
        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.setState({ order: result })
                // console.log(result)
            });
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    componentWillMount() {
        this.setState({
            offers: [
                this.props.location.offerProps
            ],
        });
    }
    _toggleQuantity(offerIndex) {
        let offersCopy = JSON.parse(JSON.stringify(this.state.offers))
        offersCopy[offerIndex].isQuantityOpen = !offersCopy[offerIndex].isQuantityOpen;
        this.setState({
            offers: offersCopy
        })
    }
    _numeratePrice() {
        let total = 0;
        this.state.offers.map((item) => {
            total += (item.unitPrice * item.selectedQuantity);
        });
        this.totalAmount += total;
        return total;
    }
    _numerateSave() {
        let total = 0;
        this.state.offers.map((item) => {
            total += (item.offerPrice * item.selectedQuantity);
        });
        this.totalSave += total;
        return total;
    }
    handleCheck(e) {
        let id = e.currentTarget.dataset.id;
        let index = e.currentTarget.dataset.index;

        let offersCopy = JSON.parse(JSON.stringify(this.state.offers))
        offersCopy[index].selectedQuantity = id;
        offersCopy[index].isQuantityOpen = !offersCopy[index].isQuantityOpen;
        this.setState({
            offers: offersCopy
        })
    }
    _changeStep(current, target) {
        let setStep = current + target;
        this.setState({ step: setStep });
    }
    _changePaymentWay() {
        let currentState = this.state.paymentWay;
        this.setState({ paymentWay: !currentState })
    }
    _numerateBasket() {
        return (
            <tbody className="tkh-cart checkout-table-tbody " data-itemdetails="" data-isgiftenabled="">
                {this.state.offers.map((item, index) => {
                    return (
                        <tr className="tkh-cart-item" data-item-id="8061845">
                            <td className="item-info">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="remove-row">
                                                <a href="" title="Remove item" className="btn-remove btn-remove2 tkh-cart-item-remove"><span className="icon-close"></span></a>
                                            </td>
                                            <td className="item-img">
                                                <a href="" title={item.name}>
                                                    <img src={`/images/Offers/${item.url}`} width="87" height="56" alt={item.name} />
                                                </a>
                                            </td>
                                            <td className="item-text">
                                                <a href="">
                                                    <h2>{item.name}</h2>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="price">
                                <span>{item.unitPrice} <Translate id="Rial"></Translate></span></td>
                            <td className="count">
                                <div className={(item.isQuantityOpen) ? "control-wrapper dropdown  click-flag dropdown-visible" : "control-wrapper dropdown"} >
                                    <div className="control">
                                        <a href="javascript:void(0)" className="default-text" onClick={() => this._toggleQuantity(index)}>
                                            <span className="value tkh-cart-item-quantity">{item.selectedQuantity}</span>
                                            <span className="item-arrow left icon-arrow-drop-up"></span>
                                        </a>
                                        <div className="dropdown-items">
                                            <ul id="" name="cart[][qty]">
                                                <li className="tkh-cart-item-quantity-chooser active" onClick={this.handleCheck.bind(this)} data-index={index} data-id="1">1</li>
                                                <li className="tkh-cart-item-quantity-chooser" onClick={this.handleCheck.bind(this)} data-index={index} data-id="2">2</li>
                                                <li className="tkh-cart-item-quantity-chooser" onClick={this.handleCheck.bind(this)} data-index={index} data-id="3">3</li>
                                                <li className="tkh-cart-item-quantity-chooser" onClick={this.handleCheck.bind(this)} data-index={index} data-id="4">4</li>
                                                <li className="tkh-cart-item-quantity-chooser" onClick={this.handleCheck.bind(this)} data-index={index} data-id="5">5</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="price"><span className="number-font">{(item.unitPrice * item.selectedQuantity)}<Translate id="Rial"></Translate></span>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        );
    }
    stepReview() {
        return (
            <div className="tab-cnt active" id="tab1">
                <div className="top-right-side">
                    <div className="title clear">
                        <h2 className="right"><span><Translate id="Cart"></Translate></span></h2>
                    </div>
                </div>
                <div className="top-left-side">
                    <button type="submit" onClick={() => this._changeStep(this.state.step, 1)} className="tkh-cart-submit-btn btn btn-green" data-submitpath="">
                        <Translate id="CompletePurchase"></Translate><span className="icon-arrow-back"></span>
                    </button>
                </div>
                <div className="table-wrapper clear thk-interest-tracker" data-interest-value="15025683" data-interest-type="cart" data-interest-period="1">
                    <table>
                        <thead>
                            <tr>
                                <th><Translate id="OfoghName"></Translate></th>
                                <th><Translate id="Unitprice"></Translate></th>
                                <th><Translate id="Quantity"></Translate></th>
                                <th><Translate id="TotalPayment"></Translate></th>
                            </tr>
                        </thead>
                        {this._numerateBasket()}
                    </table>
                </div>
                <div className="checkout-table-footer clear">
                    <div className="right-side"></div>
                    <div className="left-side">
                        <p className="tkh-checkout-cart-totals">
                            <span><Translate id="Total"></Translate> : <em>
                                {this._numeratePrice().toString()}
                            </em><span><Translate id="Rial"></Translate></span>
                            </span>
                        </p>
                    </div>
                    <div className="cart-forms"></div>
                </div>
                <div className="checkout-total-price clear">
                    <div className="total-price">
                        <span><Translate id="TotalPayment"></Translate></span> <span className="total-price-number"><em>{this._numeratePrice().toString()} </em>ریال</span>
                    </div>
                    <div className="right-side">
                        <div className="checkout-total-discount">
                            <Translate id="Total"></Translate>
                            {this._numerateSave().toString()}
                            <Translate id="SavedMoney"></Translate>
                        </div>
                        <form id="cart-form" action="" method="get"></form>
                    </div>
                </div>
                <script type="text/template" id="gift-form-template">
                    <div className="gift-form tkh-gift-message-form clear gift-form--narrow">
                        <img className="gift-form__box" src="" /><div
                            className="gift-form__deal">
                            <div className="gift-form__deal__img">
                                <img src="" />
                            </div>
                            <div
                                className="gift-form__deal__info">
                                <h3>AL OFOGH OFFER</h3>
                            </div>
                        </div>
                        <div className="gift-form__form">
                            <div
                                className="control-wrapper required">
                                <label className="control-label" htmlFor="from"><Translate id="OnBehalfOf"></Translate></label>
                                <div className="control">
                                    {/* <input
                            type="text" name="giftmessageFrom"
                            data-name="giftmessage[15025683][from]"
                            title="From"
                            value="نوری زاده یوسف"
                            className="input-text validation-passed giftTemplateHiddenInput"
                            placeholder="شایان حجت" /> */}
                                </div>
                            </div>
                            <div className="control-wrapper required">
                                <label className="control-label" htmlFor="to"><Translate id="To"></Translate></label>
                                <div className="control">
                                    {/* <input
                            type="text" name="giftmessageTo"
                            data-name="giftmessage[15025683][to]"
                            title="To"
                            value=""
                            className="input-text validation-passed giftTemplateHiddenInput"
                            placeholder="احمدرضا غروی" /> */}
                                </div>
                            </div>
                            <div className="control-wrapper textarea required">
                                <label className="control-label" htmlFor="gift-message"><Translate id="Message"></Translate></label>
                                <div className="control">
                                    <textarea className="input-text validation-passed giftmessage-area giftTemplateHiddenInput"
                                        name="giftmessageMessage"
                                        data-name="giftmessage[15025683][message]"
                                        title="Message"
                                        rows="5" cols="10"
                                        placeholder="با تبریک تولدت و با آرزوی سالی به از سال های گذشته، امیدوارم در شب تولدت خوش باشی."></textarea>
                                </div>
                            </div>
                            <div className="btn-wrapper no-label">
                                <a href="javascript:void(0)" className="btn btn-orange close-gift-modal"><Translate id="Cancel"></Translate></a>
                                <a href="javascript:void(0)" className="btn btn-green save-gift-data"><Translate id="Save"></Translate></a>
                            </div>
                        </div>
                    </div>
                </script>
                <p>
                    <input type="hidden" name="allow_gift_messages_for_order" id="allow_gift_messages_for_order" value="1" className="checkbox" />
                    <input type="hidden" name="giftmessage[15025683][type]" value="quote" />
                </p>
                <div className="tkh-modal modal checkout-gift-modal" id="gift-modal">
                    <div className="modal-content"></div>
                </div>
                <div className="gift-messages-form" id="allow-gift-message-container">
                    <div className="inner-box"></div>
                </div>
                <div className="checkout-navigate clear">
                    <div className="left-side">
                        <button type="submit" id="tkh-cart-submit-btn" onClick={() => this._changeStep(this.state.step, 1)} className="tkh-cart-submit-btn btn btn-green" data-submitpath="">
                            <Translate id="CompletePurchase"></Translate><span className="icon-arrow-back"></span>
                        </button>
                    </div>
                    <div className="right-side">
                        <a href="/" className="btn right-icon"><Translate id="ReturnToMainPage"></Translate> <span className="icon-arrow-forward"></span>
                        </a>
                    </div>
                </div>
                <div className="other-options">
                </div>
            </div>
        );
    }
    _banking() {
        return (
            this.state.offers.map((item, index) => {
                let offerIdTagName = "[" + index + "]" + ".OfferId";
                let quantityTagName = "[" + index + "]" + ".Quantity";
                return (
                    <div>
                        <input type="hidden" name={offerIdTagName} value={item.offerId} />
                        <input type="hidden" name={quantityTagName} value={item.selectedQuantity} />
                    </div>
                );
            })
        );
    }
    stepPayment() {
        return (
            <div className="tab-cnt tkh-payment payment-tab" data-isvirtual="1" data-isguest="" id="tab3" style={{ display: "block" }}>
                <div className="title clear"><h2 className="right"><span><Translate id="PaymentMethod"></Translate></span></h2></div>
                <div id="tkh-payment-methods" className="address-list payment clear">
                    <div className={(this.state.paymentWay) ? "item-address tkh-payment-item active" : "item-address tkh-payment-item"} data-method="samanmobilepayment">
                        <div className="text" onClick={() => this._changePaymentWay()}>
                            <div className="pay-icon saman" style={{ 'background-image': 'url(/images/Credit.png)' }}></div>
                            <span>CREDIT CARD</span>
                            <span>[Any type of Credit Card is accpeted]</span>
                        </div>
                    </div>
                    <div className={(!this.state.paymentWay) ? "item-address tkh-payment-item big-item active" : "item-address tkh-payment-item big-item"} data-method="samanmobilepayment">
                        <div className="text" onClick={() => this._changePaymentWay()}>
                            <div className="pay-icon saman" style={{ 'background-image': 'url(/images/Debit.png)' }}></div>
                            <span>DEBIT CARD</span>
                            <span>[Any type of Debit Card is accpeted]</span>
                        </div>
                    </div>
                </div>
                <div className="checkout-total-price clear">
                    <div className="total-price">
                        <span><Translate id="TheAmountPayable"></Translate></span>
                        <span className="total-price-number"><em>{this._numeratePrice().toString()}</em><Translate id="Rial"></Translate></span>
                    </div>
                    <div className="right-side">
                        <div className="alert alert-blue">
                            <span className="icon-info"></span>
                            <p><Translate id="PaymentNotice"></Translate></p>
                        </div>
                    </div>
                </div>
                <div className="checkout-navigate clear">
                    <div className="success" style={{ display: "none" }}></div>
                    <ul className="alert alert-green alert-notes" style={{ display: "none" }}></ul>
                    <ul className="alert alert-red alert-error" style={{ display: "none" }}></ul>
                    <div className="left-side">
                        <form action={`http://${this.props.ip}/Payment/Index`} method="post">
                            {this._banking()}
                            <button type="submit" className="btn btn-green tkh-payment-next-btn" data-label="پرداخت و تکمیل خرید" data-span="icon-arrow-back"><Translate id="PayAndCompleteThePurchase"></Translate><span className="icon-arrow-back"></span></button>
                        </form>
                    </div>
                    <div className="right-side">
                        <button type="button" onClick={() => this._changeStep(this.state.step, -1)} className="btn right-icon tkh-payment-prev-btn"><Translate id="PreviouStep"></Translate><span className="icon-arrow-forward"></span></button>
                    </div>
                </div>
            </div>
        );
    }
    isEmpty(obj) {
        if (obj == null) return true;
        if (obj.length > 0) return false;
        if (obj.length === 0) return true;
        if (typeof obj !== "object") return true;
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) return false;
        }
        return true;
    }
    _SubmittedOrder() {
        if (!this.isEmpty(this.state.order)) {
            let Offer = {};
            for (var item in this.state.order.orderOffers) {
                Offer = this.state.order.orderOffers[item].offer;
                return (
                    <div className="coupon-item">
                        <div className="coupon-flex-box">
                            <div className="coupon-flex-box__item-name">
                                <span>
                                    {Offer.title}  ({Offer.discount * 100}% <Translate id="Discount"></Translate>)
                            </span>
                            </div>
                        </div>
                        <div className="coupon-flex-box">
                            <div className="btn-box-right">
                                {this.state.order.orderOffers[item].quantity}
                                <Translate id="Quantity"></Translate>
                            </div>
                            <div className="btn-box">
                                <a href="" className="btn gray-btn" target="_blank">
                                    <Translate id="SeeOfoghs"></Translate>
                                </a>
                                <a href="" className="btn btn-green download user-info-form" target="_blank">
                                    <Translate id="DownloadOfoghs"></Translate>
                                </a>
                            </div>
                        </div>
                    </div>
                );
            };
        }
        else {
            return (<div></div>);
        }
    }
    stepSuccess() {
        return (
            <div className="tab-cnt tkh-success success-box-custom" id="tab4" style={{ "display": "block" }}>
                <div className="checkout-finish thk-interest-tracker">
                    <div className="success-message">
                        <div className="success-message-box">
                            <h2 className="success-message-title"><Translate id="Thanks"></Translate></h2>
                            <div id="hotel_offline_msg">
                                {/* <p>کدهای افق شما به آدرس ایمیل nou.yousef@gmail.com ارسال شد و به صورت همیشگی در حساب کاربری خود به آن‌ها دسترسی خواهید داشت.
                    با ثبت شماره تلفن خود، می‌توانید کدها را به صورت پیامک هم دریافت کنید تا درصورت نبود اینترنت، همچنان بتوانید از افق‌های خود استفاده کنید.</p> */}
                            </div>
                            <div id="hotel_online_msg">
                                {/* <p>کدهای افق شما به آدرس ایمیل nou.yousef@gmail.com ارسال شد و به صورت همیشگی در حساب کاربری خود به آن‌ها دسترسی خواهید داشت.
                                  با ثبت شماره تلفن خود، می‌توانید کدها را به صورت پیامک هم دریافت کنید تا درصورت نبود اینترنت، همچنان بتوانید از افق‌های خود استفاده کنید.</p> */}
                            </div>
                            <div id="train_offline_msg">
                                {/* <p>خرید شما با موفقیت انجام شد. لطفا به منظور صدور بلیط، با استفاده از فرم اطلاعات مسافر در پایین صفحه، اطلاعات خود را وارد نمایید</p> */}
                            </div>
                            <div id="train_online_msg">
                                <p>
                                    <span style={{ color: "#ff5a5f", "font-weight": " bold" }}>
                                        {/* خرید شما انجام شده اما برخی آیتم های آن نیازمند تکمیل اطلاعات بیشتر است.خواهشمندیم هرچه سریعتر نسبت به تکمیل اطلاعات اقدام بفرمایید. */}
                                    </span>
                                </p>
                                {/* <p style={{ "font-weight": "bold" }}>برای تکمیل سفارش می بایست
                                    <a href=""> فرم اطلاعات تکمیلی را پر نمایید.</a>
                                </p> */}
                                {/* <a className="btn btn-blue" href="">تکمیل اطلاعات سفارش</a> */}
                                {/* <p>در صورتیکه اقدام به خرید خدمات نیز نموده‌اید از همین‌جا می توانید افق های خود را پرینت بگیرید.</p> */}
                            </div>
                            <div id="simple_and_train_offline_msg">
                                {/* <p>کدهای افق شما به آدرس ایمیل nou.yousef@gmail.com ارسال شد و به صورت همیشگی در حساب کاربری خود به آن‌ها دسترسی خواهید داشت.
                    با ثبت شماره تلفن خود، می‌توانید کدها را به صورت پیامک هم دریافت کنید تا درصورت نبود اینترنت، همچنان بتوانید از افق‌های خود استفاده کنید.</p>
                                <p>همچنین به منظور صدور بلیط قطار، لطفا با استفاده از فرم اطلاعات مسافر در پایین صفحه، اطلاعات خود را وارد نمایید تا بلیط قطار به نام شما صادر گردد.</p> */}
                            </div>
                            <div id="airplane_msg">
                                {/* <p>خرید شما با موفقیت انجام شد.</p> */}
                                {/* <p style={{ "font-weight": "bold" }}>بلیت‌های هواپیما طی ۲ ساعت آینده برای شما ایمیل خواهد شد. در صورتی که
                    ایمیل به دست شما نرسید از طریق تلگرام به شماره ۰۹۳۷۰۵۵۹۸۹۲ پیام دهید.</p> */}
                            </div>
                            <div id="default_msg">
                                {/* <p>کدهای افق شما به آدرس ایمیل nou.yousef@gmail.com ارسال شد و به صورت همیشگی در حساب کاربری خود به آن‌ها دسترسی خواهید داشت.
                    با ثبت شماره تلفن خود، می‌توانید کدها را به صورت پیامک هم دریافت کنید تا درصورت نبود اینترنت، همچنان بتوانید از افق‌های خود استفاده کنید.</p> */}
                            </div>
                            <div className="get-mobile-box inline-form">
                                <div className="row">
                                    <div className="get-mobile-box-origin">
                                        <div className="flex-box col-md-5">
                                            <input type="text" name="mobilenum" id="mobilenumget" className="col-md-9" placeholder="7926*******" />
                                            <button id="save_mobile_num" className="btn-blue btn-mobile get-mobile-btn col-md-2"><Translate id="Submit"></Translate></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-success-box" style={{ "display": "none" }}>
                                    {/* شماره موبایل شما با موفقیت ثبت شد. */}
                                    </div>
                                <div className="mobile-error-box" style={{ "display": "none" }}>
                                    {/* مشکلی پیش آمده, دوباره تلاش نمایید. */}
                                    </div>
                            </div>
                        </div>
                        <div className="success-loading tkh-loading-coupons">
                            <div className="success-loading__loading" style={{ "display": "none" }}>
                                <div className="s-loading">
                                    <div className="s-loading__inner">
                                        <div className="s-loading__item s-loading__item--1"></div>
                                        <div className="s-loading__item s-loading__item--2"></div>
                                        <div className="s-loading__item s-loading__item--3"></div>
                                        <div className="s-loading__item s-loading__item--4"></div>
                                        <div className="s-loading__item s-loading__item--5"></div>
                                        <div className="s-loading__item s-loading__item--6"></div>
                                        <div className="s-loading__item s-loading__item--7"></div>
                                        <div className="s-loading__item s-loading__item--8"></div>
                                    </div>
                                </div>
                                {/* <img src="" alt="لطفا صبر کنید..." />
                                <p>خرید شما با موفقیت انجام شد. کوپن ها در حال آماده شدن هستند...</p> */}
                            </div>
                            <div className="success-loading__error">
                                <span className="icon-error"></span>
                                {/* <span className="thanku count number-font order-code"> شماره سفارش شما: 103911831  </span> */}
                                {/* <p>با عرض پوزش!</p>
                                <p>در فرآیند ایجاد کوپن ها، خطایی پیش آمد.</p> */}
                                <p>
                                    {/* <a href="/contact-us" target="_blank">لطفا به آدرس ایمیل خود مراجعه نمایید و در صورتی که ایمیلی دریافت نکرده اید ,با واحد پشتیبانی تماس بگیرید</a> */}
                                </p>
                            </div>
                            <div className="success-loading__codes">
                                <input type="hidden" name="items-data" value="" />
                                <p>
                                    <div className="coupons-box">
                                        <div className="top-coupons">
                                            <h3><Translate id="PurchasedCodes"></Translate></h3>
                                            <span className="sold-coupon-code">
                                                <Translate id="OrderId"></Translate> : {this.props.match.params.id.toString().substring(0, 8)}
                                            </span>
                                        </div>
                                        {this._SubmittedOrder()}
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="container tabs checkout ">
                <div className="checkout-steps tkh-os-tag-trigger" data-os-key="abandoned_cart" data-os-val="true">
                    <ul className="tab-nav">
                        <li className={(this.state.step == 1) ? "tab1 review-step active" : "tab1 review-step success "}>
                            <span>
                                <em className="icon-check"></em>
                            </span>
                            <Translate id="Cart"></Translate>
                        </li>
                        <li className={(this.state.step == 2) ? "tab2 payment-step active" : "tab2 payment-step success"}>
                            <span>2</span>
                            <Translate id="Payment"></Translate>
                        </li>
                        <li className={(this.state.step == 3) ? "tab3 success-step active" : "tab3 success-step"}>
                            <span>3</span>
                            <Translate id="GetCodes"></Translate>
                        </li>
                    </ul>
                </div>
                {this.renderSteps()}
            </div >
        );
    }
    renderSteps() {
        if (this.props.usage == "checkout") {
            if (this.state.step != 3) {
                this._getOrderData();
                this._changeStep(3, 0);
            }
            return this.stepSuccess();
        }
        if (this.state.step == 1) {
            return this.stepReview();
        }
        else if (this.state.step == 2) {
            return this.stepPayment();
        }
        else {
            return <div></div>
        }
    }
}

export default withRouter(withLocalize(BasketSteps));