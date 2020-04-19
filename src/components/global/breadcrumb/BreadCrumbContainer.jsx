import React, { Component } from 'react';

class BreadCrumbContainer extends Component {
    render() {
        return (
            <div class="deal-page-card bread-crumb clear">
                <div class="bread-crumb-chunk">
                    <a href="/" title="افق">
                        <span>صفحه اصلی</span>
                        <span class="icon-arrow-left"></span>
                    </a>
                </div>
                <div class="bread-crumb-chunk">
                    <a href="https://takhfifan.com/cities/مشهد" title="مشهد">
                        <span>مشهد</span>
                        <span class="icon-arrow-left"></span>
                    </a>
                </div>
                <div class="bread-crumb-chunk">
                    <a href="https://takhfifan.com/cities/مشهد/رستوران-و-کافی-شاپ" title="رستوران و کافی شاپ">
                        <span>رستوران و کافی شاپ</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default BreadCrumbContainer;