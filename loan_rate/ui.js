const date = new Date();
const year = date.getFullYear();
const month = ('0' + (date.getMonth() + 1)).slice(-2);
const day = ('0' + date.getDate()).slice(-2);
const dateStr = year + '.' + month + '.' + day;

const date_today = document.querySelector(".date_today");
date_today.innerHTML = dateStr;


const $btn_more = document.querySelector(".btn_source"),
      $box_toggle = document.querySelector(".box_toggle");
$btn_more.addEventListener('click', function() {
    $box_toggle.classList.toggle('_show');
});