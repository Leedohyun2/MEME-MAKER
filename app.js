const colorOptions = Array.from(
    document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;  //선 굵기
let isPainting = false;
function onMove(event) {
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();  //선그리기
        //ctx.fill();  //선그리기 대신 도형으로 채우기(fill)
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {  //마우스클릭하면 그려짐
    isPainting = true;
}
function cancelPainting() {  //클릭안하면 안그려짐
    isPainting = false;
}
function onLineWidthChange(event) {
    console.lineWidth = event.target.value;
    ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
    const colorValue = event.target.dataset.color
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange)

colorOptions.forEach(color => color.addEventListener("click", onColorClick));
//painting line
//색 넣기
/*const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
]
function onClick(event) {
    ctx.beginPath();
    //선이 시작하는 좌표
    ctx.moveTo(400, 400);
    //커서 움직일 때 색변화
    const color = colors[Math.floor(Math.random() *colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}
canvas.addEventListener("mousemove", onClick);*/


//집모형만들기
//ctx.fillRect(200, 200, 50, 200);
//ctx.fillRect(400, 200, 50, 200); 
//ctx.fillRect(300, 300, 50, 100); 
//ctx.fillRect(200, 200, 200, 20);
//ctx.moveTo(200, 200);
//ctx.lineTo(325, 100);
//ctx.lineTo(450, 200);
//ctx.fill();

//ctx.fillRect(200, 200, 50, 200);  사각형 안 단색으로 채움
//ctx.strokeRect(200, 200, 50, 200);  사각형 안채움
//ctx.arc(220 + 10,80,8,Math.PI, 2 * Math.PI);  원만들기