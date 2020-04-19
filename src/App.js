import React, { Component } from 'react';
import './App.css'
import { Route, Switch, BrowserRouter as HashRouter } from 'react-router-dom'
import Header from './components/layouts/header/Header'
import Footer from './components/layouts/footer/Footer'
import Category from './components/pages/category/Category'
import Home from './components/pages/home/Home'
import OfferDetail from './components/pages/offerdetail/OfferDetail';
import Notfound from './components/pages/boundary/Notfound';
import ErrorBoundary from './components/pages/boundary/ErrorBoundary';
import { Breadcrumbs } from 'react-breadcrumbs-dynamic'
import BasketSteps from './components/pages/basket/BasketSteps'
import Login from './components/global/login/Login';
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "./translations/global.json";
import CurrentEnvironment from './Environment';
import Themes from './Themes.json';
import Style from './styles/styles.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };

    this.props.initialize({
      languages: [
        { name: "Arabic", code: "AR" },
        { name: "English", code: "EN" }
      ],
      translation: globalTranslations,
      options: {
        defaultLanguage: "EN",
        renderToStaticMarkup
      }
    });

  }
  render() {
    const apiUrl = CurrentEnvironment;
    let ip = apiUrl.substring(
      apiUrl.lastIndexOf("//") + 1,
      apiUrl.lastIndexOf("/api")
    );
    ip = ip.substr(1);
    if (this.props.activeLanguage != null) {
      if (this.props.activeLanguage.code == "EN")
        document.title = 'OMAN LATEST OFFERS | ALOFOGH';
      else
        document.title = 'أحدث عروض عمان || الأ فق';
      let Theme = (this.props.activeLanguage.code == "EN") ? Themes.ltr : Themes.rtl;
      return (
        <HashRouter>
          <div className="wrapper" style={Theme.body}>
            {/* {console.log((this.props.activeLanguage != null) ? (this.props.activeLanguage.code == "EN" ? Themes.ltr : Themes.rtl) : 0)} */}
            <Header api={apiUrl} theme={Theme} />
            <Switch>
              <Route path="/" exact component={() => <Home api={apiUrl} theme={Theme} />} />
              <Route path="/OfferDetail/:id" render={(props) => (<OfferDetail api={apiUrl} theme={Theme} {...props} />)} />
              <Route path="/Category/:id" render={(props) => (<ErrorBoundary> <Category theme={Theme} api={apiUrl} {...props} /> </ErrorBoundary>)} />
              <Route path="/Check" component={() => <BasketSteps theme={Theme} api={apiUrl} ip={ip} />} />
              <Route path="/Checkout/:id" component={() => <BasketSteps theme={Theme} api={apiUrl} usage="checkout" />} />
              <Route component={Notfound} />
            </Switch>
          </div>
          <Footer api={apiUrl} theme={Theme} />
        </HashRouter>
      );
    }
    else {
      return <div></div>
    }
  }
}

export default withLocalize(App);
