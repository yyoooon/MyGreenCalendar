export default function createPopUp() {
    const favor_popup = document.querySelector('.favor_popup');
    favor_popup.innerHTML = `
    <form action="" method="GET" class="favor_btn_popup popup">
        <h5>관심도를 설정해주세요</h5>
        <div class='favor_degree_btns'>
            <button type="button" class='favor_degree_btn'>
                <i class="far fa-heart favor_cnt" data-order = '1'></i>
            </button>
            <button type="button" class='favor_degree_btn'>
                <i class="far fa-heart favor_cnt" data-order = '2'></i>
            </button>
            <button type="button" class='favor_degree_btn'>
                <i class="far fa-heart favor_cnt" data-order = '3'></i>
            </button>
        </div>
        <div class="confirm_btns">
            <button type="button" class='filter_element cancle'>
                취소
            </button>
            <button type="button" class='filter_element confirm'>
                확인
            </button>
            <input type="hidden" id="favor_list" name='favor_list' value="" class="favor_list_input">
        </div>
    </form>
    `
    const calendar_popup = document.querySelector('.calendar_popup');
    calendar_popup.innerHTML = `
    <form class="canlendar_btn_popup popup">
        <h5 class='canlendar_btn_popup_text'>캘린더에 추가되었습니다</h5>
            <div class="confirm_btns">
                <button type="button" class='filter_element confirm'>
                    확인
                </button>
            </div>
        </div>
    </form>  
    `
}