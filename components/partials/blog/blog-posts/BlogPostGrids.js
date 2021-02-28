import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ArticleGrid from '~/components/elements/articles/ArticleGrid';
import { getPostsByColletionSlug } from '~/utilities/product-helper';
import ViewAllPosts from '~/components/elements/ViewAllPosts';
import PostRepository from '~/repositories/PostRepository';
import { startedDevelopmentServer } from 'next/dist/build/output';

const BlogPostGrids = ({ collectionSlug, column }) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    async function getPosts() {
        let queries, APIPosts;
        if (collectionSlug !== undefined) {
            queries = {
                slug_eq: collectionSlug
            };
            APIPosts = await PostRepository.SPGetPostItemOfCollectionBySlug(queries);
        } else {
            queries = {
                _limit: 6
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

    let viewPostItems;
    if (!loading && posts) {
        viewPostItems = posts.map((item) => {
            if (column === '3') {
                return (
                    <div className=" col-md-4 col-sm-6" key={item.id}>
                        <ArticleGrid post={item}/>
                    </div>
                );
            } else if (column === '4') {
                return (
                    <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                        <ArticleGrid post={item}/>
                    </div>
                );
            } else {
                return (
                    <div className="col-md-6" key={item.id}>
                        <ArticleGrid post={item}/>
                    </div>
                );
            }
        });
    }

    return (
        <div className="ps-blog--post-items">
            <div className="row">{viewPostItems}</div>
            <ViewAllPosts/>
        </div>
    );
};

export default BlogPostGrids;
