
//global variables

//color array for random figures
var colors = new Array(
    '#D84315', '#f0a30a', '#00838F', '#558B2F', '#00BCD4', '#AD1457', '#6A1B9A','#b3477a','#4527A0',
    '#CDDC39', '#BA68C8', '#80D8FF', '#FFFF00', '#000', '#CCC', '#2d73d5', '#398371', '#65bd00',
    '#376b5d', '#e66070', '#bb4615', '#c54a53', '#c67d31', '#2694d8', '#a6714d', '#854e34','#3431b7');

var activeCanvas;
var zoomLevel = 1;
var selecting = false;
var rect, isDown, originX, originY;

console.log("--- starting loading canvas object ---")

//creating canvas element
// var canvasContainer = document.getElementById('canvasCreated');
// var sizes = 500;

// canvas = document.createElement('canvas');
// canvas.setAttribute('width',sizes);
// canvas.setAttribute('height',sizes);
// canvas.setAttribute('id','canvas');
// canvas.setAttribute('background','#c3c3c3');
// canvas.style.border = '1px solid black';
// canvas.style.background = '#c3c3c3';
// canvasContainer.appendChild(canvas);


//loading existing canvas objects
var canvas = new fabric.Canvas('canvas');
canvas.setBackgroundColor('#c3c3c3'); 
canvas.renderAll();
 
// create a rectangle object
var rect = new fabric.Rect({
	left: 100,
	top: 50,
	fill: '#D81B60',
	width: 50,
	height: 50,
	// strokeWidth: 2,
	// stroke: "#880E4F",
	// rx: 10,
	// ry: 10,
    // angle: 45,
    //lockRotation : false,
	scaleX: 3,
	scaleY: 3,
    hasControls: false,
    //transparentCorners: true
});

canvas.add(rect);




