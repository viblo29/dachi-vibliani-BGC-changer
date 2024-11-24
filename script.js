const buttonBGC = document.getElementById(`BGC`);
const colorDiv = document.getElementById(`color`);
const txt = document.getElementById(`txt`);
const colorCode = document.getElementById(`colorCode`);

buttonBGC.addEventListener(`click`, function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;

  colorDiv.style.display = `flex`;

  buttonBGC.style.color = `#${randomColor}`;
  color.style.color = `black`;

  colorCode.innerHTML = `#${randomColor}`;
  colorCode.style.color = `#49a6ea`;

  colorCode.addEventListener(`mouseenter`, function () {
    colorCode.style.color = `#${randomColor}`;
  });
});

colorCode.addEventListener(`mouseleave`, function () {
  colorCode.style.color = `#49a6ea`;
});

colorCode.addEventListener("click", function () {
  const textToCopy = colorCode.textContent;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Color code copied to clipboard!");
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    });
});
