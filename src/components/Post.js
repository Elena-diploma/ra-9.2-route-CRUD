import React from 'react';
import { getDateAgoString } from '../utils/utils';

export default function Post(props) {
    const { post } = props;
    const formatTime = getDateAgoString(post.created);
    return (
        <article className="article">
            <div className="article__header">
                <img className="article__avatar" src={post.avatar} alt="avatar" />
                <div className="article__header-wrapper">
                    <span className="article__name">{post.name}</span>
                    <span className="article__timestamp">
            {formatTime.num !== '0'
                ? `${formatTime.num} ${formatTime.text}`
                : 'сейчас'}
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
                <img
                    className="article__avatar avatar-small"
                    src={post.avatar}
                    alt="avatar"
                />
                <span className="article__paragraph-footer__fake-input">
          Напишите комментарий...
        </span>
                <div className="article__paragraph-footer__icon-wrapper">
                    <span className="material-icons">sentiment_satisfied_alt</span>
                    <span className="material-icons">photo_camera</span>
                    <span className="material-icons">gif_box</span>
                    <span className="material-icons">sticky_note_2</span>
                </div>
            </div>
        </article>
    );
}