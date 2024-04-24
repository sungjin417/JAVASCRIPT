// Array 객체 : 배열에서 사용할 수 있는 많은 속성과 메소드가 정의 되어 있음
// 비파괴적인 메서드 : forEach()
const arr = [10, 20, 30, 40, 50, 60];
arr.forEach(e => {
  console.log(e + 1000);
});

arr.forEach(e => console.log(e * e));

// console.log(arr.map(e => {e + 2000})); // undifiend

const resp = arr.map(e => e * e);
console.log(resp);

// toString() : 배열안의 모든 문자를 쉼표를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Banana,Orange,Apple,Mango
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]

// join() : 배열안의 모든 문자를 매개변수로 지정한 문자를 이용해 결합
// fruits.join(" * ");
console.log(fruits.join( " * "));

// pop() : 스택 자료 구조로 마지막 데이터를 제거하고 결과를 반환, 파괴적 메소드
console.log(fruits.pop()); // Mango
console.log(fruits); // [ 'Banana', 'Orange', 'Apple' ]
// push() : 스택 자료 구조로 새로운 요소를 추가
fruits.push("Kiwi")
console.log(fruits);
// shift() : 배열의 첫번째 요소를 제거하고 결과를 반환
console.log(fruits.shift());
console.log(fruits); // [ 'Orange', 'Apple', 'Kiwi' ]

fruits[0] = "딸기";
console.log(fruits); // [ '딸기', 'Apple', 'Kiwi' ]

let arr5 = ["사과", "딸기", "참외"];
let arr6 = ["포도", "수박", "바나나"];
let arr7 = ["키위", "망고", "오렌지"];
let arr8 = ["복숭아", "자두", "멜론"];
let totFruits = arr5.concat(arr6, arr7, arr8);
console.log(totFruits);

let fruits9 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits9.slice(3); // [Apple, Mango]
let citrus2 = fruits9.slice(1,3); // [Orange, Lemon]
console.log(fruits9.sort());



