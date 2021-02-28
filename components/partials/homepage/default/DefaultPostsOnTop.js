import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ArticlePrimary from '~/components/elements/articles/ArticlePrimary';
import PostRepository from '~/repositories/PostRepository';

const DefaultPostsOnTop = ({ collectionSlug }) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    async function getPosts() {
        let queries, APIPosts;
        if (collectionSlug !== '') {
            queries = {
                slug_eq: collectionSlug
            };
            APIPosts = await PostRepository.SPGetPostItemOfCollectionBySlug(queries);

        } else {
            queries = {
                _limit: 5,
            };
            APIPosts = await PostRepository.getPosts(queries);
        }

        if (APIPosts) {
            setTimeout(function() {
                setLoading(false);
            }, 200);
            setPosts(APIPosts);
            return APIPosts;
        } else {
            setPosts(null);
            return null;
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    let postViewItems;
    const carouselSetting = {
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        lazyload: true,
        fade: true
    };
    if (!loading && posts) {
        let carouselItems = posts.map((item) => (
            <div key={item.id}>
                <ArticlePrimary post={item}/>
            </div>
        ));
        postViewItems = (
            <Slider {...carouselSetting} arrows={false} className="ps-carousel">
                {carouselItems}
            </Slider>
        );
    }

    return <section className="ps-default-posts-on-top">
        {postViewItems}
    </section>;
};

export default DefaultPostsOnTop;
