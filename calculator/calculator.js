/* 키보드 이벤트 */

/* window.addEventListener("keydown", e => {
        const key = e.key;
        const keyId = `#b${key}`;
        const keyElement = document.querySelector(keyId);
 
 
        keyElement.addEventListener("click", () => {
        // 클릭 이벤트가 발생했을 때 수행할 동작을 여기에 작성하세요.
        // 예를 들어, 클릭되었을 때 어떤 동작을 수행하거나 함수를 호출할 수 있습니다.
        console.log("클릭되었습니다!");
      });
      }); */
window.addEventListener("keydown", (e) => {
  console.log(e);
  const key = e.key;
  const keyId = `#btn${key}`;
  const keyElement = document.querySelector(keyId);

  if (keyElement) {
    // keyElement를 클릭하도록 강제로 이벤트를 발생시킴
    const clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    keyElement.dispatchEvent(clickEvent);
  }
});

/* 
    숫자 누르면 첫번째변수에 저장.
    기호 버튼을 누르고 변수에 기호를 저장하고 숫자를 누르면 두번째 변수에 저장.
    = 누르면 세번쨰 변수에 => 첫번쨰변수 기호 두번째 변수 계산 => 결과창에 출력.
    결과창에 출력하고 세번째 변수를 첫번째 변수에 넣는다.
    */
window.onload = function () {
  let num = document.querySelectorAll(".num");
  let cal = document.querySelectorAll(".cal");
  let eq = document.querySelector(".eq");
  let del = document.querySelector(".del");
  let result = document.querySelector(".result");
  let reset = document.querySelector(".reset");
  let firstNum = document.querySelector("#firstNum");
  let symbol = document.querySelector("#symbol");
  let lastNum = document.querySelector("#lastNum");
  let numValue1 = "";
  let calValue = "";
  let numValue2 = "";

  cal.forEach((clickCal) => {
    // 계산기 기호 클릭
    clickCal.addEventListener("click", function (e) {
      if (funcResult) {
        numValue1 = funcResult;
        firstNum.textContent = numValue1;
      }

      calValue = e.target.innerText;
      //console.log(calValue);
      symbol.textContent = calValue;
    });
  });

  num.forEach((clickNum) => {
    // 계산기 숫자 클릭
    clickNum.addEventListener("click", function (e) {
      /* if(funcResult){
            numValue1 = funcResult;
            firstNum.textContent = numValue1;
          } */

      if (!calValue) {
        numValue1 += e.target.innerText;
        firstNum.textContent = numValue1;
        //console.log('첫번쨰 값 : ' + numValue1);
      } else {
        numValue2 += e.target.innerText;
        lastNum.textContent = numValue2;
        //console.log('두번쨰 값 : ' + numValue2);
      }
    });
  });

  del.addEventListener("click", function () {
    if (!calValue) {
      numValue1 = numValue1.slice(0, -1); // 마지막 문자를 제거하기 위해 문자열을 잘라냅니다.
      firstNum.textContent = numValue1;
    } else {
      numValue2 = numValue2.slice(0, -1); // 마지막 문자를 제거하기 위해 문자열을 잘라냅니다.
      lastNum.textContent = numValue2;
    }
  });

  let funcResult = "";
  let resultCount = 1;
  eq.addEventListener("click", function () {
    // = 클릭
    let num1 = Number(numValue1);
    let num2 = Number(numValue2);
    if (calValue == "+") {
      funcResult = num1 + num2;
    } else if (calValue == "-") {
      funcResult = num1 - num2;
    } else if (calValue == "x") {
      funcResult = num1 * num2;
    } else if (calValue == "/") {
      funcResult = num1 / num2;
    }
    result.textContent = funcResult;

    //history
    let resultHistory = document.createElement("div");
    resultHistory.append(
      `${resultCount}. ` +
        firstNum.textContent +
        symbol.textContent +
        lastNum.textContent +
        "=" +
        result.textContent
    );
    resultCount++;
    console.log(resultHistory);
    let insertHtml = document.querySelector(".history").prepend(resultHistory);
    //historyBtn
    const historyBtn = document.querySelector("#historyBtn");
    const historyBox = document.querySelector(".history-box");
    historyBtn.addEventListener("click", () => {
      historyBox;
    });

    document.querySelectorAll(".procedure span").forEach((spanEmpty) => {
      //값 초기화
      numValue1 = "";
      numValue2 = "";
      calValue = "";
      spanEmpty.textContent = ""; // 보이는것 빈칸
    });
  });

  reset.addEventListener("click", function () {
    //C 클릭
    location.reload(); // 초기화
  });
};


$(document).ready(() => {
  $("#historyBtn").on('click', (e) => {
    $("#historyBtn").toggleClass("active");
    $(".history-box").toggle();

    if ($("#historyBtn").hasClass("active")) {
      $("#historyBtn").text("hide");
    } else {
      $("#historyBtn").text("show");
    }

  });
  

});
