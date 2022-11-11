import './App.css';
import { useState } from 'react';

import Recherche from './components/Recherche';
import Affichage from './components/Affichage';
import List from './components/listEpicerie/List';

function App() {
  const [itemList, setItemList] = useState([]);
  const [itemSelect, setItemSelect] = useState([]);

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

  const newItemSelectionneHandler = (itemSel) => {
    // setItemSelect((prevItemSelect) => {
    //   console.log(prevItemSelect.includes(itemSel));
    //   if (prevItemSelect.includes(itemSel)) {
    //     console.log('1');
    //     return prevItemSelect.filter((item) => item !== itemSel);
    //   }
    //   prevItemSelect.push(itemSel);
    //   console.log('2');
    //   return prevItemSelect;
    // });

    if (itemSelect.includes(itemSel)) {
      setItemSelect(itemSelect.filter((item) => item !== itemSel));
    } else {
      setItemSelect([...itemSelect, itemSel]);
    }
  };

  const effacerListHandler = () => {
    setItemList([]);
  };
  const effacerHandler = () => {
    setItemSelect([]);
  };

  return (
    <div className='App'>
      <div className='main-part'>
        <Recherche onNewItemFound={newItemHandler} />
        <div>
          <button onClick={effacerListHandler}>Clear</button>
        </div>
        <br></br>
        <Affichage list={itemList} onSelArticle={newItemSelectionneHandler} />
      </div>
      <div className='list-epiceri'>
        <button onClick={effacerHandler}>Clear</button>
        <List itemsSel={itemSelect} />
      </div>
    </div>
  );
}

export default App;

// metro
// iga
// maxi
// provigo
// super%20C
