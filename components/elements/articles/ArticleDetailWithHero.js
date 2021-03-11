import React from 'react';
import Link from 'next/link';
import { baseUrl } from '~/repositories/Repository';
import ModuleArticleSocialSharing from '~/components/elements/articles/modules/ModuleArticleSocialSharing';
import ModuleArticleTags from '~/components/elements/articles/modules/ModuleArticleTags';
import ModuleArticleCommentForm from '~/components/elements/articles/modules/ModuleArticleCommentForm';
import ModuleArticleCommentListing from '~/components/elements/articles/modules/ModuleArticleCommentListing';
import LazyLoad from 'react-lazyload';



const ArticleDetailWithHero = ({ post }) => {
    console.log(post);
    let partialCategories, newPostContent, tagItems, wideThumbnail;
    let date = new Date(post.created_at).toString();
    let postDateTemp = date.split(" ");
    
    
    

  
    

    if (post) {
        if (post.tags) {
            post.tags.replace(/,/g, '');
            tagItems = post.tags.split(',');
        }

        if (post.wide_thumbnail) {
            wideThumbnail = `${baseUrl}${post.wide_thumbnail.url}`;
        } else {
            wideThumbnail = '/static/img/post-hero/bg.jpg';
        }

        if (post.categories) {
            partialCategories = post.categories.map((item) => (
                <Link href="/category/[slug]" as={`/categories/${item.slug}`} key={item.id}>
                    <a className="ps-post__category">{item.name}</a>
                </Link>
            ));
        }
        if (post.content.match(/<img/)) {
            newPostContent = post.content.replace(
                /<img([^>]*)\ssrc=(['"])(?:[^\2\/]*\/)*([^\2]+)\2/gi,
                `<img$1 src=$2${baseUrl}/uploads/$3$2`
            );
        } else {
            newPostContent = post.content;
        }
    }

    return (
        <div className="ps-post--detail ps-post--detail-with-hero">
            <LazyLoad>
                <div className="ps-post ps-post--fullscreen bg--cover" style={{ backgroundImage: `url(${post.url})` }}></div>
            </LazyLoad>
            
            <div className="ps-post__wrapper">
                <div className="ps-post__header">
                    <div className="ps-post__meta">
                        <span>{postDateTemp[1]} {postDateTemp[2]} {postDateTemp[3]}</span>
                    </div>
                    <h2>{post.title}</h2>
                </div>
                <div className="ps-post__content">
                    <div className="ps-document">
                        <div dangerouslySetInnerHTML={{ __html: newPostContent }} />
                        <div className="ps-post__footer">
                            <ModuleArticleSocialSharing />
                        </div>
                    </div>
                    {/*<div className="ps-post__navigation">
                        <ModuleNextOrPreviosPost />
                    </div>*/}
                </div>
            </div>
        </div>
    );
};

export default ArticleDetailWithHero;
