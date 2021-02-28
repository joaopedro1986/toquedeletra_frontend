import React, {Component} from 'react';
import Slider from 'react-slick';
import {connect} from "react-redux";
import {getPostsByColletionSlug} from "~/utilities/product-helper";
import ArticleGridSimple from "~/components/elements/articles/ArticleGridSimple";

class HomeFeaturesPosts extends Component {
    constructor(props) {
        super(props);
    }

    handleCarouselPrev = (e) => {
        e.preventDefault();
        this.slider.slickPrev();
    };

    handleCarouselNext = (e) => {
        e.preventDefault();
        this.slider.slickNext();
    };

    render() {
        const {collections, slug} = this.props;
        let postViewItems, postItems, carouselItems;

        const carouselSetting = {
            dots: false,
            infinite: true,
            speed: 750,
            slidesToShow: 4,
            slidesToScroll: 3,
            gap: 30,
            arrows: true,
            lazyload: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                        arrows: false,
                    },
                },
            ],
        }
        if (collections) {
            postItems = getPostsByColletionSlug(collections, slug);
            if (postItems) {
                carouselItems = postItems.map(item => (
                    <div key={item.id}>
                        <ArticleGridSimple post={item} />
                    </div>

                ))
                postViewItems = <Slider
                    ref={(slider) => (this.slider = slider)}
                    {...carouselSetting}
                    arrows={false}
                    className="ps-carousel">
                    {carouselItems}
                </Slider>
            }
        }

        return (
            <section className="ps-home-feature-posts">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Related posts</h3>
                        <div className="ps-section__nav">
                            <a href="#" className="carousel-prev" onClick={this.handleCarouselPrev}>
                                <i className="feather icon icon-chevron-left"></i>
                            </a>
                            <a href="#" className="carousel-prev" onClick={this.handleCarouselNext}>
                                <i className="feather icon icon-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="ps-section__content">
                        {postViewItems && postViewItems}
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(state => state.collection)(HomeFeaturesPosts);