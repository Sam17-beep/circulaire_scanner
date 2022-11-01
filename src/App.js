import './App.css';
import { useState } from 'react';

import Recherche from './components/Recherche';
import Affichage from './components/Affichage';

function App() {
  const [itemList, setItemList] = useState([]);

  const newItemHandler = (items, mot) => {
    if (items.length > 0) {
      let formatedItems = [];
      items.forEach((item) => {
        formatedItems.push({
          magasin: String(item.merchant_name),
          item: String(item.name),
          preText: String(item.pre_price_text),
          prix: String(item.current_price),
          postText: String(item.post_price_text),
          mot: mot,
          image: item.clipping_image_url,
        });
      });
      setItemList((prevItemList) => [...prevItemList, ...formatedItems]);
    }
  };

  return (
    <div className='App'>
      <Recherche onNewItemFound={newItemHandler} />
      <br></br>
      <Affichage list={itemList} />
    </div>
  );
}

export default App;

// metro
// iga
// maxi
// provigo
// super%20C
