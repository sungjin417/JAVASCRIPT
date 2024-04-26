// 가입 요청 버튼 활성화를 위한 조건
let isIdValid = false;
let isPwValid = false;
let isMailValid = false;
let isPhoneValid = false;

// 정규식 조건
const regexId = /^\w{8,20}$/;
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const regexMail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;

// 버튼 쿼리셀렉터
const id = document.querySelector("#id_txt");
const pw = document.querySelector("#pw_txt");
const mail = document.querySelector("#email_txt");
const tel = document.querySelector("#phone_txt");

// 입력값에 대한 결과 출력을 위한 쿼리셀렉터
let idCheck = document.querySelector("#id_input_check");
let pwCheck = document.querySelector("#pw_input_check");
let mailCheck = document.querySelector("#email_input_check");
let telCheck = document.querySelector("#phone_input_check");

id.addEventListener("keyup", function(e) {
    e.preventDefault();
    const val = document.getElementById("id_txt").value;
    console.log(val)
    checkInput(val, "id_");
});
pw.addEventListener("keyup", function(e) {
    e.preventDefault();
    const val = document.getElementById("pw_txt").value;
    checkInput(val, "pw_");
});
mail.addEventListener("keyup", function (e) {
    e.preventDefault();
    const val = document.getElementById("email_txt").value;
    checkInput(val, "mail_");
});
tel.addEventListener("keyup", function (e) {
    e.preventDefault();
    const val = document.getElementById("phone_txt").value;
    checkInput(val, "tel_");
});

function displayPhrase(type, isvalid) {
    (isvalid) ? type.textContent = "사용 가능 합니다." : type.textContent = "입력 조건이 맞지 않습니다";
    (isvalid) ? type.style.color = "blue" : type.style.color = "red";
}

function checkInput(val, type) {
    switch(type) {
        case "id_" :
            if (regexId.test(val)) {
                isIdValid = true;
                displayPhrase(idCheck, true);
            } else {
                isIdValid = false;
                displayPhrase(idCheck, false);
            }
            break;
        case "pw_" :
            if (regexPw.test(val)) {
                isPwValid = true;
                displayPhrase(pwCheck, true);
            } else {
                isPwValid = false;
                displayPhrase(pwCheck, false);
            }
            break;
        case "mail_" :
            if (regexMail.test(val)) {
                isMailValid = true;
                displayPhrase(mailCheck, true);
            } else {
                isMailValid = false;
                displayPhrase(mailCheck, false);
            }
            break;
        case "tel_" :
            if (regexTel.test(val)) {
                isPhoneValid = true;
                displayPhrase(telCheck, true);
                console.log('여기까지 오세요?')
            } else {
                isPhoneValid = false;
                displayPhrase(telCheck, false);
            }
            break;
    }
    if (isIdValid && isPwValid && isMailValid && isPhoneValid) {
        let regRegBtn = document.querySelector(".reg_req_btn");
        regRegBtn.style.background = "blue";
    }
}