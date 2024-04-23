// 함수 선언문 : function 키워드로 선언하며 함수 이름을 가짐, 호이스팅에 영향을 받음
function sum (p1, p2) {
  let sum = p1 + p2;
  return sum;
}
// function sum_(p1, p2) {
//   return p1 + p2;
// } // 위에와 같은 결과를 도출

// console.log(sum(21,24));
// function sum(p1, p2) {
//   return p1 + p2;
// } // 호이스팅으로 인해 위에 출력을 하고 아래 함수문을 넣어도 가능하다

let sum1 = sum(21, 24)
// console.log(sum1);

// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식, 호이스팅에 영향을 받지 않음
// 익명의 함수로 만드는 방식 : const 변수명 = function() {};
// 네이밍 함수로 만드는 방식 : const 변수명 = function 함수이름() {};
const gugudan = function(x) {
  for(let i = 1; i < 10; i++) {
    console.log(`${x} x ${i} = ${x * i}`);
  }
};
// 화살표 함수 만들기
const gugudan2 = (x) => {
  for(let i = 1; i < 10; i++) {
    console.log(`${x} x ${i} = ${x * i}`);
  }
}
// gugudan(3); //NaN : not a number이 나오기 때문에 ()안에 숫자를 넣어줘야함
// gugudan2(5);

// 기본값 할당 : 
function sum10(a= 10, b = 20) {
  console.log(a + b)
}
sum10(100)