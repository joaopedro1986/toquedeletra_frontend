import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getPostsByColletionSlug } from '~/utilities/product-helper';

import ArticleHorizontalSmall from '~/components/elements/articles/ArticleHorizontalSmall';
import PostRepository from '~/repositories/PostRepository';

const WidgetRecentPosts = ({ collectionSlug }) => {
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
                _slug_in: collectionSlug
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
    let postItems = null, postsView;
    if (!loading) {
        if (posts.length > 0) {
            postsView = posts.map(item => (
                <ArticleHorizontalSmall post={item} key={item.id}/>
            ));
        } else {
            postsView = <p>No post here.</p>;
        }
    }
    return (
        <aside className="ps-widget ps-widget--popular-posts">
            <h4 className="ps-widget__heading"><span>Publicações Recentes</span></h4>
            <div className="ps-widget__content">
                {postsView}
            </div>
        </aside>);
};

export default connect(state => state.collection)(WidgetRecentPosts);
