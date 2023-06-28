window.onload = () => {
  let targetNum = "";
  let form = document.querySelector("#form");
  let logs = document.querySelector("#logs");
  let tryCount = document.querySelector("#tryCount");
  let tryCountVal = 0;
  let ball = 0;
  let strike = 0;
  let out = 0;
  let showOut = document.querySelector(".out");
  let reStart = document.querySelector("#reStart");
  let allNum = Array(9)
    .fill()
    .map(function (v, i) {
      //숫자 1-9 배열 만들기
      return i + 1;
    });
  for (i = 0; i <= 3; i++) {
    //숫자 랜덤 생성
    let randomNum = Math.floor(Math.random() * 9 + 1);
    if (allNum.includes(randomNum)) {
      // 숫자 중복 막기
      allNum.splice(randomNum - 1, 1, "");
      //console.log(allNum);
      targetNum += randomNum; //기준 번호
    } else {
      i--;
    }
  }
  console.log(`정답 : ${targetNum}`);
  let tries = [];
  //let isOut = 0;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (tryCountVal < 9) {
      inputValue = e.target[0].value; // form 태그 안에 들어있는 태그는 인덱스 번호를 이용해서 선택가능.
      if (inputValue.length == 4) {
        if (new Set(inputValue).size !== 4) {
          // 중복된 숫자
          return alert("같은 숫자를 여러개 입력했습니다.");
        }
        if (tries.includes(inputValue)) {
          return alert("이미 입력한 숫자입니다.");
        }
        tries[tryCountVal] = inputValue;

        for (let j = 0; j <= 3; j++) {
          isBall = targetNum.includes(inputValue[j]);
          isStrike = targetNum[j] === inputValue[j];

          if (isBall) {
            ball += 1;
          }
          if (isStrike) {
            //스크라이크 일때
            strike += 1;
            if (ball !== 0) {
              ball -= 1;
            }
            if (strike == 4) {
              alert("정답입니다.");
              logs.innerHTML += `<p>정답 : ${inputValue}</p>`;
              tryCountVal = 0;
              ball = 0;
              strike = 0;
              e.target[0].setAttribute("readonly", true);
              return;
            }
          }
        }

        if (ball == 0 && strike == 0) {
          out += 1;
          console.log(out);
        }
        switch (out) {
          case 1: {
            showOut.textContent = "123";
          }
        }
        if (out == 3) {
          alert("게임종료");
        }

        logs.innerHTML += `<p>${inputValue} : <span class='ball'>${ball}B</span> <span class="strike">${strike}S</span> <span class="out">${out}O</span></p>`; //logs에 검증값 추가

        e.target[0].value = "";
        e.target[0].focus;
        strike = 0;
        ball = 0;
        tryCountVal++; //도전횟수++
        tryCount.textContent = tryCountVal;

        return;
      }
      alert("0-9인 숫자 4개를 입력하세요");
      tryCount.textContent = tryCountVal;
      return;
    }
    alert(`실패 정답은 ${targetNum}`);
    location.reload();
  });
};

reStart.addEventListener("click", () => {
  let r = confirm("게임을 다시 시작하시겠습니까?");
  //location.reload()
  r == true ? location.reload() : none;
});

//jQuery
$(document).ready(() => {
  $("#desBtn").on("click", function () {
    $(".des").toggle();
  });
});
