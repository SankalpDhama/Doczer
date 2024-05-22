const pencilElement = document.querySelector("#pencil");
const eraserElement = document.querySelector("#eraser");
const stickyElement = document.querySelector("#sticky");
const uploadElement = document.querySelector("#upload");
const downloadElement = document.querySelector("#download");
const undoElement = document.querySelector("#undo");
const redoElement = document.querySelector("#redo");

pencilElement.addEventListener("click", function tellPencil() {
  console.log("Pencil is clicked");
});
eraserElement.addEventListener("click", function tellEraser() {
  console.log("Eraser is clicked");
});
stickyElement.addEventListener("click", function tellSticky() {
  console.log("Sticky is clicked");
});
uploadElement.addEventListener("click", function tellUpload() {
  console.log("Upload is clicked");
});
downloadElement.addEventListener("click", function tellDownload() {
  console.log("Download is clicked");
});
undoElement.addEventListener("click", function tellUndo() {
  console.log("Undo is clicked");
});
redoElement.addEventListener("click", function tellRedo() {
  console.log("Redo is clicked");
});

let canvas = document.querySelector("#board"); // Changed from "#canvas" to "#board"
canvas.width = window.innerWidth; // Changed from document.innerWidth to window.innerWidth
canvas.height = window.innerHeight; // Changed from document.innerheight to window.innerHeight

let tool = canvas.getContext("2d");

tool.beginPath();
tool.moveTo(20, 200);
tool.lineTo(400, 150);
tool.moveTo(300, 400);
tool.lineTo(450, 150);
tool.stroke();
