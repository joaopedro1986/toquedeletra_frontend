import React from 'react';
import Link from 'next/link';
import { baseUrl } from '~/repositories/Repository';
import LazyLoad from 'react-lazyload';
import ModulePostAuthorSmall from '~/components/elements/articles/modules/ModulePostAuthorSmall';

const ArticleList = ({ post }) => {

    let date = new Date(post.created_at).toString();
    let postDateTemp = date.split(" ");

    let partialThumbnail, partialCategories;
    if (post) {
        if (post.url !== null) {
            partialThumbnail = (
                <LazyLoad>
                    <img src={`${post.url}`} alt="img" />
                </LazyLoad>
            );
        }

        if (post.categories) {
            partialCategories = post.categories.map((item) => (
                <Link href="/category/[slug]" as={`/categories/${item.slug}`} key={item.id}>
                    <a>{item.name}</a>
                </Link>
            ));
        }

        return (
            <article className="ps-post ps-post--list">
                <div className="ps-post__thumbnail">
                    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                        <a className="ps-post__overlay"></a>
                    </Link>
                    {partialThumbnail}
                </div>
                <div className="ps-post__wrapper">
                    <div className="ps-post__content">
                        <div className="ps-post__categories">{partialCategories}</div>
                        <h4 className="ps-post__title">
                            <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                                <a>{post.title}</a>
                            </Link>
                        </h4>
                        <div className="ps-post__meta">
                            <ModulePostAuthorSmall author={post.author} />
                            <span className="ps-post__posted">{postDateTemp[1]} {postDateTemp[2]} {postDateTemp[3]}</span>
                        </div>
                        <div className="ps-post__short-desc">
                            <p>{post.description && post.description.slice(0, 100) + '...'}</p>
                        </div>
                    </div>
                    <div className="ps-post__footer">
                        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                            <a className="ps-post__morelink effect--underline">Ler +</a>
                        </Link>
                    </div>
                </div>
            </article>
        );
    }
};

export default ArticleList;
