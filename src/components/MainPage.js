import React from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import Loading from './Loading';
import ErrorPage from './ErrorPage';

export default function MainPage(props) {
    const { posts, handleView, loading, error } = props;
    const postsList = posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
            <Post post={post} handleView={handleView} />
        </Link>
    ));
    return (
        <>
            <section className="header-page">
                <Link to="/posts/new">Создать пост</Link>
            </section>
            <section className="main-page">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <ErrorPage error={error} />
                ) : (
                    postsList
                )}
            </section>
        </>
    );
}