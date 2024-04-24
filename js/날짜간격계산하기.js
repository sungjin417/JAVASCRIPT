const date = new Date();
let now = date.getTime(); // 현재시간 기준으로 경과시간을 가져옴
console.log(now);

const date2 = new Date("2024/08/30/09:00:00")
let dDay = date2.getTime(); // 수료일 기준으로 경과 시간을 가져옴
console.log(dDay);


// console.log(date2.toLocaleString()); // 컴퓨터에 지정된 표준시간대에 따라 시간을 출력해 줌

const timeDiff = dDay - now;
const diffDate = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
console.log(`학원수료 ${diffDate}일 남았습니다.힘내세요!!!!! 화이팅!`);
document.getElementById("myDay").innerHTML = `<h1>학원수료<h1> <a>${diffDate} <span/>일 남았습니다.힘내세요!!!!!<br> 화이팅!`;
