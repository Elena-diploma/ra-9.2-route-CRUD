import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './components/Page404';
import CreatePage from './components/CreatePage';
import ViewPage from './components/ViewPage';
import EditPage from './components/EditPage';
import MainPage from './components/MainPage';

export default function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const url = process.env.REACT_APP_URL_POSTS_BUILD;

    useEffect(() => {
        fetchAPI();
    }, []);

    const fetchAPI = (options) => {
        setLoading(true);
        setError('');
        if (!options || !options.method) {
            return fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    setPosts([...result]);
                })
                .catch((e) => {
                    console.log('Error_text: ', e.message);
                    setError(e.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }

        const { id, content, method } = options;
        return fetch(method !== 'DELETE' ? url : url + '/' + id, {
            method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                id,
                content,
            }),
        })
            .catch((e) => {
                console.log('Error_text: ', e.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const addPost = (options) => {
        fetchAPI({ ...options, method: 'POST' })
            .then((response) => {
                if (!response) throw new Error('Server not responding');
                if (!response.ok) {
                    console.log(response);
                    return;
                }
                fetchAPI();
            })
            .catch((e) => {
                console.log('Error_text: ', e.message);
                setError(error + '\n' + e.message);
            });
    };

    const deletePost = (options) => {
        fetchAPI({ ...options, method: 'DELETE' })
            .then((response) => {
                if (!response) throw new Error('Server not responding');
                if (!response.ok) {
                    console.log(response);
                    return;
                }
                fetchAPI();
            })
            .catch((e) => {
                console.log('Error_text: ', e.message);
                setError(error + '\n' + e.message);
            });
    };

    return (
        <Router>
            <div className="page">
                <Routes>
                    <Route
                        path="/posts/new"
                        element={<CreatePage addPost={addPost} />}
                    />
                    <Route
                        path="/posts/:id"
                        element={<ViewPage posts={posts} deletePost={deletePost} />}
                    />
                    <Route
                        path="/posts/edit/:id"
                        element={<EditPage posts={posts} addPost={addPost} />}
                    />
                    <Route
                        path="/"
                        element={<MainPage posts={posts} loading={loading} error={error} />}
                    />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </div>
        </Router>
    );
}