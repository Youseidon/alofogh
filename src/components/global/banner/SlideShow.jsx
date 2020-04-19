import React, { Component } from 'react';
import './SlideShow.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

const PREFIX_URL = '/images/Offers/';

class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: []
        };
        this._getSlideShowData = this._getSlideShowData.bind(this);
    }
    _getSlideShowData() {
        let url = this.props.api + '/offers/banners/8';
        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.setState({ slider: result })
            });
    }
    componentDidMount() {
        this._getSlideShowData();
    }
    render() {
        if (this.state.slider.length > 0) {
            const images = [];
            this.state.slider.map((item) => {
                let imgObj = {
                    // thumbnail: `${PREFIX_URL}${item.image.thumbnail}`,
                    original: `${PREFIX_URL}${item.image.original}`,
                    thumbnailLabel: item.title.substring(0, 18)
                }
                images.push(imgObj);
            });
            return (
                <div>
                    <div className="container ">
                    </div>
                    <div className="ofoghSlider">
                        <ImageGallery
                            ref={i => this._imageGallery = i}
                            items={images}
                            lazyLoad={false}
                            showThumbnails={true}
                            showNav={true}
                            isRTL={false}
                            autoPlay={true}
                            thumbnailPosition={'bottom'}
                            slideDuration={parseInt(650)}
                            slideInterval={parseInt(5000)}
                            slideOnThumbnailOver={false}
                            showPlayButton={false}
                            showBullets={false}
                            showFullscreenButton={false}
                            additionalClass="app-image-gallery"
                        />
                    </div>
                </div>
            );
        }
        else
            return (<div></div>)
    }
}

export default SlideShow;
