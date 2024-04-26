let isIdValid = false;


const idBtn = document.querySelector("#id");
const pwBtn = document.querySelector("#pw_confirm");
const mailBtn = document.querySelector("#em_confirm");
const telBtn = document.querySelector("#pn_confirm");
//
const regexId = /^[a-zA-Z0-9]{8,20}$/g;
const regexPw = /^[a-zA-z0-9@$!%*?&]{8,20}$/g;
const regexEmail = /^(\w+\d*\.?\w)+@\w+(\.\w{2,3})+$/;
const regexN = /^\d{3}-\d{3,4}-\d{3,4}$/g;

let idCheck = document.querySelector(".id_input_check");
let pwCheck = document.querySelector(".pw_input_check");
let mailCheck = document.querySelector(".email_input_check");
let telCheck = document.querySelector(".phone_input_check");

const inputId = document.querySelector("#id");
idBtn.addEventListener("keyup", function(e) {
  const val = document.querySelector("#id").value;
  console.log(val)
  checkInput(val, "id");
});
function displayPhrase(type, isvalid) {
  (isvalid) ? type.textContent = "사용 가능 합니다." : type.textContent = "입력 조건이 맞지 않습니다";
  (isvalid) ? type.style.color = "blue" : type.style.color = "red";
}
function checkInput(val, type) {
  switch(type) {
      case "id" :
          if (regexId.test(val)) {
            isIdValid = true;
              displayPhrase(idCheck, true);
              
          } else {
            isIdValid = false;
              displayPhrase(idCheck, false);
          }
          break;
        }
       
      }