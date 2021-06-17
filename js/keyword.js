function loadItems() {
    return fetch('../data/keyword.json') 
        .then(response => response.json()) 
        .then(json => json.tags); 
}

function displayItems(tags) {
    const container_1 = document.querySelector('.issue_keywords');
    const html = tags[0].map(tag => createHTMLString(tag));
    container_1.innerHTML = html.join('');

    const container_2 = document.querySelector('.activity_keywords');
    const html_2 = tags[1].map(tag => createHTMLString(tag));
    container_2.innerHTML = html_2.join('');
}

function createHTMLString(tag) {
    return `
       <li class='tag'>
           <button type="button">
               ${tag}
           </button>
       </li>
    `
}

function setEventListners() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click',(e)=> {
            onClickTag(e);
        })
    })
}

function onClickTag(e) {
    e.currentTarget.classList.toggle('selected');
    if(e.target.tagName === 'BUTTON'){
        e.target.classList.toggle('selected');
    }
}


loadItems() 
    .then(tags => {
        displayItems(tags);
        setEventListners();
    })
    .catch(console.log);