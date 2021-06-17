import createPopUp from './module/createpopup.js';
import {itemStyleChange, createHTMLString ,setEventListnersList} from './module/createItem.js';
// import {setEventListnersFilter} from './module/filter.js';

// 데이터 가져오기
function loadItems() {
    return fetch('../data/favorlist.json') 
        .then(response => response.json()) 
        .then(json => json.items); 
}

function displayItems(items) {
    const container = document.querySelector('.contents');
    const html = items.map(item => createHTMLString(item));
    container.innerHTML = html.join('');
    itemStyleChange();
}

function customHeartBtn() {
    const itemFavorBtns = document.querySelectorAll('.fa-heart');
    itemFavorBtns.forEach(btn => {
        btn.classList.remove('far');
        btn.classList.add('fas')
    })
    const itemFavorNums = document.querySelectorAll('.favor_degree_num');
    itemFavorNums[0].textContent = '3';
    itemFavorNums[1].textContent = '2';
    itemFavorNums[2].textContent = '1';
}

loadItems() 
    .then(items => {
        displayItems(items);
        createPopUp();
        setEventListnersList();
        // setEventListnersFilter(items);
        customHeartBtn();
    })
    .catch(console.log);

