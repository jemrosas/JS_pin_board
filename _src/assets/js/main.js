// 'use strict';

import './edit.js';
import './menu.js';

('use strict');

// Info general

let info = [];

// Obtener datos del API

// const startApp= ()=>{
//   getDataFromApi().then(()=>{
//     paintLists();
//   };
// }

const getDataFromApi = () =>
  fetch('../api/board.json')
    .then((response) => response.json())
    .then((data) => (info.push = data.board.list));

//poner return si no coge datos

getDataFromApi();
console.log(info);

const paintLists = (info) => {
  info.map();
};
