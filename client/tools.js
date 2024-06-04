let canvas = document.querySelector("#board"); // Changed from "#canvas" to "#board"
canvas.width = window.innerWidth; // Changed from document.innerWidth to window.innerWidth
canvas.height = window.innerHeight; // Changed from document.innerheight to window.innerHeight

//line draw code
// canvas.addEventListener("mousedown", function (e) {
//   console.log("mousedown", e);
//   let sx = e.clientX;
//   let sy = e.clientY;
//   let toolBarHeight = getYDelta();
//   // console.log(toolBarHeight);
//   // let toolBarHeight = 0;
//   tool.beginPath();
//   tool.moveTo(sx, sy - toolBarHeight);
//   // tool.moveTo(sx, sy);
// });
// canvas.addEventListener("mouseup", function (e) {
//   console.log("mouseup", e);
//   let ex = e.clientX;
//   let ey = e.clientY;
//   let toolBarHeight = getYDelta();
//   // let toolBarHeight = 0;
//   tool.lineTo(ex, ey - toolBarHeight);
//   // tool.lineTo(ex, ey);
//   tool.stroke();
//   // tool.closePath();
// });

let tool = canvas.getContext("2d");
let toolBar = document.querySelector(".toolbar");
let isDrawing = false;
let toolsArr = document.querySelectorAll(".tool");
let currentTool = "pencil";
for (let i = 0; i < toolsArr.length; i++) {
  toolsArr[i].addEventListener("click", function () {
    const toolName = toolsArr[i].id;
    if (toolName == "pencil") {
      currentTool = "pencil";
      tool.strokeStyle = "black";
      tool.lineWidth = 1;
      console.log("pencil");
    } else if (toolName == "eraser") {
      currentTool = "eraser";
      tool.strokeStyle = "white";
      tool.lineWidth = 20;
      console.log("Eraser");
    } else if (toolName == "sticky") {
      console.log("sticky");
      createSticky();
    } else if (toolName == "upload") {
      console.log("upload");
    } else if (toolName == "download") {
      console.log("download");
    } else if (toolName == "undo") {
      console.log("undo");
    } else if (toolName == "redo") {
      console.log("redo");
    }
  });
}
// free hand draw
canvas.addEventListener("mousedown", function (e) {
  console.log("mouse down");
  isDrawing = true;
  let sx = e.clientX;
  let sy = e.clientY;
  let toolBarHeight = getYDelta();
  tool.beginPath();
  tool.moveTo(sx, sy - toolBarHeight);
});
canvas.addEventListener("mousemove", function (e) {
  console.log(e.clientX, e.clientY, " mousemove");
  if (isDrawing == false) {
    return;
  }
  let ex = e.clientX;
  let ey = e.clientY;
  let toolBarHeight = getYDelta();
  tool.lineTo(ex, ey - toolBarHeight);
  tool.stroke();
});
canvas.addEventListener("mouseup", function (e) {
  isDrawing = false;
  console.log("mouse up");
});

function getYDelta() {
  let heightofToolbar = toolBar.getBoundingClientRect().height;
  return heightofToolbar;
}

function createSticky() {
  console.log("bbheehs");
  let stickyDiv = document.createElement("div");
  let navDiv = document.createElement("div");
  let closeDiv = document.createElement("div");
  let minimizeDiv = document.createElement("div");
  let textArea = document.createElement("textarea");
  stickyDiv.setAttribute("class", "sticky");
  navDiv.setAttribute("class", "nav");
  textArea.setAttribute("class", "text-area");
  //add text
  closeDiv.innerText = "X";
  minimizeDiv.innerText = "min";
  //add structure
  navDiv.appendChild(minimizeDiv);
  navDiv.appendChild(closeDiv);
  stickyDiv.appendChild(navDiv);
  stickyDiv.appendChild(textArea);
  document.body.appendChild(stickyDiv);
  let isMin = false;
  closeDiv.addEventListener("click", function () {
    stickyDiv.remove();
  });
  minimizeDiv.addEventListener("click", function () {
    textArea.style.display = isMin ? "block" : "none";
    isMin = !isMin;
  });
  let isMov = false;
  let iX;
  let iY;
  navDiv.addEventListener("mousedown", function (e) {
    iX = e.clientX;
    iY = e.clientY;
    console.log(iX, "x axis", iY, " y axis", " mousedown");
    isMov = true;
  });
  navDiv.addEventListener("mousemove", function (e) {
    if (isMov) {
      let fX = e.clientX;
      let fY = e.clientY;
      console.log("final value", fX, " ", fY);
      let dX = fX - iX;
      let dY = fY - iY;
      console.log("reduced value", dX, " ", dY);
      let { top, left } = stickyDiv.getBoundingClientRect();
      stickyDiv.style.top = top + dX + "px";
      stickyDiv.style.left = left + dY + "px";
      iX = fX;
      iY = fY;
    }
  });
  navDiv.addEventListener("mouseup", function (e) {
    console.log("mouse up");
    isMov = false;
  });
}
