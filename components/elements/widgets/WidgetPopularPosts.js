import React from 'react';
import Link from "next/link";

const WidgetPopularPosts = () => {
    return(
        <aside className="ps-widget ps-widget--popular-posts">
            <h4 className="ps-widget__heading"><span>Popular Post</span></h4>
            <div className="ps-widget__content">
                <article className="ps-post ps-post--popular">
                    <span className="ps-post__counter">1</span>
                    <Link href="/">
                        <a className="ps-post__title">Pastel Colors - The Trend of 2020</a>
                    </Link>
                </article>
                <article className="ps-post ps-post--popular">
                    <span className="ps-post__counter">2</span>
                    <Link href="/">
                        <a className="ps-post__title">Pastel Colors - The Trend of 2020</a>
                    </Link>
                </article>
                <article className="ps-post ps-post--popular">
                    <span className="ps-post__counter">3</span>
                    <Link href="/">
                        <a className="ps-post__title">Pastel Colors - The Trend of 2020</a>
                    </Link>
                </article>
                <article className="ps-post ps-post--popular">
                    <span className="ps-post__counter">4</span>
                    <Link href="/">
                        <a className="ps-post__title">Pastel Colors - The Trend of 2020</a>
                    </Link>
                </article>
                <article className="ps-post ps-post--popular">
                    <span className="ps-post__counter">5</span>
                    <Link href="/">
                        <a className="ps-post__title">Pastel Colors - The Trend of 2020</a>
                    </Link>
                </article>
            </div>
        </aside>
    )
};

export default WidgetPopularPosts;