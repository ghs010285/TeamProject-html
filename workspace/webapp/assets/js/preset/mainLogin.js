const loginDropdownBox = document.querySelector('.main-login-dropdown-box');
const dropList = document.querySelector('#main-login-display');
const loginCommu = document.querySelector('.main-login-commu');
const loginCommuSub = document.querySelector('.main-login-commu-sub');


// 로그인 중일 때 닉네임 누르면 드롭다운
// 한 번 더 누르면 올라감
let count1 = 0;
loginDropdownBox.addEventListener('click', () => {
  if(count1 % 2 === 0){
    dropList.style.display = 'block';
    count1++;
  } else {
    dropList.style.display = 'none';
    count1++;
  }
});