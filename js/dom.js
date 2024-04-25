function newRegister() {
  let newItem = document.createElement("li");
  let subject = document.querySelector("#subject");
  newItem.innerHTML = subject.value;
 
  // 추가
  let itemList = document.querySelector("#itemList")
  // insertBefore : 자식요소중 (지정한 위치) 앞에 끼워넣어라
  itemList.insertBefore(newItem, itemList.childNodes[0]);

  // 입력창 초기화
  subject.value = ""; // 화면을 지워주기 위해 넣어 줌

  // 삭제를 위해 리스트 전체 가져오기
  let items = document.querySelectorAll("li");
  //삭제할 아이템을 찾아서 삭제 하기
  for(let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() { // addEventListener 에서 this가 있으면 람다로 넣으면 기능안함 {() => {}}
      if(this.parentNode) {
        this.parentNode.removeChild(this);
      }
    });
  }
}