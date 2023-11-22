// App.js
import React from 'react';
import {useState,useEffect} from 'react';
import Store from './components/Store';
import axios from 'axios';

const App = () => {

    const [storeItem, setStoreItem] = useState([
      {
        title:"Comnputer",
        price:2000,
      },
      {
        title:"CD games",
        price:30,
      },
      {
        title:"Keyboard",
        price:50,
      }
    ]);

    useEffect(() => {

        axios.get('https://fakestoreapi.com/products').then(({data}) =>{
          setStoreItem(data);
        });
    }, [])

  return (
    <div >
        <Store items ={storeItem} onItemAdd={(itemData) =>{
            setStoreItem([...storeItem, itemData])
        }

        }/>

    </div>
  );
};

export default App;
