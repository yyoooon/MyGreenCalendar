import createPopUp from './module/createpopup.js';
import {itemStyleChange, createHTMLString ,setEventListnersList} from './module/createItem.js';
// import {setEventListnersFilter} from './module/filter.js';

// 데이터 가져오기
function loadItems() {
    return fetch('../data/calendar.json') 
        .then(response => response.json()) 
        .then(json => json.items); 
}

function displayItems(items) {
    const container = document.querySelector('.contents');
    const html = items.map(item => createHTMLString(item));
    container.innerHTML = html.join('');
    itemStyleChange();
}

// custom
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

function customCalendarBtn() {
    const calBtns = document.querySelectorAll('.cal_btn');
    calBtns.forEach(btn => {
        btn.classList.remove('cal_save_btn');
        btn.classList.add('cal_cancle_btn');
    })
}


loadItems() 
    .then(items => {
        displayItems(items);
        createPopUp();
        setEventListnersList();
        // setEventListnersFilter(items);
        customHeartBtn();
        customCalendarBtn();
    })
    .catch(console.log);