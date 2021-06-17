// item 나타내기
export function itemStyleChange() {
    const remainPeriods = document.querySelectorAll('.remain_period');
    remainPeriods.forEach(remain => {
        if(remain.dataset.remain==='none') {
            remain.classList.add('invisible');
        }else if(remain.dataset.remain < 14) {
            remain.style.backgroundColor='#C92517';
        }
    })
}

export function getUUID() { // UUID v4 generator in JavaScript (RFC4122 compliant)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
      return v.toString(16);
    });
  }

export function createHTMLString(item) { 
    let uuid = getUUID();
    return `
     <li class="content" data-type = '${item.type}' data-id='${uuid}' data-title='${item.title}'>
         <a href="#">
          <div class="content_img" style="background-image:url('${item.image}')">
              <div class='content_img_cover'>
                  ${item.text}
              </div>
          </div>
         </a>
         <div class="info_box">
             <header>
                 <a href="#">
                  <h2 class='content_title'>${item.title}</h2>
                 </a>
                 <button type="button" class='favor_before_btn heart_1'>
                     <i class="far fa-heart info-box-favor" data-id='${uuid}'></i>
                     <span class="favor_degree_num" data-id='${uuid}'></span>
                 </button>
             </header>
             <div class='tags'>
                 <strong class="tag">${item.tag1}</strong>
                 <strong class="tag">${item.tag2}</strong>
                 <strong class="tag">${item.tag3}</strong>
                 <strong class="tag">${item.tag4}</strong>
             </div>
         </div>
         <footer>
             <span class=date>${item.date}</span>
             <button type="button" class='cal_btn cal_save_btn' data-id='${uuid}'>캘린더 저장</button>
         </footer>
         <div class='remain_period' data-remain='${item.remain}'>D-${item.remain}</div>
      </li>
    `;
}

// 아이템 이벤트 
let cnt = 0;
let clickTarget;

export function setEventListnersList() {
    const contents = document.querySelectorAll('.content');
    contents.forEach(item => {
        item.addEventListener('click',(e)=>{
            let target = e.target;
            let id = target.dataset.id;
            onHeartBtnClick(target, id, favorPopUp);
            onCalendarBtnClick(target, id, calendarPopUp);
        })
    })

    const favorPopUp = document.querySelector('.favor_btn_popup');
    favorPopUp.addEventListener('click',(e) => {onClickFavorPopup(e, favorPopUp);});

    const calendarPopUp = document.querySelector('.canlendar_btn_popup');
    calendarPopUp.addEventListener('click', (e) => {onClickCalendarPopup(e, calendarPopUp);})
}

function onHeartBtnClick(target, id, favorPopUp) {
    // 빈 하트 클릭
    if(target.matches(`.far[data-id="${id}"]`)) {
        popUpShow(favorPopUp);
        targetReturn(target);
    // 채워진 하트 클릭
    } else if(target.matches(`.fas[data-id="${id}"]`)){
        emptyHeart(target);
        resetScore();
    }
}

function resetScore(){
    cnt = 0;
    let id = clickTarget.dataset.id;
    const item = document.querySelector(`.content[data-id="${id}"]`);
    const favorNum = document.querySelector(`.favor_degree_num[data-id="${id}"]`);
    item.setAttribute('data-score',cnt);
    favorNum.textContent="";
}

function targetReturn(target){
    clickTarget = target;
}

function fillHeart(target){
    target.classList.remove('far');
    target.classList.add('fas');
}

function emptyHeart(target){
    target.classList.remove('fas');
    target.classList.add('far');
}

function emptyHeartsAll(favorBtns){
    for(let x of favorBtns) {
        if(x.classList.contains('fas')) {
            emptyHeart(x);
        }
    }
}

function onCalendarBtnClick(target, id, popup){
    if(target.matches(`.cal_save_btn[data-id="${id}"]`)) {
        calendarAddStyle(target, popup);
        calendarSave(target,true);
    } else if (target.matches(`.cal_cancle_btn[data-id="${id}"]`)) {
        calendarRemoveStyle(target, popup);
        calendarSave(target,false);
    }
}

function calendarAddStyle(cal_btn, calPopUp) {
    cal_btn.classList.remove('cal_save_btn');
    cal_btn.classList.add('cal_cancle_btn');
    cal_btn.textContent = '캘린더 삭제';
    const calendarPopUpText = document.querySelector('.canlendar_btn_popup_text');
    calendarPopUpText.textContent='캘린더에 추가되었습니다'
   popUpShow(calPopUp);
}

function calendarRemoveStyle(cal_btn, calPopUp) {
    cal_btn.classList.remove('cal_cancle_btn');
    cal_btn.classList.add('cal_save_btn');
    cal_btn.textContent = '캘린더 저장';
    const calendarPopUpText = document.querySelector('.canlendar_btn_popup_text');
    calendarPopUpText.textContent='캘린더에서 삭제되었습니다'
    popUpShow(calPopUp);
}

function calendarSave(target,bool) {
    let id = target.dataset.id;
    let item = document.querySelector(`.content[data-id="${id}"]`);
    item.setAttribute('data-save',`${bool}`);
    // console.log(item);
}

function popUpShow(PopUp) {
    PopUp.classList.add('visible');
}
function popUpHide(PopUp){
    PopUp.classList.remove('visible');
}

function onClickFavorPopup(e, favorPopUp) {
    const favorBtns = document.querySelectorAll('.favor_cnt');
    const target = e.target;
    // 취소 버튼
    if (target.matches('.cancle')) {
        popUpHide(favorPopUp);
        cnt = 0;
        emptyHeartsAll(favorBtns);
      // 확인 버튼
    } else if (target.matches('.confirm')) {
        if(cnt===0) {
            popUpHide(favorPopUp);
            return;
        }
        popUpHide(favorPopUp);
        emptyHeartsAll(favorBtns);
        fillHeart(clickTarget);
        addScore();
        getFavoredItem();
        sendFavoredItem();
        // favorPopUp.submit();
    } 
    // 하트 버튼들
    onclickFavorHearts(target,favorBtns);
}

let favoredItems=[];
function getFavoredItem() {
    let id = clickTarget.dataset.id;
    let favoredItem = document.querySelector(`.content[data-id="${id}"]`);
    if(favoredItem.dataset.score === "1" || favoredItem.dataset.score === "2" || favoredItem.dataset.score === "3") {
        return favoredItem.outerHTML;
    }
}

function sendFavoredItem() {
    if(getFavoredItem() != undefined) {
        favoredItems.push(getFavoredItem());
    }
    const favorInput = document.querySelector('.favor_list_input');
    favorInput.value = favoredItems
    console.log(favorInput.value);
}

function addScore(){
    let id = clickTarget.dataset.id;
    const item = document.querySelector(`.content[data-id="${id}"]`);
    const favorNum = document.querySelector(`.favor_degree_num[data-id="${id}"]`);
    item.setAttribute('data-score',cnt);
    favorNum.textContent=`${cnt}`;
}

function onclickFavorHearts(target,favorBtns) {
    if(target.matches('.far[data-order = "1"]')) {
        fillHeart(target);
        cnt = 1;

    } else if(target.matches('.fas[data-order = "1"]')) {
        if(favorBtns[1].classList.contains('far')) {
            emptyHeart(target);
            cnt--;
        }
    }
    if(target.matches('.far[data-order = "2"]')) {
        fillHeart(target);
        fillHeart(favorBtns[0]);
        cnt = 2;

    } else if(target.matches('.fas[data-order = "2"]')) {
        if(favorBtns[2].classList.contains('far')) {
            emptyHeart(target);
            cnt--;
        }
    }
    if(target.matches('.far[data-order = "3"]')) {
        fillHeart(target);
        fillHeart(favorBtns[0]);
        fillHeart(favorBtns[1]);
        cnt = 3;

    } else if(target.matches('.fas[data-order = "3"]')) {
        emptyHeart(target);
        cnt--;
    }
}

function onClickCalendarPopup(e, popup) {
    popUpHide(popup);
}
