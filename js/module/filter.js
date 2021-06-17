// 전체, 공공, 민간 분류 필터 
function onButtonClick(e, items) {
    const dataset = e.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    const contents = document.querySelectorAll('.content');
    if(key == null || value == null) return;
    updateItems(contents, key, value);
    changeFocus(e);
}

function updateItems(contents, key, value) {
    contents.forEach(item => {
        if(item.dataset[key] === value) {
            item.classList.remove('invisible');
        } else if(item.dataset[key] != value && value != 'all') {
            item.classList.add('invisible');
        } else {
            item.classList.remove('invisible');
        }
    });
}

function changeFocus(e) {
    const classifi_btn_whole = document.querySelector('.classifi_btn_whole');
    const classifi_btn_public = document.querySelector('.classifi_btn_public');
    const classifi_btn_private = document.querySelector('.classifi_btn_private');

    let target = e.target;
    if(target.dataset.value === 'all') {
        classifi_btn_whole.classList.add('selected');
        classifi_btn_public.classList.remove('selected');
        classifi_btn_private.classList.remove('selected'); 
    } else if (target.dataset.value === 'public') {
        classifi_btn_public.classList.add('selected');
        classifi_btn_whole.classList.remove('selected');
        classifi_btn_private.classList.remove('selected');
    } else if (target.dataset.value === 'private') {
        classifi_btn_private.classList.add('selected');
        classifi_btn_public.classList.remove('selected');
        classifi_btn_whole.classList.remove('selected');
    }
}


// 디테일 필터 
function onDropdownBtnClick(e) {
    const section_menu_filter_dropdown = document.querySelector('.section_menu_filter_dropdown');
    e.currentTarget.classList.toggle('click');
    section_menu_filter_dropdown.classList.toggle('visible');
    section_menu_filter_dropdown.addEventListener('click',(e) => onDetailFilterClick(e));
}

function onDetailFilterClick(e) {
   const target = e.target;
   onAreaDropDownClick(target);
   onSortBtnsClick(target);
}

function onAreaDropDownClick(target) {
    if(target.matches('.area_filter_detail_btn_1') || target.matches('.area_drop1')) {
        const areaDropdown_1 = document.querySelector('.area_filter_detail_dropdown_1');
        areaDropdown_1.classList.toggle('visible');
        areaDropdown_1.addEventListener('click', (e) => onDropdownListClick(e));
    } else if (target.matches('.area_filter_detail_btn_2') || target.matches('.area_drop2')) {
        const areaDropdown_2 = document.querySelector('.area_filter_detail_dropdown_2');
        areaDropdown_2.classList.toggle('visible');
        areaDropdown_2.addEventListener('click', (e) => onDropdownListClick(e));
    }
}

function onDropdownListClick(e) {
    if (e.target.tagName == "LI") {
        const selected = e.target.textContent;
        const detail_btn_text = document.querySelector('.detail_btn_text');
        detail_btn_text.textContent = selected;
        detail_btn_text.classList.add("selected");
        e.currentTarget.classList.remove('visible');
    }
}

function onSortBtnsClick(target) {
    const newest = document.querySelector('.sort_filter_btn_newest');
    const popularity = document.querySelector('.sort_filter_btn_popularity');
    const deadline = document.querySelector('.sort_filter_btn_deadline');
    if(target.matches('.sort_filter_btn_newest')) {
        target.classList.add('selected');
        popularity.classList.remove('selected');
        deadline.classList.remove('selected');

    } else if (target.matches('.sort_filter_btn_popularity')) {
        target.classList.add('selected');
        newest.classList.remove('selected');
        deadline.classList.remove('selected');
    } else if (target.matches('.sort_filter_btn_deadline')) {
        target.classList.add('selected');
        popularity.classList.remove('selected');
        newest.classList.remove('selected');
    }
}




export function setEventListnersFilter(items) {
    const classifiBtns = document.querySelector('.classifi_btns');
    const filter_dropdown_btn = document.querySelector('.filter_dropdown_btn');
    classifiBtns.addEventListener('click', (e) => onButtonClick(e, items));
    filter_dropdown_btn.addEventListener('click', (e) => onDropdownBtnClick(e));
}

