import React, { Component } from 'react';
import City from './City.jsx';
import NavigationContainer from './navigation/NavigationContainer.jsx';
import Minicart from './minicart/Minicart.jsx';
import LanguageToggle from './../../../LanguageToggle';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import Search from './Search.jsx';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { isNavOpenState: false };
        this._toggleNav = this._toggleNav.bind(this);
    }
    _toggleNav() {
        const currentState = this.state.isNavOpenState;
        this.setState({ isNavOpenState: !currentState })
    }
    onScroll() {
        let offsetTop  = this.instance.getBoundingClientRect().top;
    }
    render() {
        return (
            <header className="header tkh-header">
                <div className="modal-overlay tkh-modal-overlay" onClick={() => this._toggleNav()} style={(this.state.isNavOpenState) ? { display: "block" } : { display: "none" }}>
                    <div className="modal-close tkh-modal-icon-close">
                        <span className="icon-close"></span>
                    </div>
                </div>
                <div className="main-bar clear">
                    <div className="menu-toggle menu-loaded visible" onClick={() => this._toggleNav()}>
                        <span className="icon-menu"></span>
                    </div>
                    <div className="logo">
                        <img src="\logo.svg" alt="ALOFOGH" />
                    </div>
                    <City theme={this.props.theme} api={this.props.api} />
                    <Search theme={this.props.theme} />
                    <div className="login-sec">
                        <LanguageToggle theme={this.props.theme} />
                        <Minicart theme={this.props.theme} />

                        {/* <div className="custom-sel">
                            <a className="selected" href="#">ENG &nbsp;<i className="fa fa-caret-down lightblue" aria-hidden="true"></i></a>
                            <a className="hidden" href="#">AR</a>
                        </div> */}

                        <div className="user-info clear" style={this.props.theme.left}>
                            <a href="" title="logout" style={this.props.theme.left} className="hide-on-mobile tkh-logout-btn">
                                <Translate id="logOut"></Translate>
                            </a>
                            <div className="separator after-login-separator" style={this.props.theme.left}></div>
                            <span style={this.props.theme.left}>
                                <a className="my-account tkh-account-toggle" href="javascript:void(0)" title="">
                                    <Translate id="myAccount"></Translate>
                                    <span className="icon-arrow-drop-down hide-on-desktop"></span>
                                </a>
                            </span>
                            <div className="my-account-cnt tkh-account-menu">
                                <ul>
                                    <li className="hide-on-mobile">
                                        <a href="">
                                            <span className="icon-discount"></span>
                                            <Translate id="myOfoghs"></Translate>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="icon-user"></span>
                                            <Translate id="ProfileEdit"></Translate>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="icon-addressbook"></span>
                                            <Translate id="AddressBook"></Translate>
                                        </a>
                                    </li>
                                    <li className="hide-on-mobile">
                                        <a href="">
                                            <span className="icon-card"></span>
                                            <Translate id="BuyCredit"></Translate>
                                        </a>
                                    </li>
                                    <li className="hide-on-mobile">
                                        <a href="">
                                            <span className="icon-card"></span>
                                            <Translate id="GiftCode"></Translate>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="icon-cashback"></span>
                                            <Translate id="YourMoney"></Translate>
                                        </a>
                                    </li>
                                    <li className="hide-on-desktop">
                                        <a className="tkh-logout-btn" href="" title="logout">
                                            <span className="icon-logout"></span>
                                            <Translate id="logOut"></Translate>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <NavigationContainer ref={(el) => this.instance = el } theme={this.props.theme} api={this.props.api} isNavOpen={this.state.isNavOpenState}>
                    <City api={this.props.api} theme={this.props.theme} />
                </NavigationContainer>
            </header>
        );
    }
}

export default withLocalize(Header);