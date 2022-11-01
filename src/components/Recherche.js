import React from 'react';
import { useState } from 'react';

const Recherche = (props) => {
  const [currentSelected, setCurrentSelected] = useState('tout');
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
      'https://backflipp.wishabi.com/flipp/items/search?locale=fr-ca&postal_code=G2E6A4&q=' +
      magasin;

    try {
      let response = await fetch(lien);
      let responseJson = await response.json();
      return responseJson.items;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={formSubmitedHandler}>
        <label>
          Item:
          <input
            type='text'
            name='item'
            className='m'
            value={item}
            onChange={itemInputChangeHandler}
          />
        </label>
        <input type='submit' value='Rechercher' />
      </form>
      <label>
        Magasin:
        <select
          name='form1'
          className='m'
          value={currentSelected}
          onChange={selectedChangeHandler}
        >
          <option value='tout'>Tout</option>
          <option value='metro'>Metro</option>
          <option value='iga'>IGA</option>
          <option value='super%20C'>Super C</option>
          <option value='provigo'>Provigo</option>
        </select>
      </label>
    </div>
  );
};

export default Recherche;
