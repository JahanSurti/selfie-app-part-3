setTimeout(function()
{

    img_id = "selfie_1";
    take_snapshot();
    speak_data = "Taking your Selfie in 10 seconds";
    var utterThis = SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}, 5000);

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
    if(img_id=="selfie_1"){
        document.getElementById("result_1").innerHTML = '<img id="selfie_1" src ="'+data_uri+'"/>';
    }
    if(img_id=="selfie_2"){
        document.getElementById("result_2").innerHTML = '<img id="selfie_2" src ="'+data_uri+'"/>';
    }
    if(img_id=="selfie_3"){
        document.getElementById("result_3").innerHTML = '<img id="selfie_3" src ="'+data_uri+'"/>';
    }
});

    
    
    
}
