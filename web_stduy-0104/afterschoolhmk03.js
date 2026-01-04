// 다음은 도서관 대여 데이터 배열입니다.

// const rentals = [
//   {
//     userId: 1,
//     userName: "Kim",
//     isPremium: true,
//     books: [
//       { title: "JavaScript 입문", fee: 5000, days: 7 },
//       { title: "React 완벽 가이드", fee: 7000, days: 5 }
//     ]
//   },
//   {
//     userId: 2,
//     userName: "Lee",
//     isPremium: false,
//     books: [
//       { title: "HTML/CSS 기초", fee: 3000, days: 10 }
//     ]
//   },
//   {
//     userId: 3,
//     userName: "Park",
//     isPremium: true,
//     books: []
//   }
// ];


//  요구사항
// - 함수 작성 (Function)

// calculateRentalSummary(rentals) 함수를 작성하세요.

// - 조건문 (Condition)

// 대여한 책이 없는 사용자 제외

// 프리미엄 회원(isPremium === true) 은 총 금액의 20% 할인

// 일반 회원은 할인 없음

// - 반복문 (Loop)

// 사용자 배열 반복

// 각 사용자의 books 배열 반복

// - 객체(Object)

// 사용자별 대여 요약 객체 생성

//  -배열(Array)

// 최종 결과는 배열로 반환


// 아래 형식의 객체들을 담은 배열을 반환해야 합니다.

// [
//   {
//     name: "Kim",
//     totalPrice: 1260000,
//     orderCount: 2
//   }
// ]

// 계산 규칙

// totalPrice = price × quantity 의 합

// orderCount = 주문 개수

// 조건에 맞는 회원만 포함

const rentals = [
  {
    userId: 1,
    userName: "Kim",
    isPremium: true,
    books: [
      { title: "JavaScript 입문", fee: 5000, days: 7 },
      { title: "React 완벽 가이드", fee: 7000, days: 5 }
    ]
  },
  {
    userId: 2,
    userName: "Lee",
    isPremium: false,
    books: [
      { title: "HTML/CSS 기초", fee: 3000, days: 10 }
    ]
  },
  {
    userId: 3,
    userName: "Park",
    isPremium: true,
    books: []
  }
];

function calculateRentalSummary(rentals){
    const result= [];

    for(let i= 0; i < rentals.length; i++){
        const user = rentals[i];

        if(user.books.length === 0) continue;

        let totalPrice = 0;

        for(let j= 0; j < user.books.length; j++){
            const book = user.books[j];

            totalPrice += book.fee * book.days;
        }

        if(user.isPremium){
            totalPrice = totalPrice * 0.8;
        }

        const RentalSummary = {
            name: user.userName,
            totalPrice: totalPrice,
            orderCount: user.books.length
        };

        result.push(RentalSummary)

        
    }

    return result;
}

console.log(calculateRentalSummary(rentals));