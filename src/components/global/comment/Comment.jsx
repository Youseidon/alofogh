import React, { Component } from 'react';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { comments: [], success: false };
        this._getComment = this._getComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    _getComment() {
        let url = this.props.api + '/comments/' + this.props.offer;
        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.setState({ comments: result });
            });
    }
    componentWillMount() {
        this._getComment();
    }
    _loadComments() {
        return (
            <div>
                {this.state.comments.map((item) => {
                    return (
                        <div className="comment">
                            <div className="comment-question">
                                <div className="comment-info">
                                    <span>
                                        {this.props.offerTitle}
                                    </span>
                                    <div className="comment-name">
                                        <span>{item.fullName}</span>
                                    </div>
                                    <div className="comment-date">
                                        {item.created}
                                    </div>
                                    <div className="comment-takhfifan-logo">
                                    </div>
                                </div>
                            </div>
                            <div className="comment-text">
                                <pre>
                                    {item.text}
                                </pre>
                            </div>
                            {(item.replay == null) ? <div></div> :
                                <div className="comment">
                                    <div className="comment-takhfifan-info">
                                        <div className="comment-takhfifan-answer-logo">
                                        </div>
                                        <div className="comment-date">
                                            {item.created}
                                        </div>
                                    </div>
                                    <div className="comment-text">
                                        <pre>
                                            {item.replay}
                                        </pre>
                                    </div>
                                </div>}

                        </div>
                    );
                })}
            </div>
        );
    }
    onSubmit(event) {
        event.preventDefault();
        var authorName = this.refs.author_name.value;
        var authorPhoneNumber = this.refs.author_phone_number.value;
        var authorEmail = this.refs.author_email.value;
        var questionText = this.refs.question_text.value;

        if (authorName != "" && authorPhoneNumber != "" && authorEmail != "" && questionText != "") {
            let url = this.props.api + '/comments/';
            let commentPost = `{ "offerId": "${this.props.offer}", "fullName": "${authorName}", "email": "${authorEmail}", "mobile": "${authorPhoneNumber}", "text": "${questionText}" }`;
            fetch(url,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: commentPost
                })
                .then(result => {
                    if (result.ok) {
                        document.getElementById("btnSubmitComment").style.background = "#4dff4d";
                        document.getElementById("btnSubmitComment").disabled = true;
                        document.getElementById("btnSubmitComment").value = "Comment Posted";
                    }
                    else {
                        document.getElementById("btnSubmitComment").style.background = "#ff3333";
                        document.getElementById("btnSubmitComment").disabled = false;
                    }
                    this.setState({ success: result.ok })
                })
                .then(function (data) { })
        } else {
            document.getElementById("btnSubmitComment").style.background = "#ff3333";
        }
    }
    render() {
        return (
            <div className="deal-questions-wrapper deal-page-card form-group clear last-deal-card">
                <div className="deal-card-title clear">
                    <span className="icon-forum" style={this.props.theme.itemsListUlLiLinkImg}></span>
                    <span className="title" style={this.props.theme.right}>
                        <Translate id="Comments"></Translate>
                    </span>
                    <div className="deal-title-badge" style={this.props.theme.left}><em className="number-font">0</em>
                        <Translate id="ViewPoints"></Translate>
                    </div>
                </div>
                <div className="deal-page-card-cnt clear auto-height">
                    <div className="comment-empty">
                        <img className="comment-empty-logo" src="./Offer_files/modal-logo.png" alt="" /><p>
                            <Translate id="FirstComment"></Translate>
                        </p>
                    </div>
                    <div className="comment-form tkh-question-ask" data-url="/ajax/question/add/" data-product-id="156670">
                        <div className="alert-green">
                            {(this.state.success) ? <p>Thank you for leaving your comment. we'll be back to you soon</p> : <p></p>}
                        </div>
                        <div className="deal-card-title clear">
                            <span className="icon-new-comment" style={this.props.theme.itemsListUlLiLinkImg}></span>
                            <span className="title" style={this.props.theme.right}><Translate id="WriteComment"></Translate></span>
                        </div>
                        <div className="alert alert-red tkh-error-container clear" style={{ display: 'none' }}>
                            <span className="icon-close"></span><p className="tkh-error-message"></p>
                        </div>
                        <div className="alert alert-green tkh-success-container" style={{ display: 'none' }}>
                            <span className="icon-check"></span><p className="tkh-success-message"></p>
                        </div>
                        <div className="deal-comment-form">
                            <div className="tkh-question-ask__guest control-wrapper required">
                                <label className="control-label" style={this.props.theme.controlLabel} for="author_name"><Translate id="Name"></Translate></label>
                                <div className="control">
                                    <input id="author_name" name="author_name" ref="author_name" placeholder="" type="text" disabled="" />
                                </div>
                            </div>
                            <div className="tkh-question-ask__guest control-wrapper required">
                                <label className="control-label" style={this.props.theme.controlLabel} for="author_phone_number"><Translate id="Mobile"></Translate></label>
                                <div className="control">
                                    <input id="author_phone_number" name="author_phone_number" ref="author_phone_number" className="ltr en" placeholder="" type="text" />
                                </div>
                            </div>
                            <div className="tkh-question-ask__guest control-wrapper required">
                                <label className="control-label" style={this.props.theme.controlLabel} for="author_email"><Translate id="EMail"></Translate></label>
                                <div className="control">
                                    <input id="author_email" name="author_email" ref="author_email" className="ltr en" placeholder="email@example.com" type="text" disabled="" />
                                </div>
                            </div>
                            <div className="control-wrapper control-large textarea no-label">
                                <label className="control-label hide-on-desktop" for="question-text"><Translate id="PostComment"></Translate></label><div className="control control--full"><textarea id="question-text" name="question-text" ref="question_text" rows="4" placeholder=""></textarea></div>
                            </div>
                            <div className="btn-wrapper no-label">
                                <button type="button" onClick={this.onSubmit} id="btnSubmitComment" className="btn btn-blue"><Translate id="PostComment"></Translate></button>
                            </div>
                        </div>
                    </div>
                </div>
                {(this.state.comments.length != 0) ? this._loadComments() : <div></div>}
            </div>
        );
    }
}

export default withLocalize(Comment);