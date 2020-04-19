import React, { Component } from 'react';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import City from './../header/City'

class Footer extends Component {
    render() {
        return (
            <footer className="footer ">
                <section className="footer-newsletter">
                    <div className="inner clear">
                        <div className="newsletter-form-wrapper clear" style={this.props.theme.right}>
                            <div className="footer-email-icon" style={this.props.theme.right}></div>
                            <div className="newsletter-form tkh-footer-subscribe" style={this.props.theme.defaultText} data-subscribe="/newsletter/subscriber/ajax/json/1">
                                <span className="footer-title"><Translate id="NotifyMe"></Translate></span>
                                <p style={this.props.theme.defaultText}><Translate id="EnterEmail"></Translate></p>
                                <div className="footer-newsletter-input">
                                    <form action="https://alofogh.com/">
                                        <span className="icon-email"></span>
                                        <Translate>
                                            {({ translate }) => (
                                                <input name="email" type="email" placeholder={translate("LatestDiscounts")} />
                                            )}
                                        </Translate>
                                    </form>
                                </div>
                                <button type="submit" className="btn btn-green"><Translate id="Subscribe"></Translate></button>
                            </div>
                        </div>
                        <div className="newsletter-social-links">
                            <div className="footer-newsletter-bg"></div>
                            <a href="https://telegram.me/alofogh" target="_blank" className="footer-newsletter-telegram"></a>
                            <a href="https://instagram.com/alofogh" target="_blank" className="footer-newsletter-instagram"></a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="footer-main">
                        <div className="inner clear">
                            <div className="footer-col" style={this.props.theme.footerCol}>
                                <div className="title clear">
                                    <span style={this.props.theme.right}><Translate id="AboutAlofogh"></Translate></span>
                                </div>
                                <div className="cnt" style={this.props.theme.footerCnt}>
                                    <ul>
                                        <li><a href="https://alofogh.com/alofogh/" title="درباره افق"><Translate id="AboutUs"></Translate></a></li>
                                        <li><a href="https://alofogh.com/awards" title="جوایز و افتخارات"><Translate id="Achievements"></Translate></a></li>
                                        <li><a href="https://alofogh.com/khabar" title=""><Translate id="Media"></Translate></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-col" style={this.props.theme.footerCol}>
                                <div className="title clear">
                                    <span style={this.props.theme.right}><Translate id="Cooperate"></Translate></span>
                                </div>
                                <div className="cnt" style={this.props.theme.footerCnt}>
                                    <ul>
                                        <li><a href="https://alofogh.com/jobs" title="فرصت‌های شغلی"><Translate id="JobOppurtunity"></Translate></a></li>
                                        <li><a href="https://alofogh.com/merchant-partner" title="کسب و کار خود را تبلیغ کنید"><Translate id="Advertise"></Translate></a></li>
                                        <li><a href="https://alofogh.com/b2b" title="خدمات ویژه سازمان‌ها و پرسنل"><Translate id="OrganizationCooperate"></Translate></a></li>
                                        <li><a href="https://alofogh.com/partners-question" title="سوالات متداول شرکای تجاری"><Translate id="PartnersFAQs"></Translate></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-col" style={this.props.theme.footerCol}>
                                <div className="title clear">
                                    <span style={this.props.theme.right}><Translate id="ReadMore"></Translate></span>
                                </div>
                                <div className="cnt" style={this.props.theme.footerCnt}>
                                    <ul>
                                        <li><a href="https://alofogh.com/how-it-works" title="افق چگونه کار می‌کند"><Translate id="HowAlofoghWorks"></Translate></a></li>
                                        <li><a href="https://alofogh.com/green-deals" title="افق سبز"><Translate id="GreenOffers"></Translate></a></li>
                                        <li><a href="https://alofogh.com/privacy" title="سیاست حفظ اطلاعات و حریم خصوصی کاربران"><Translate id="PrivacyPolicy"></Translate></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-col footer-data-wrapper last" style={this.props.theme.footerCol}>
                                <div className="cnt clear">
                                    <div className="footer-data">
                                        <div className="awards">
                                            <a href="https://alofogh.com/awards" className="awards-img"></a>
                                        </div>
                                        <div className="socials clear">
                                            <span className="title" style={this.props.theme.right}><Translate id="FollowAlofogh"></Translate></span>
                                            <a href="https://twitter.com/alofogh" title=""><span className="icon-twitter" style={this.props.theme.icons}></span></a>
                                            <a href="https://www.facebook.com/alofogh" title="" target="_blank"><span className="icon-facebook" style={this.props.theme.icons}></span></a>
                                            <a href="https://www.linkedin.com/company/alofogh/" title=""><span className="icon-linkedin" style={this.props.theme.icons}></span></a>
                                            <a href="http://instagram.com/alofogh/" title=""><span className="icon-instagram" style={this.props.theme.icons}></span></a>
                                            <a href="http://www.telegram.me/alofogh/" title=""><span className="icon-telegram" style={this.props.theme.icons}></span></a>
                                        </div>
                                        <div className="app-btn clear">
                                            <a href="https://alofogh.com/b2b" target="_blank" title="alofogh organizational" className="footer-btn org">
                                                <span><Translate id="OrganizationServices"></Translate></span>
                                            </a>
                                            <a href="https://alofogh.com/mobile" target="_blank" title="alofogh mobile app" className="footer-btn">
                                                <span className="icon-apple"></span>
                                                <span className="icon-android"></span>
                                                <span><Translate id="GetApplication"></Translate></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-extra">
                            <div className="inner clear">
                                <div className="footer-extra-links clear" style={this.props.theme.right}>
                                    <ul>
                                        <li><a href="https://alofogh.com/contact-us" title=""><Translate id="ContactUs"></Translate></a></li>
                                        <li><a href="https://alofogh.com/representative/" title="شرایط اخذ نمایندگی"><Translate id="Representative"></Translate></a></li>
                                        <li><a href="https://alofogh.com/customers-questions" title="سوالات متداول مشتریان"><Translate id="CustomerFAQs"></Translate></a></li>
                                        <li><a href="https://alofogh.com/change_product" title=""><Translate id="ReplacementOrders"></Translate></a></li>
                                        <li className="bank-transfer-link"><a href="https://alofogh.com/checkout/onepage/banktransfer" title="اعلام پرداخت کارت به کارت"><Translate id="PaymentAnnouncement"></Translate></a></li>
                                    </ul>
                                </div>
                                <div className="footer-extra-contact clear" style={this.props.theme.left}>
                                    <div className="telephone" itemScope="" itemType="http://schema.org/LocalBusiness">
                                        <span className="icon-tel"></span>
                                        <em itemProp="telephone">+968 - 79264034</em>
                                    </div>
                                    <div className="contact-mail">
                                        <span className="icon-email"></span>
                                        <em><a href="mailto:support@alofogh.com">SUPPORT@alofogh.COM</a></em>
                                    </div>
                                    <div className="footer-24-7-tag"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="after-footer">
                        <div className="inner">
                            <div className="footer-row">
                                <div className="footer-column" style={this.props.theme.right}>
                                    <span className="title"><Translate id="GoodSense"></Translate></span>
                                </div>
                                <div className="footer-column">
                                    <div className="namad">
                                        <div className="inner">
                                            <img src="./alofogh_files/logo.aspx" alt="برای مشاهده مجوز كلیك كنید" className="lazy-img lazy-loaded" id="uR3HVb3paAQnYfHZ" />
                                        </div>
                                    </div>
                                    <div className="namad">
                                        <div className="inner">
                                            <img id="wlaorgvjoeukesgtwlao" src="./alofogh_files/SamandehiLogo.png" alt="logo-samandehi" className="lazy-img lazy-loaded" />
                                        </div>
                                    </div>
                                    <div className="namad">
                                        <div className="inner">
                                            <img src="./alofogh_files/etehadie.png" alt="" className="lazy-img lazy-loaded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cp">
                                IN GOD WE TRUST
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        );
    }
}

export default withLocalize(Footer);