function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = m15.soundClassification('https://teachablemachine.withgoogle.com/models/YrdrSRUZd/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(){
    if(error){
        console.error(error);
    }else{
        console.log(results);
    }
}