import React, { Component } from 'react';
import Minicart from './../minicart/Minicart.jsx';
import City from './../City.jsx';

class TopHeader extends Component {
    constructor(props) {
        super(props);

        this.state = { isNavOpenState: false };
        this._toggleNav = this._toggleNav.bind(this);
    }
    _toggleNav() {
        const currentState = this.state.isNavOpenState;
        this.setState({ isNavOpenState: !currentState })
    }
    render() {
        return (
            <div className="main-bar clear">
                <div className="modal-overlay tkh-modal-overlay" onClick={() => this._toggleNav()} style={(this.state.isNavOpenState) ? { display: "block" } : { display: "none" }}>
                    <div className="modal-close tkh-modal-icon-close">
                        <span className="icon-close"></span>
                    </div>
                </div>
                <div className="menu-toggle menu-loaded visible" onClick={() => this._toggleNav()}>
                    <span className="icon-menu"></span>
                </div>
                <div className="logo">
                    Logo here
                </div>
                <City api={this.props.api} />
                <div className="header-input">
                    <div className="search-form tkh-search-suggestion">
                        <span className="icon-search"></span><form className="header-input-form" id="search_mini_form" action="https://alofogh.com/catalogsearch/result/" method="get">
                            <input type="hidden" name="cityId" value="5" />
                            <input id="search" type="text" name="q" placeholder="جستجو: رستوران، باشگاه انقلاب..." maxLength="128" autoComplete="off" />
                            <button type="submit">جستجو</button>
                        </form>
                    </div>
                </div><div className="mobile-search">
                    <span className="icon-search"></span>
                </div>
                <div className="login-sec">
                    <Minicart />
                    <div className="user-info left clear">
                        <a href="" title="logout" className="left hide-on-mobile tkh-logout-btn">خروج</a><div className="separator after-login-separator left"></div>
                        <span className="left">
                            <a className="my-account tkh-account-toggle" href="javascript:void(0)" title="">
                                حساب کاربری
                            <span className="icon-arrow-drop-down hide-on-desktop"></span>
                            </a>
                        </span>
                        <div className="my-account-cnt tkh-account-menu">
                            <ul>
                                <li className="hide-on-mobile">
                                    <a href="">
                                        <span className="icon-discount"></span>
                                        افق‌های من
                                </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="icon-user"></span>
                                        ویرایش پروفایل
                                </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="icon-addressbook"></span>
                                        دفترچه نشانی
                                </a>
                                </li>
                                <li className="hide-on-mobile">
                                    <a href="">
                                        <span className="icon-card"></span>
                                        خرید اعتبار
                                </a>
                                </li>
                                <li className="hide-on-mobile">
                                    <a href="">
                                        <span className="icon-card"></span>
                                        ثبت کد هدیه
                                </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="icon-cashback"></span>
                                        پولِ‌تو
                                </a>
                                </li>
                                <li className="hide-on-desktop">
                                    <a className="tkh-logout-btn" href="" title="logout">
                                        <span className="icon-logout"></span> خروج</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopHeader;