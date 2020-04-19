import React, { Component } from 'react';
import { Animated } from "react-animated-css";

class Minicart extends Component {
    constructor(props) {
        super(props);
        this.displayData = [];

        this.state = { quantity: 1, isCardOpen: false, basketValue: [] };
        this.getBasket = this.getBasket.bind(this);
        this.toggleClass = this.toggleClass.bind(this);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
        this.getBasket();
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    handleClickOutside(event) {
        if (this.state.isCardOpen) {
            if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
                this.toggleClass();
            }
        }
    }
    getBasket() {
        if (this.state.quantity > 0) {
            this.displayData.push(this.minicartItemTemplate());
            this.displayData.push(this.minicartTemplate());
        }
        else {
            this.displayData.push(<p className="empty">سبد خرید شما خالی است</p>);
        }
        this.setState({
            basketValue: this.displayData
        });
    }
    toggleClass() {
        const currentState = this.state.isCardOpen;
        this.setState({ isCardOpen: !currentState });
    };
    minicartItemRemove() {
        //Something
    }
    minicartItemTemplate() {
        return (
            <div key="minicartBasket" className="items-list">
                <ul className="minicart-items">
                    <li>
                        <a href="#" title="">
                            <img src="" alt="" width="69" height="43" />
                            <div className="item-text">
                                {/* <% if (quantity > 1) { %> <h3><%= quantity %>x <%= name %></h3> */}
                                {/* <% } else { %> <h3><%= name %></h3> */}
                                {/* <% } %> */}
                                <h3>Name</h3>
                                <span><em>15000</em> تومان</span>
                            </div>
                        </a>
                        <a href="javascript:void(0)" title="Remove This Item" className="item-delete">
                            <span className="icon-close" style={this.props.theme.left}></span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
    minicartTemplate() {
        return (
            <div key="minicartTemplate">
                <div className="price">
                    <span>مبلغ قابل پرداخت :</span>
                    <span className="green"><em>500</em> تومان</span>
                </div>
                <a href="#" title="" className="btn-green">تسویه و پرداخت</a>
            </div>
        );
    }
    render() {
        return (
            <div className="basket tkh-basket-wrapper" style={this.props.theme.left} ref={this.setWrapperRef}>
                <a href="javascript:void(0)" style={this.props.theme.basketLink} className="basket-toggle" onClick={() => this.toggleClass()}>
                    <span className="icon-cart" style={this.props.theme.right}></span>
                    <span className="basket-label" style={this.props.theme.basketLabel}>
                        <em className="basket-number">{this.state.quantity}</em>
                    </span>
                </a>
                <div className="shopping-basket" style={Object.assign({}, (this.state.isCardOpen) ? { display: "block" } : { display: "none" }, this.props.theme.shoppingBasket)}>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={this.state.isCardOpen}>
                        {this.state.basketValue}
                    </Animated>
                </div>

            </div >
        );
    }
}

export default Minicart;