//global variables
//color array for random figures
var colors = new Array(
    '#D84315', '#f0a30a', '#00838F', '#558B2F', '#00BCD4', '#AD1457', '#6A1B9A','#b3477a','#4527A0',
    '#CDDC39', '#BA68C8', '#80D8FF', '#FFFF00', '#000', '#CCC', '#2d73d5', '#398371', '#65bd00',
    '#376b5d', '#e66070', '#bb4615', '#c54a53', '#c67d31', '#2694d8', '#a6714d', '#854e34','#3431b7');

var imagesUrl = new Array(
"https://png.pngtree.com/svg/20170719/javascript_633988.png",
"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8mQBL_sFCPSD9w7Qz8urRL7Mr10vCGMvzggyWEbjwOXRPV6L"

)

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
 
//binding btns
$('button#add').on('click',function(){
    AddFigure(canvas);
});

$('button#clear').on('click',function(){
     deleteObjects(canvas);
});

//functions 
function AddFigure(canvas){  
    var color = colors[Math.floor(Math.random() * 26)];
    var xPos = Math.floor(Math.random() * 400);
    var yPos = Math.floor(Math.random() * 400);

    var figure = Math.floor(Math.random()*3) ;
    //figure = 2;

    switch(figure){
        case 0:
            addRect(color,xPos,yPos,canvas);
            break;
        case 1:
            addCircle(color,xPos,yPos,canvas);
            break;
        case 2:
            addTriangle(color,xPos,yPos,canvas);
            break;
        case 3:
            AddImage(color,xPos,yPos,canvas)
        default:
            addRect(color,xPos,yPos,canvas);            
    }
}

function AddImage(color,xPos,yPos,canvas){
     var url = imagesUrl[Math.floor(Math.random() * 3)];   

    fabric.Image.fromURL(url, function(oImg) {
        // scale image down, and flip it, before adding it onto canvas
        oImg.scale(Math.random() * 0.5).set({'left':xPos,'top':yPos,'hasControls':false});
        //oImg.left(xPos);
        canvas.add(oImg);
      });
}

function addRect(color,xPos,yPos,canvas){
   
    var rect = new fabric.Rect({
        left: xPos,
        top: yPos,
        fill: color,
        width: 50,
        height: 50,        
        // scaleX: 3,
        // scaleY: 3,
        hasControls: false,
        //transparentCorners: true
    });    
     canvas.add(rect);
}

function addCircle(color,xPos,yPos,canvas){
    var circle=new fabric.Circle({
        left:xPos,
        top:yPos,                
        radius:50,
        fill:color,
        hasControls:false       
    });
    canvas.add(circle);
}

function addTriangle(color,xPos,yPos,canvas){
    var triangle = new fabric.Triangle({
        left: xPos,
        top: yPos,
        width: 60,
        height: 60,
        fill: color    
    })
    canvas.add(triangle);    
}

function deleteObjects(canvas){
    canvas.getObjects().forEach(function(object){
        canvas.remove(object);
    });
}