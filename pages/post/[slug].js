import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { getCollectionItemsBySlugs } from '~/store/collection/action';
import { getPostDetailBySlug } from '~/store/post/action';
import RelatedPosts from '~/components/partials/post/RelatedPosts';
import ArticleDetail from '~/components/elements/articles/ArticleDetail';
import HomeSidebar from '~/components/partials/homepage/modules/HomeSidebar';
import ArticleDetailWithHero from '~/components/elements/articles/ArticleDetailWithHero';
import BlogHero from '~/components/partials/blog/BlogHero';
import { toggleDrawer } from '~/store/app/action';
import { getInstagram } from '~/store/media/action';
import LayoutDefault from '~/components/layouts/LayoutDefault';

class PostDetailPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        const { slug } = this.props.query;
        const { query } = this.props;
        const collectionSlugs = ['home-featured-posts'];
        this.props.dispatch(getCollectionItemsBySlugs(collectionSlugs));
        if (query) {
            if (!slug) {
                Router.push('/page/page-404');
            }
            this.props.dispatch(getPostDetailBySlug(slug));
        }

        Router.events.on('routeChangeStart', (url) => {
            const nextPid = url.split('/').pop();
            if (nextPid !== '') {
                this.props.dispatch(getPostDetailBySlug(nextPid));
            }
        });
        this.props.dispatch(getInstagram(1));
        this.props.dispatch(toggleDrawer(false));
    }

    render() {
        const { postDetail } = this.props;
        const { layout } = this.props.query;
        let articleDetail, articleDetailWithSidebar;

        if (postDetail !== null) {
            articleDetail = <ArticleDetailWithHero post={postDetail} />;
            articleDetailWithSidebar = <ArticleDetail post={postDetail} />;
        }
        if (layout === 'sidebar') {
            return (
                <LayoutDefault>
                    <main className="ps-page ps-page--blog">
                        <BlogHero title="Single Blog With Sidebar" />
                        <div className="container">
                            <section className="ps-blog--sidebar">
                                <div className="ps-section__left">{articleDetailWithSidebar}</div>
                                <div className="ps-section__right">
                                    <HomeSidebar />
                                </div>
                            </section>
                            <RelatedPosts slug="home-featured-posts" />
                        </div>
                    </main>
                </LayoutDefault>
            );
        }
        return (
            <LayoutDefault title="Post Detail">
                <main className="ps-page ps-page--single-post">
                    {articleDetail}
                    ant-back-top
                </main>
            </LayoutDefault>
        );
    }
}

export default connect((state) => state.post)(PostDetailPage);
