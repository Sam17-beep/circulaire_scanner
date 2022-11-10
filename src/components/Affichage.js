import React from 'react';
import './Affichage.css';
import Article from './Article';

const Affichage = (props) => {
  const articles = props.list;
  // const onClickPrixCroissant = () => {};

  const articleSelectionneHandler = (key) => {
    props.onSelArticle(articles[key]);
  };

  return (
    <>
      {/* <button onClick={onClickPrixCroissant}>Ordre croissant</button> */}
      <div className='text-color cards'>
        {articles.length > 0 ? (
          articles.map((item, i) => (
            <Article
              key={i}
              cle={i}
              article={item}
              onArticleSelectionne={articleSelectionneHandler}
            />
          ))
        ) : (
          <div>Faites une recherche!</div>
        )}
      </div>
    </>
  );
};

export default Affichage;
