//global variables
//color array for random figures
var colors = new Array(
    '#D84315', '#f0a30a', '#00838F', '#558B2F', '#00BCD4', '#AD1457', '#6A1B9A','#b3477a','#4527A0',
    '#CDDC39', '#BA68C8', '#80D8FF', '#FFFF00', '#000', '#CCC', '#2d73d5', '#398371', '#65bd00',
    '#376b5d', '#e66070', '#bb4615', '#c54a53', '#c67d31', '#2694d8', '#a6714d', '#854e34','#3431b7');

// var imagesUrl = new Array(
// ""
// )

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
 
$('button#addFigure').on('click',function(){
    AddFigure(canvas);
})

//functions 
function AddFigure(canvas){    
    var figure = Math.random(0,3);
    figure = 0;

    switch(figure){
        case 0:
            addRect(canvas);
            break;
        case 1:
            addCircle(canvas);
            break;
        case 2:
            addTriangle(canvas);
            break;
        default:
            addRect(canvas);            
    }
}

function AddImage(images){

}

function addRect(canvas){
    var color = colors[Math.floor(Math.random() * 26)];
    var xPos = Math.floor(Math.random() * 400);
    var yPos = Math.floor(Math.random() * 400)
    var rect = new fabric.Rect({
        left: xPos,
        top: yPos,
        fill: color,
        width: 50,
        height: 50,        
        scaleX: 3,
        scaleY: 3,
        hasControls: false,
        //transparentCorners: true
    });    
     canvas.add(rect);
}
function addCircle(canvas){

}
function addTriangle(canvas){

}
