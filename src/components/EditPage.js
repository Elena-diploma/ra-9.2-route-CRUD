import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Page404 from './Page404';

export default function EditPage(props) {
    const { posts, addPost } = props;
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const params = useParams();
    const post = posts.find((post) => post.id === Number(params.id));

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!content || !post.id) return;
        addPost({ content, id: post.id });
        setContent('');
        navigate('/');
    };

    const handleChange = ({ target }) => {
        setContent(target.value);
    };

    const handleClose = () => {
        navigate(-1);
    };

    return post ? (
        <article className="article edit-page">
            <div className="edit-page__header-wrapper">
                <div className="edit-page__header-wrapper__title">
                    Редактировать публикацию
                </div>
                <div className="edit-page__header-wrapper__button-close">
          <span className="material-icons" onClick={handleClose}>
            close
          </span>
                </div>
            </div>
            <form className="edit-page__form" onSubmit={handleSubmit}>
                <div className="edit-page__form__inputs-wrapper">
                    <img className="article__avatar" src={post.avatar} alt="avatar" />
                    <div className="edit-page__form__input-wrapper">
                        <label className="edit-page__form__label label-post">
              <textarea
                  className="edit-page__form__input input-post"
                  name="post"
                  defaultValue={post.content}
                  type="text"
                  required
                  placeholder="Например, Lorem ipsum..."
                  onChange={handleChange}
              />
                        </label>
                    </div>
                </div>
                <div className="edit-page__categories-wrapper">
                    <div className="edit-page__category-wrapper">
                        <span className="material-icons">image</span>
                        <span className="">Фото/видео</span>
                    </div>
                    <div className="edit-page__category-wrapper">
                        <span className="material-icons">person_add_alt_1</span>
                        <span className="">Отметить друзей</span>
                    </div>
                    <div className="edit-page__category-wrapper">
                        <span className="material-icons">mood</span>
                        <span className="">Чувства/действия</span>
                    </div>
                    <div className="edit-page__category-wrapper">
                        <span className="material-icons">place</span>
                        <span className="">Отметить посещение</span>
                    </div>
                    <div className="edit-page__category-wrapper">
                        <span className="material-icons">gif_box</span>
                        <span className="">GIF</span>
                    </div>
                </div>
                <button
                    className="edit-page__form__button-submit button-submit"
                    type="submit"
                >
                    Сохранить
                </button>
            </form>
        </article>
    ) : (
        <Page404 />
    );
}