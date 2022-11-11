import React from 'react';
import ItemList from './ItemList';
import './List.css';

const List = (props) => {
  return (
    <div className='padding'>
      {props.itemsSel.length === 0 ? (
        <p className='placeholder'>
          Cliquer sur un article pour l'ajouter à la list d'épicerie
        </p>
      ) : (
        props.itemsSel.map((item, i) => <ItemList item={item} key={i} />)
      )}
    </div>
  );
};

export default List;
