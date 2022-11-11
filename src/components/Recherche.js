import React from 'react';
import { useState } from 'react';
import './Recherche.css';

const Recherche = (props) => {
  const [currentSelected, setCurrentSelected] = useState('metro');
  const [item, setItem] = useState('');

  const itemInputChangeHandler = (e) => {
    setItem(e.target.value);
  };

  const selectedChangeHandler = (e) => {
    setCurrentSelected(e.target.value);
  };

  const formSubmitedHandler = (e) => {
    e.preventDefault();
    getMoviesFromApi(currentSelected).then(handleFulfilled);
  };

  const handleFulfilled = (items) => {
    let itemsFound = [];
    for (let i = 0; i < items.length; i++) {
      if (String(items[i].name).includes(item.toUpperCase())) {
        itemsFound.push(items[i]);
      }
    }
    props.onNewItemFound(itemsFound, item);
  };

  async function getMoviesFromApi(magasin) {
    let lien =
      'https://backflipp.wishabi.com/flipp/items/search?locale=fr-ca&postal_code=G2E6A4&q=';
    if (magasin === 'tout') {
      lien += item;
    } else {
      lien += magasin;
    }

    try {
      let response = await fetch(lien);
      let responseJson = await response.json();
      return responseJson.items;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='container'>
      <form onSubmit={formSubmitedHandler} className='space-under'>
        <label className='space-right'>Article :</label>
        <input
          type='text'
          name='item'
          value={item}
          onChange={itemInputChangeHandler}
        />
        <input type='submit' value={'🔍'} />
      </form>
      <div>
        <label className='space-right'>Magasin:</label>
        <select
          name='form1'
          value={currentSelected}
          onChange={selectedChangeHandler}
        >
          <option value='metro'>Metro</option>
          <option value='iga'>IGA</option>
          <option value='super%20C'>Super C</option>
          <option value='provigo'>Provigo</option>
          <option value='maxi'>Maxi</option>
          <option value='tout'>Tout</option>
        </select>
      </div>
    </div>
  );
};

export default Recherche;
