import React from 'react';
import './Affichage.css';
import Article from './Article';

const Affichage = (props) => {
  const articles = props.list;
  return (
    <div className='text-color cards'>
      {articles.length > 0 ? (
        articles.map((item, i) => <Article key={i} article={item} />)
      ) : (
        <div>Faites une recherche!</div>
      )}
    </div>
  );
};

export default Affichage;
