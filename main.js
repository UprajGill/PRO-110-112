prediction1="";

Webcam.set({
width:350,
height:350,
image_format:'png',
png_quality:97
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function snapshot(){
Webcam.snap(function(data_uri){document.getElementById('result').innerHTML='<img id="captureimg" src="'+data_uri+'"/>'});

}
console.log('ml5version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/036cWvzDu/model.json',modelLoaded);
function modelLoaded(){
console.log('modelLoaded');
}
function speak(){
var synth=window.speechSynthesis;
speak_data_1="The First Hand Pose Is"+prediction1;
var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
synth.speak(utterThis);
}
function check(){
document.getElementById("captureimg");
classifier.classify(img,gotResults);
}
function gotResults(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("resultname").innerHTML=results[0].label;
prediction1=results[0].label;
speak();

if(results[0].label=="Thumbs Up"){
document.getElementById("pose").innerHTML="👍";
}
if(results[0].label=="Peace"){
document.getElementById("pose").innerHTML="✌️";
}
if(results[0].label=="Nice"){
document.getElementById("pose").innerHTML="👌";
}
}
}