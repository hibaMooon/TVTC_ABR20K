let btnCalc = document.querySelector(`.btnCalc`);
let result = document.querySelector(`p.result`);
let selectType = document.querySelector(`#type`);
selectType.addEventListener(`change`, () => {
  if (selectType.value == `علمي`) {
    document.querySelector(`.uni #total-highSchool`).textContent = `50%`;
    document.querySelector(`.uni #total-ability`).textContent = `30%`;
    document.querySelector(`.uni #total-achievement`).textContent = `20%`;
  } else {
    document.querySelector(`.uni #total-highSchool`).textContent = `60%`;
    document.querySelector(`.uni #total-ability`).textContent = `40%`;
    document.querySelector(`.uni #total-achievement`).textContent = `0%`;
  }
});

btnCalc.addEventListener(`click`, function () {
  let totalUni;
  if (selectType.value == `علمي`) {
    totalUni =
      +document.querySelector(`#highSchool`).value * 0.5 +
      +document.querySelector(`#ability`).value * 0.3 +
      +document.querySelector(`#achievement`).value * 0.2;
  } else {
    totalUni =
      +document.querySelector(`#highSchool`).value * 0.6 +
      +document.querySelector(`#ability`).value * 0.4 +
      +document.querySelector(`#achievement`).value * 0.0;
  }
  result.innerHTML = `نسبتك الموزونة هي ${totalUni}%
  <br>
  <span style="color:black;font-size:14px">بالتوفيق ❤️</span>`;
  result.style.color = `#005950`;
  result.style.fontSize = `28px`;
  document.querySelector(`.btn-date`).style.display = `inline`;
});

let btnDegree = document.querySelector(`.btnDegree`);
let resultDegree = document.querySelector(`p.resultDegree`);
btnDegree.addEventListener(`click`, () => {
  let totalDegree =
    +document.querySelector(`#average`).value >= 4.75
      ? 60
      : Math.floor((60 / 4.75) * +document.querySelector(`#average`).value);
  let totalEnglish =
    +document.querySelector(`#en`).value >= 60
      ? 30
      : Math.floor((30 / 60) * +document.querySelector(`#en`).value);
  resultDegree.innerHTML = `موزونتك ${totalDegree + totalEnglish}%
  <br>
  
  <span style="color:black;font-size:14px">بالتوفيق ❤️</span>`;
  resultDegree.style.color = `#005950`;
  resultDegree.style.fontSize = `28px`;
});
