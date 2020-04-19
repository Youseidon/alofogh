import React, { Component } from 'react';
import SlideShow from '../../global/banner/SlideShow';
import SpecialOffers from './SpecialOffers';
import TravelOffers from './TravelOffers';
import OffersContainer from './../../global/offers/OffersContainer';
import SectionContainer from './featured-list/SectionContainer';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <SlideShow api={this.props.api} from="Home" theme={this.props.theme} />
                <div className="container">
                    <SpecialOffers api={this.props.api} theme={this.props.theme} />
                    {/* <TravelOffers /> */}
                    <OffersContainer from="Home" api={this.props.api} theme={this.props.theme} />
                </div>
                <SectionContainer api={this.props.api} theme={this.props.theme} />
            </div>
        );
    }
}

export default withLocalize(Home);