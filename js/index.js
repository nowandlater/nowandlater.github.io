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
  },
    function(e){log(e.message);
  });  
});
