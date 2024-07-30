status1="";
function setup(){
    canvas=createCanvas(380,380);
     canvas.center();
     video=createCapture(VIDEO);
     video.hide();
     video.size(380,380)
}
function start(){
 object_detecter=ml5.objectDetecter("cocossd", modelLoaded);
 document.getElementById("status").innerHTML="Status: Detecting Objects ";
 document.getElementById("input").value;
}
function modelLoaded(){
    console.log("modelLoaded");
    status1=true
}
function draw(){
    image(video,0,0,380,380)
}
