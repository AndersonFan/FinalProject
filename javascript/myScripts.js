$(document).ready(function() {

    $("#Tw").hover( function(){
    	

    	$("#Tw").css("background-color","white");
    });
     $("#Tw").mouseout( function(){

    	$("#Tw").css("background-color","#ffe6ff");
    });
     $("#Fa").hover( function(){
    	

    	$("#Fa").css("background-color","white");
    });
     $("#Fa").mouseout( function(){

    	$("#Fa").css("background-color","#ffe6ff");
    });
     $("#In").hover( function(){
    	

    	$("#In").css("background-color","white");
    });
     $("#In").mouseout( function(){

    	$("#In").css("background-color","#ffe6ff");
    });
    $("#Pi").hover( function(){
    	

    	$("#Pi").css("background-color","white");
    });
     $("#Pi").mouseout( function(){

    	$("#Pi").css("background-color","#ffe6ff");
    });  
});
var picList= new Array(6);
var locationList = new Array(6);
var captionList = new Array(6);

var fButtonListener;
var bButtonListener;


var whichPic = 0;


picList[0] = "images/1.JPG";
picList[1] = "images/2.JPG";
picList[2] = "images/3.JPG";
picList[3] = "images/4.JPG";
picList[4] = "images/5.JPG";
picList[5] = "images/6.JPG";


captionList[0] = "Hans Wu ";
captionList[1] = "Luc Cote";
captionList[2] = "A";
captionList[3] = "B";
captionList[4] = "C";
captionList[5] = "D";




window.onload = function(){


document.getElementById("photos").src = picList[whichPic];
document.getElementById("caption").innerHTML = captionList[whichPic];

fButtonListener = document.getElementById("forwardButton");
bButtonListener = document.getElementById("backButton");

fButtonListener.addEventListener('click',function(event){
    ++whichPic;
    if (whichPic >= picList.length){
        whichPic = 0;
    }
    document.getElementById("photos").src = picList[whichPic];

document.getElementById("caption").innerHTML = captionList[whichPic];
});
bButtonListener.addEventListener('click',function(event){
    --whichPic;
    if (whichPic < 0){
        whichPic = picList.length-1;
    }
    document.getElementById("photos").src = picList[whichPic];

    document.getElementById("caption").innerHTML = captionList[whichPic];
});


}