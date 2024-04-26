// 객체 리터럴
let memberInfo = [
  {
    name : "이영지",
    age : 21,
    job : "래퍼",
    addr : "서울시 강남구 청담동"
  },
  {
    name : "미미",
    age : 24,
    job : "오마이걸",
    addr : "서울시 강남구 역삼동"
  },
  {
    name : "안유진",
    age : 20,
    job : "아이브",
    addr : "서울시 강북구"
  }
];

let json = JSON.stringify(memberInfo);
console.log(json); // ex. [{"name":"이영지","age":21,"job":"래퍼","addr":"서울시 강남구 청담동"},]

let objectJson = JSON.parse(json);
console.log(objectJson); // = memberInfo 형식