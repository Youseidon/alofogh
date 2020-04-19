import React, { Component } from 'react';
import FeaturedListContainer from './FeaturedListContainer';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

class SectionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { categories: [] };
        this._getCategoriesData = this._getCategoriesData.bind(this);
    }
    componentDidMount() {
        this._getCategoriesData();
    }
    _getCategoriesData() {
        let url = this.props.api + '/categories/5';
        fetch(url)
            .then(response => response.json())
            .then(result => { this.setState({ categories: result }) });
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
        if (this.state.categories.length > 0) {
            this._getTranslation(this.state.categories);
            return (
                <div className="container featured-list clear">
                    {this.state.categories.map((item) => {
                        return (
                            <Translate key={item.id}>
                                {({ translate }) => (
                                    <FeaturedListContainer theme={this.props.theme} api={this.props.api} categoryId={item.id} key={item.id} title={translate(item.id)} icon={"icon-c-" + item.icon} />
                                )}
                            </Translate>
                        );
                    })}
                </div>
            )
        }
        else
            return (<div></div>);
    }
}
export default withLocalize(SectionContainer);