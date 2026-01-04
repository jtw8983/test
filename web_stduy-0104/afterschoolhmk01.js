// 학생 성적 통계 리포트

// const students = [
//   { name: "철수", score: 85 },
//   { name: "영희", score: 92 },
//   { name: "민수", score: 76 },
//   { name: "지수", score: 59 }
// ];

// 요구사항

// 아래 형태의 객체를 반환하는 함수를 작성하시오.

// {
//   average: 78, //평균
//   maxScore: 92, //최고점
//   minScore: 59, //최하점
//   passCount: 3 // 통과 인원 수
// }


// 평균은 소수점 버림

// 합격 기준: 60점 이상 

const students = [
  { name: "철수", score: 85 },
  { name: "영희", score: 92 },
  { name: "민수", score: 76 },
  { name: "지수", score: 59 }
];

function ScoreReport(students) {
    let total = 0;
    let maxScore = students[0].score;
    let minScore = students[0].score;
    let passCount = 0;

    for(let i = 0; i < students.length; i++){
        const score = students[i].score;

        total += score;

        if(score > maxScore) {
            maxScore = score;
        }

        if(score < minScore) {
            minScore = score;
        }

        if(score >= 60){
            passCount++;
        }

    }

    const average = Math.floor(total/ students.length)

return {
  average: average,
  maxScore: maxScore,
  minScore: minScore,
  passCount: passCount
}
};
console.log(ScoreReport(students));
