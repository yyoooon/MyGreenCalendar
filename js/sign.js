const residence_select_btn_1 = document.querySelector('.area_btn_1');
const residence_btn_1_dropdown = document.querySelector('.area_dropdown_1');

const residence_select_btn_2 = document.querySelector('.area_btn_2');
const residence_btn_2_dropdown = document.querySelector('.area_dropdown_2');

residence_select_btn_1.addEventListener('click',(e)=>{
    residence_btn_1_dropdown.classList.toggle('visible');
})

residence_btn_1_dropdown.addEventListener('click',(e)=>{
    if (e.target.tagName == "LI") {
        const selected = e.target.textContent;
        const detail_btn_text = document.querySelector('.select_text_1');
        detail_btn_text.textContent = selected;
        detail_btn_text.classList.add("selected");
    }
})

residence_select_btn_2.addEventListener('click',(e)=>{
    residence_btn_2_dropdown.classList.toggle('visible');
})

residence_btn_2_dropdown.addEventListener('click',(e)=>{
    if (e.target.tagName == "LI") {
        const selected = e.target.textContent;
        const detail_btn_text = document.querySelector('.select_text_2');
        detail_btn_text.textContent = selected;
        detail_btn_text.classList.add("selected");
    }
})