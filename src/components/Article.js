import React from 'react';
import './Article.css';

const Article = (props) => {
  const item = props.article;
  let prix = '';
  let postText = '';
  if (item.preText !== 'null') {
    prix += item.preText;
  }
  prix += item.prix + '$';
  if (item.postText !== 'null') {
    postText += item.postText;
  }

  return (
    <div className='card'>
      <div className='info'>
        <div>{item.magasin}</div>
        <a className='petitChar' href={item.image} target='_blank'>
          {item.mot}
        </a>
      </div>
      <div className='titre'>{item.item.toLowerCase()}</div>
      <div className='prix'>{prix}</div>
      <div className='petitChar'>{postText}</div>
    </div>
  );
};

export default Article;

// magasin: String(item.merchant_name),
// item: String(item.name),
// preText: String(item.pre_price_text),
// prix: String(item.current_price),
// postText: String(item.post_price_text),
// image: item.clipping_image_url,
