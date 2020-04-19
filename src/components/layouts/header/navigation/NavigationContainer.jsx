import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../../../pages/home/Home';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

class NavigationContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { nav: [], toggleNav: false };
        this._getNavigationData = this._getNavigationData.bind(this);
    }
    componentWillMount() {
        this._getNavigationData();
    }
    _getNavigationData() {
        let url = this.props.api + '/categories/9';
        fetch(url)
            .then(response => response.json())
            .then(result => { this.setState({ nav: result }) });
    }
    _navItems(origin) {
        let flag = false;
        let display = "";
        if (origin == "desktop") {
            display = "flex";
            flag = true;
        }
        else if (origin == "mobile") {
            flag = this.state.toggleNav;
            if (flag)
                display = "block"
            else
                display = "none";
        }

        return (
            <ul className="tkh-navigation" style={{ display: display }}>
                <li className="">
                    <h2>
                        <Link to="/" className="tkh-navigation-item nav-item nav-item__today">
                            <Translate id="nav"></Translate>
                        </Link>
                    </h2>
                </li>
                {this.state.nav.map((item) => {
                    return (
                        <li key={item.id} className="">
                            <h2>
                                <Link to={`/Category/${item.id}`} className={"tkh-navigation-item nav-item nav-item__" + item.icon}>
                                    <Translate id={item.id}></Translate>
                                    {/* {item.title} */}
                                </Link>
                            </h2>
                        </li>
                    );
                })}
            </ul>
        );
    }
    _toggleNavItems() {
        const currentState = this.state.toggleNav;
        this.setState({ toggleNav: !currentState })
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
    render() {
        if (this.state.nav.length > 0) {
            this._getTranslation(this.state.nav);
        }
        return (
            <div className={(this.props.isNavOpen) ? "nav-bar nav-bar-open" : "nav-bar nav-bar-close"}>
                <nav className="nav-bar-inner clear">
                    <h2 className="h-seo">
                        {/* منوی کاربری */}
                        <Translate id="UserMenuText"></Translate>
                    </h2>
                    {this._navItems("desktop")}
                </nav>
                <div className="nav-bar-mobile hide-on-desktop">
                    <div className="responsive-login-wrapper"></div>
                    {(this.props.isNavOpen) ? this.props.children : ""}
                    <div className="responsive-after-login-links hide-on-desktop">
                        <ul>
                            <li>
                                <a href="">
                                    <span className="icon-account-balance-wallet"></span>
                                    <Translate id="MyOfoghsText"></Translate>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="icon-card"></span>
                                    <Translate id="BuyCreditText"></Translate>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="icon-card"></span>
                                    <Translate id="GiftCode"></Translate>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="category-toggle" onClick={() => this._toggleNavItems()}>
                        <span className="icon-more-vert"></span>
                        <em><Translate id="ChooseCategory"></Translate></em>
                    </div>
                    {(this.props.isNavOpen) ? this._navItems("mobile") : ""}
                    <div className="mobile-extra-links">
                        <ul>
                            <li>
                                <a href=""><span className="icon-info"></span><Translate id="AboutUs"></Translate></a>
                            </li>
                            <li>
                                <a href=""><span className="icon-phone"></span> <Translate id="SupportText"></Translate></a>
                            </li>
                            <li>
                                <a href=""><span className="icon-assignment-turned-in"></span><Translate id="Cooperate"></Translate> </a>
                            </li>
                            <li>
                                <a href=""><span className="icon-download"></span><Translate id="GetApplication"></Translate></a>
                            </li>
                            <li>
                                <a href="" title="اعلام پرداخت کارت به کارت"><span className="icon-account-balance-wallet"></span><Translate id="ByATM"></Translate></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default withLocalize(NavigationContainer);