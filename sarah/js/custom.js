// $(document).ready(function(){});

// $(function () {});

// console.log ("hello");

// const title = document.querySelector("h1"); // 1. 태그 선택
// const sampleElm = document.querySelector('#sample');

// sampleElm.innerHTML =`<p>Hello World</p>`; //2. 태그 삽입
// console.log(sampleElm);

// const logoElm = document.querySelector(".logo");
// console.log(logoElm)

// logoElm.addEventListener('click', function() {
//     alert("clicked!");
// }); // 3. 이벤트 기능

// for(let i = 0; i < 9; i++) {
//     console.log (`안녕하세요: ${[i]}`);
// }//4. 반복문

const imgWrap = document.querySelector("section"); //사진이 들어갈 요소 저장
// console.log(imgWrap);

let images = [];

for (let i = 0; i < 200; i++) {
    images += `<img src = 'img/pic${i}.jpg' />`
} // +=를 사용하여 전체 사진을 누적하여 접근

imgWrap.innerHTML =  images; // 누적된 전체 사진을 section 태그 내에 삽입

imgWrap.addEventListener('mousemove', function(event){
    let x = event.offsetX; //마우스x축 값 저장
    const screenWidth = document.body.offsetWidth; //현재 브라우저 가로크기 저장
    const imgElm = document.querySelectorAll('section img'); //이미지 크기 저장
    const percent = Math.floor((x / screenWidth) * 200);// 전체 가로 크기를 200으로 나눈 커서가 위치하는 x축 좌표 인데스
    for (let j = 0; j <  imgElm.length; j++){
        imgElm[j].style.display = "none" // 반복문으로 접근한 모든 사진의 display 값을 none으로 변경
    }
    
    imgElm[percent].style.display = "block";    //마우스 커서가 위치한  x좌표를 200으로 나눈 인덱스 번호 사진을 보이게 함
    // console.log (percent);
});












