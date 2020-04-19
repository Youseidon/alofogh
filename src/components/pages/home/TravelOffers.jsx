import React, { Component } from 'react';

class TravelOffers extends Component {
    render() {
        return (
            <div>
                <div className="takhfifan-group">
                    <div className="title title-center clear">
                        <h2>افق های مسافرتی</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="home-page-travel-widget tkh-home-page-travel-widget">
                        <div className="travel-search-types">
                            <nav className="travel-search-types__list tkh-travel-search-types__list row justify-content-center">
                                <ul>
                                    <li className="tkh-travel-search-types__selector active">
                                        <a href="">
                                            <span className="icon-backpack"></span>
                                            تور و سفر
                                        </a>
                                    </li>
                                    <li className="tkh-travel-search-types__selector">
                                        <a href="">
                                            <span className="icon-bed"></span>
                                            رزرو هتل، ویلا و بومگردی
                                    </a>
                                    </li>
                                    <li className="tkh-travel-search-types__selector">
                                        <a href="">
                                            <span className="icon-airplane"></span>
                                            بلیط هواپیما
                                    </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="travel-search-types__item tkh-travel-search-types__item gt-travel-tours-search active" data-type="default">
                                <div className="travel-search-types__form tkh-travel-search bd-example-row-flex-cols" data-parent-id="">
                                    <form action="" method="GET" className="SumoSelect travel-search align-items-center">
                                        <div className="travel-search__select travel-search__select--city col-sm first-form-input">
                                            <input type="text" name="search" id="travelSearch" autoComplete="off" placeholder="بین چندهزار تخفیف مسافرتی بهترین‌ها رو پیدا کن!" />
                                        </div>
                                        <div className="optWrapper optWrapper-tour-suggestion" style={{ display: 0 }}><ul className="options"><li className="opt disabled selected"><label>مقصدت کجاست؟</label></li><li className="opt hidden"><label></label></li><li className="opt"><label>کویر مصر</label></li><li className="opt"><label>یزد</label></li><li className="opt"><label>گلستان</label></li><li className="opt"><label>شیراز</label></li><li className="opt"><label>اصفهان</label></li><li className="opt"><label>ترکمن صحرا</label></li><li className="opt"><label>هرمز</label></li><li className="opt"><label>اردبیل</label></li><li className="opt"><label>نمک آبرود</label></li></ul></div>
                                        <input type="submit" value="جستجو" className="travel-search__btn btn btn-blue" data-url="" disabled="" /><div className="icon-search"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TravelOffers;