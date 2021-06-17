import createPopUp from './module/createpopup.js';
import {itemStyleChange, createHTMLString ,setEventListnersList} from './module/createItem.js';
import {setEventListnersFilter} from './module/filter.js';

// 데이터 가져오기
function loadItems() {
    return fetch('../data/campaign.json') 
        .then(response => response.json()) 
        .then(json => json.items); 
}

function displayItems(items) {
    const container = document.querySelector('.contents');
    const html = items.map(item => createHTMLString(item));
    container.innerHTML = html.join('');
    itemStyleChange();
}


loadItems() 
    .then(items => {
        displayItems(items);
        createPopUp();
        setEventListnersList();
        setEventListnersFilter(items);
    })
    .catch(console.log);