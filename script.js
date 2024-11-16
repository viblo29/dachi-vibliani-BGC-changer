const buttonBGC = document.getElementById(`BGC`);
const color = document.getElementById(`color`);

buttonBGC.addEventListener(`click`, function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;

    color.innerHTML = `Your Random Color Code is: #${randomColor}`;
    buttonBGC.style.color = `#${randomColor}`;
    color.style.color = `#${randomColor}`;
})


