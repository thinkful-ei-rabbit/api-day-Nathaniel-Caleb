import $ from 'jquery';

import 'normalize.css';
import './index.css';

import api from './api';

import shoppingList from './shopping-list';

import store from './store';

const main = function () {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => {
        store.addItem(item)
      });
      shoppingList.render();
    });



  api.getItems()
    .then(res => res.json())
    .then(resJson => { console.log(resJson);
    });



  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);