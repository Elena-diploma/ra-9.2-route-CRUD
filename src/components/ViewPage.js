import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Page404 from './Page404';

export default function ViewPage(props) {
    const { posts, deletePost } = props;
    const navigate = useNavigate();
    const params = useParams();
    const post = posts.find((post) => post.id === Number(params.id));

    const handleRemove = () => {
        deletePost({ id: post.id });
        navigate('/');
    };

    const handleClose = () => {
        navigate(-1);
    };

    return post ? (
        <article className="article view-page">
            <div className="article__header">
                <img className="article__avatar" src={post.avatar} alt="avatar" />
                <div className="article__header-wrapper">
                    <span className="article__name">{post.name}</span>
                    <span className="article__timestamp">{post.created}</span>
                </div>
                <div className="button-close">
          <span className="material-icons" onClick={handleClose}>
            close
          </span>
                </div>
            </div>
            <p className="article__paragraph">{post.content}</p>
            <div className="article__like-and-comment">
                <span className="material-icons">thumb_up_off_alt</span>
                <span className="article__like-and-comment__text">Нравится</span>

                <span className="material-icons">chat_bubble_outline</span>
                <span className="article__like-and-comment__text">Комментировать</span>
            </div>
            <div className="article__paragraph-footer">
                <Link
                    to={`/posts/edit/${post.id}`}
                    className="view-page_button-edit"
                >
                    Изменить
                </Link>
                <button className="view-page_button-delete" onClick={handleRemove}>
                    Удалить
                </button>
            </div>
        </article>
    ) : (
        <Page404 />
    );
}