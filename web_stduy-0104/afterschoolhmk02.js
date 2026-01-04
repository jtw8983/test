// ###문제: 온라인 쇼핑몰 주문 자동화 시스템###

// [데이터 구조]
// 입력 데이터는 아래와 같은 주문 객체들로 구성된 배열입니다.
// javascript
// const orders = [
//   { id: 1, customer: "김철수", items: ["노트북", "마우스"], total: 1200000, status: "배송중" },
//   { id: 2, customer: "이영희", items: ["키보드"], total: 50000, status: "완료" },
//   { id: 3, customer: "박지성", items: ["모니터", "거치대"], total: 300000, status: "배송중" },
//   { id: 4, customer: "최유리", items: ["USB Hub"], total: 20000, status: "배송중" },
// ];

// [요구 사항]
// 함수 정의: processOrders(orderList) 함수를 만드세요.
// 반복 및 객체 접근: 배열 내의 각 주문 객체를 순회하며 데이터에 접근해야 합니다.
// 조건문 (필터링): status가 "배송중"인 주문만 골라내야 합니다.
// 조건문 (VIP 산정): 배송중인 주문 중 total 금액이 100,000원 이상인 고객에게는 isVIP: true라는 새로운 속성을 객체에 추가하세요. (10만 원 미만은 false)
// 결과 반환: 수정된 "배송중" 상태의 주문 객체들만 담긴 새로운 배열을 반환하세요.


const orders = [
  { id: 1, customer: "김철수", items: ["노트북", "마우스"], total: 1200000, status: "배송중" },
  { id: 2, customer: "이영희", items: ["키보드"], total: 50000, status: "완료" },
  { id: 3, customer: "박지성", items: ["모니터", "거치대"], total: 300000, status: "배송중" },
  { id: 4, customer: "최유리", items: ["USB Hub"], total: 20000, status: "배송중" },
];

function processOrders(orders){
    const result = [];

    for(let i=0; i < orders.length; i++){
        const order = orders[i];

        if(order.status ==="배송중"){
           if(order.total >= 100000){
            order.isVIP =true;
           } else{
            order.isVIP =false;
           }


           result.push(order);
        }
    }

    return result;
}

console.log(processOrders(orders));






