import React from 'react';
import './ItemList.css';

const ItemList = (props) => {
  return <li>{props.item.item.toLowerCase()}</li>;
};

export default ItemList;
