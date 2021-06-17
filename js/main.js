import createPopUp from './module/createpopup.js';
import {itemStyleChange, createHTMLString ,setEventListnersList} from './module/createItem.js';

// 데이터 가져오기
function loadItems() {
    return fetch('../data/campaign.json') 
        .then(response => response.json()) 
        .then(json => json.items); 
}

function displayItems(items) {
    const recContainer = document.querySelector('.recommend_items');
    const recFiltered = items.filter(item => item.recommend === true);
    const recHtml = recFiltered.map(item => createHTMLString(item));
    recContainer.innerHTML = recHtml.join('');

    const areaContainer = document.querySelector('.area_items');
    const areaFiltered = items.filter(item => item.area === true);
    const areaHtml = areaFiltered.map(item => createHTMLString(item));
    areaContainer.innerHTML = areaHtml.join('');
    itemStyleChange();
}


loadItems() 
    .then(items => {
        displayItems(items);
        createPopUp();
        setEventListnersList();
    })
    .catch(console.log);