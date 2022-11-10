import React from 'react';
import ItemList from './ItemList';

const List = (props) => {
  return (
    <div>
      {props.itemsSel.map((item, i) => (
        <ItemList item={item} key={i} />
      ))}
    </div>
  );
};

export default List;
