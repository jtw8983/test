// 기본 문제 6-1
//나이가 20 이상이면 “성인”, 아니면 “미성년자”를 출력하시오.

let age = 18;

if(age >=20){
    console.log ("성인");
}else{
    console.log("미성년자");
}
    


//어려운 문제 6-2
//숫자 하나가 주어질 때

// 0보다 크면 "양수"
// 0이면 "0"
// 0보다 작으면 "음수" 를 출력하시오.



// //조건

// 반드시 if / else if / else 사용

let num = -3;

if( num > 0){
    console.log("양수");
} else if( num === 0){
    console.log("0")
} else{
    console.log("음수");
}


//  기본 문제 7-1
// 아이디와 비밀번호가 모두 맞으면 “로그인 성공”을 출력하시오.
// <조건>
// id가 "admin" 이고
// pw가 "1234" 일 때만 성공

let id = "admin";
let pw = "1234";

if( id ==="admin" && pw ==="1234"){
    console.log("로그인 성공");
} else{
    console.log("로그인 실패");
}


//  어려운 문제 7-2
// 놀이기구 탑승 조건

// 나이가 12세 이상 이거나
// 키가 140cm 이상이면 👉 "탑승 가능" 그 외는 "탑승 불가"
//  반드시 || 사용

let age = 10;
let height = 150;

if(age >= 12 || height >= 140){
    console.log("탑승 가능");
} else{
    console.log("탑승 불가");
}

// 기본 문제 8-1
// 1부터 10까지 숫자를 모두 출력하시오.

for(let i= 0; i<=10;i++){
    console.log(i);
}


//어려운 문제 8-2
//1부터 50까지 숫자 중 3의 배수만 출력하시오.
// 조건
//for문 + if문 사용

for(let i=0; i<=50; i++){
    if(i%3===0){
        console.log(i);
    }
}


//기본 문제 9-1
//요일 숫자가 주어질 때 요일을 출력하시오.

// 출력

//수요일
//조건

//1 → 월, 2 → 화, 3 → 수 … 7 → 일
//반드시 switch 사용

let day = 3;

switch(day){
    case 1:
        console.log("월요일");
        break;
    case 2:
        console.log("화요일");
        break;
    case 3:
        console.log("수요일");
        break;
    case 4:
        console.log("목요일");
        break;
    case 5:
        console.log("금요일");
        break;
    case 6:
        console.log("토요일");
        break;
    case 7:
        console.log("일요일");
        break;
}


//어려운 문제 9-2
//등급에 따라 메시지를 출력하시오.

// //등급	출력
// A	우수
// B	양호
// C	보통
// D	탈락
// 그 외	잘못된 등급
// 조건 : switch + default 필수

let grade = "B";

switch (grade) {
    case "A":
        console.log("우수");
        break;
    case "B":
        console.log("양호");
        break;
    case "C":
        console.log("보통");
        break;
    case "D":
        console.log("탈락");
        break;
    default:
        console.log("잘못된 등급");
}


//기본 문제 10-1
//두 숫자를 받아서 합을 출력하는 함수 만들기
//조건 function 사용

add(3, 5); // 출력: 8

function add(a,b){
    console.log(a+b);
}

add(3,5);


// //어려운 문제 10-2
// 숫자 하나를 받아서

// 짝수면 "짝수"
// 홀수면 "홀수" 를 return 하는 함수 만들기

// 출력    
// 홀수

//조건 
// return 필수, 함수 안에서 if 사용


function checkEvenOdd(num){
    if(num % 2 ===0){
        return "짝수";
    } else{
        return "홀수";
    }
}

let result = checkEvenOdd(7);
console.log(result);


