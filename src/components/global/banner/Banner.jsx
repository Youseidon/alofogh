import React, { Component } from 'react';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = { banner: [] };
        this._getBannerData = this._getBannerData.bind(this);
    }
    componentDidMount() {
        this._getBannerData();
    }
    _getBannerData() {
        this.setState({
            banner: [
                { id: 1, imageUrl: "./images/middle-banner-right_1.jpg", alt: "بلیط قطار" },
                { id: 2, imageUrl: "./images/middle-banner-left.jpg", alt: "دلفیناریوم" }
            ]
        });
    }
    render() {
        return (
            <div className="takhfifan-products-tile takhfifan-special clear">
                <div className="container kala-link-wrapper">
                    {
                        this.state.banner.map((item) => {
                            return (
                                <a href="">
                                    <img className="lazy-img lazy-loaded" src={item.imageUrl} alt={item.alt} data-src="" />
                                </a>
                            );
                        }
                        )}
                </div>
            </div>
        );
    }
}

export default Banner;