import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CreatePage(props) {
    const { addPost } = props;
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!content) return;
        addPost({ content, id: '0' });
        setContent('');
        navigate('/');
    };

    const handleChange = ({ target }) => {
        setContent(target.value);
    };

    return (
        <article className="article create-page">
            <div className="create-page__header-wrapper">
                <div className="create-page__header-wrapper__category-wrapper">
                    <span className="material-icons">edit</span>
                    <span className="category-name">Публикация</span>
                </div>
                <div className="create-page__header-wrapper__category-wrapper">
                    <span className="material-icons">photo_camera</span>
                    <span className="category-name">Фото/видео</span>
                </div>
                <div className="create-page__header-wrapper__category-wrapper">
                    <span className="material-icons">video_camera_front</span>
                    <span className="category-name">Прямой эфир</span>
                </div>
                <div className="create-page__header-wrapper__category-wrapper">
                    <span className="material-icons">more</span>
                    <span className="category-name">Еще</span>
                </div>
                <div className="create-page__header-wrapper__category-wrapper">
                    <Link to="/">
                        <span className="material-icons">close</span>
                    </Link>
                </div>
            </div>
            <form className="create-page__form" onSubmit={handleSubmit}>
                <div className="create-page__form__inputs-wrapper">
                    <div className="create-page__form__input-wrapper">
                        <label className="create-page__form__label label-post">
              <textarea
                  className="create-page__form__input input-post"
                  name="post"
                  value={content}
                  type="text"
                  required
                  placeholder="Например, Lorem ipsum..."
                  onChange={handleChange}
              />
                        </label>
                    </div>
                </div>
                <button
                    className="create-page__form__button-submit button-submit"
                    type="submit"
                >
                    Опубликовать
                </button>
            </form>
        </article>
    );
}