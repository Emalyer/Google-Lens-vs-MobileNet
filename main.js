function WaterBottle(){
    document.getElementById("result").src="Water Bottle.jpg"
}
function Mouse(){
    document.getElementById("result").src="Mouse.jpg"
}
function Spray(){
    document.getElementById("result").src="Spray.jpg"
}
function iPad(){
    document.getElementById("result").src="iPad.jpg"
}
function Book(){
    document.getElementById("result").src="Book.jpg"
}
console.log('ml5 version:',ml5.version);


classifier=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
 
    console.log("model is loaded");
}


function check(){
img=document.getElementById("result");
classifier.classify(img,gotResult);
}

function gotResult(error,Results){
if(error){
    console.error(error);
}
else{
    console.log(Results);
    document.getElementById("object_name").innerHTML=Results[0].label;
}
}