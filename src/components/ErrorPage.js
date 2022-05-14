import React from 'react';

export default function ErrorPage(props) {
    const { error } = props;
    console.log('ErrorPage_error_text: ', error);
    return (
        <div className="error-page">
            <div className="error-page__header">Ошибка!</div>
            <div className="error-page__main">
                <span>Что-то пошло не так...</span>
                <p>{error}</p>
            </div>
        </div>
    );
}