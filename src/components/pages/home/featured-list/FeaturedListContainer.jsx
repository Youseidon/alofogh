import React, { Component } from 'react';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import { Link } from 'react-router-dom';
import Offers from "./../../../global/offers/Offers";

class FeaturedListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { featureList: [] };
        this._getFeatureListData = this._getFeatureListData.bind(this);
    }
    componentDidMount() {
        this._getFeatureListData();
    }
    _getFeatureListData() {
        let url = this.props.api + '/offers/lastbycat/' + this.props.categoryId + '/4';
        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.setState({ featureList: result })
                this._getTranslation(result)
            });
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
        // console.log(result)
        this.props.addTranslation(result);
    }
    render() {
        return (
            <div>
                <section className="takhfifan-group clear">
                    <div className="title clear">
                        <h2 style={this.props.theme.right}>
                            <Link to={`/Category/${this.props.categoryId}`}>
                                <i style={this.props.theme.takhfifanGroupTitleH2I} className={this.props.icon}></i>
                                {this.props.title}
                            </Link>
                        </h2>
                        <Link to={`/Category/${this.props.categoryId}`} className="more" style={this.props.theme.left}>
                            <span className="icon-dots"><span className="icon-dots-before" style={this.props.theme.iconDotsBefore}></span><Translate id="observingThisCategory"></Translate> {this.props.title}</span>
                        </Link>
                    </div>
                    <div className="deals four-col clear">
                        {this.state.featureList.map((item) => {
                            return (
                                <Translate key={item.id}>
                                    {({ translate }) => (
                                        <Offers id={item.id} theme={this.props.theme} provider={item.provider} key={item.id} title={translate(item.id)} description={item.description} discount={item.discount} expirationDate={item.expirationDate} finalPrice={item.finalPrice} offerPrice={item.offerPrice} price={item.price} url={item.url} quantity={item.quantity} />
                                    )}
                                </Translate>
                            );
                        })}
                    </div>
                </section>
            </div>
        );
    }
}

export default withLocalize(FeaturedListContainer);