/* 키보드 이벤트 */

window.addEventListener("keydown", (e) => {
  console.log(e);
  const key = e.key;
  console.log(key)
  let keyId =""
  switch (key) {
    case "+":
      keyId = "#plus";
      break;
    case "-":
      keyId = "#minus";
      break;
    case "Enter":
      keyId = "#eq";
      break;
    case ".":
      keyId = "#dot";
      break;
    case "/":
      keyId = "#divide";
      break;
    case "C":
      keyId = "#reset";
      break;
    case "*":
      keyId = "#multiply";
      break;
    case "Backspace":
      keyId = "#del";
      break;
    default: //변수 != 상수1 이고, 변수 != 상수2 이면, 실행문 C 실행
      keyId = `#btn${key}`;
  }


//keyId = `#btn${key}`;
  const keyElement = document.querySelector(keyId);

  //reset divide multiply del plus minus dot eq

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
  let procedure = document.querySelector(".procedure");
  let resultBox = document.querySelector(".result-box");
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


      procedure.style.display = "block";
      resultBox.style.display = "none";
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
      procedure.style.display = "block";
      resultBox.style.display = "none";
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
    if (firstNum.textContent && symbol.textContent && lastNum.textContent) {
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
      let insertHtml = document
        .querySelector(".history")
        .prepend(resultHistory);
    }

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

    procedure.style.display = "none";
    resultBox.style.display = "block";
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
