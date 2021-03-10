import React, { Component } from 'react';
import Slider from 'react-slick';
import TopicDefault from '~/components/elements/topics/TopicDefault';

class ExploreTopics extends Component {
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
        const { collections, slug } = this.props;
        let postViewItems, postItems, carouselItems;

        const carouselSetting = {
            dots: false,
            infinite: false,
            speed: 750,
            slidesToShow: 5,
            slidesToScroll: 1,
            gap: 30,
            arrows: true,
            lazyload: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                        arrows: false,
                    },
                },
            ],
        };
        postViewItems = (
            <Slider
                ref={(slider) => (this.slider = slider)}
                {...carouselSetting}
                arrows={false}
                className="ps-carousel"
            >
                <div>
                    <TopicDefault img="/static/img/topics/socrates.jpg" title="Futebol" url={"/category/futebol"} />
                </div>
                <div>
                    <TopicDefault img="/static/img/topics/jordan.png" title="Basquetebol" />
                </div>
                <div>
                    <TopicDefault img="/static/img/topics/f1.jpg" title="Motores" />
                </div>
                <div>
                    <TopicDefault img="/static/img/topics/tenis.jpg" title="Tenis" url={"/category/tenis"}/>
                </div>
                <div>
                    <TopicDefault img="/static/img/topics/olympic.png" title="Olimpiadas" />
                </div>
            </Slider>
        );

        return (
            <section className="ps-section--classic ps-explore-topics">
                <div className="ps-section__header">
                    <h3>Modalidades</h3>
                </div>
                <div className="ps-section__content">{postViewItems && postViewItems}</div>
            </section>
        );
    }
}

export default ExploreTopics;
