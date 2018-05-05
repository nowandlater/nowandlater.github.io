$(function()
{
  var video = document.createElement('video');

  video.setAttribute('class','videoPlayer');  
  video.setAttribute('muted', '');
  video.setAttribute('autoplay', '');
  video.setAttribute('playsinline', '');
  
  var filter = document.createElement('div');  
  document.body.appendChild(video);
  document.body.appendChild(filter);
  
  $(filter).addClass('filter');
  $(filter).addClass('red');
  
  filter.onclick = function()
  {
    if($(filter).hasClass("red")){
      $(filter).removeClass("red"); 
      $(filter).addClass("blue"); 
    }else{
      $(filter).removeClass("blue");
      $(filter).addClass("red");
    }    
  }  




  var constraints = { audio: false, video: { facingMode: "environment" } };     
  navigator.getUserMedia(constraints, function(stream){
    video.srcObject = stream;
    
    video.onloadedmetadata = function(e){
      video.play();
    }    
    
    
    
    if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia({ video: true }, function(stream) {
        video.src = stream;
        video.play();
    }, errBack);
} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia({ video: true }, function(stream){
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
    }, errBack);
} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
    navigator.mozGetUserMedia({ video: true }, function(stream){
        video.src = window.URL.createObjectURL(stream);
        video.play();
    }, errBack);
}
    
    
    
  },
    function(e){log(e.message);
  });  
});
