import React, { Component } from 'react';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

class Search extends Component {
    render() {
        return (
            <Router>
                {console.log()}
                <div className="header-input" style={this.props.theme.headerInput}>
                    <div className="search-form tkh-search-suggestion">
                        <span className="icon-search" style={this.props.theme.iconSearch}></span>
                        <div className="header-input-form" style={this.props.theme.headerInputForm}>
                            <Translate>
                                {({ translate }) => (
                                    <input id="search" type="text" name="q" placeholder={translate("searchPlaceholder")} maxLength="128" autoComplete="off" />
                                )}
                            </Translate>
                            <button type="submit">
                                <Translate id="search"></Translate>
                                {/* <Translate>
                                        {({ translate }) => (
                                            <span>{translate("search")}</span>
                                        )}
                                    </Translate> */}
                            </button>

                        </div>
                    </div>
                </div>
                <div className="mobile-search">
                    <span className="icon-search" style={this.props.theme.iconSearch}></span>
                </div>
            </Router>
        );
    }
}

export default withLocalize(Search);