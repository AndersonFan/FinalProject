
    var interval;


    var piclist = new Array (6);
    var locationData = new Array (6);
    var captionData = new Array (6);
    
    var fButtonListener;
    var bButtonListener;

    var whichPic;

    piclist[0] = "images/1.jpg";
    piclist[1] = "images/2.jpg";
    piclist[2] = "images/3.jpg";
    piclist[3] = "images/4.jpg";
    piclist[4] = "images/5.jpg";
    piclist[5] = "images/6.jpg";

    locationData[0] = "STEM Building, St. Mark's School, Southborough, MA";
    locationData[1] = "STEM Building, St. Mark's School, Southborough, MA";
    locationData[2] = "St. Mark's School, Southborough, MA";
    locationData[3] = "Chapel, St. Mark's School, Southborough, MA";
    locationData[4] = "Dining Hall, St. Mark's School, Southborough, MA";
    locationData[5] = "Cage, St. Mark's School, Southborough, MA";

    captionData[0] = "STEM Building";
    captionData[1] = "STEM Building";
    captionData[2] = "St. Mark's School";
    captionData[3] = "Chapel";
    captionData[4] = "Dining Hall";
    captionData[5] = "Cage";



window.onload = function() {
   whichPic = 1; 

   document.getElementById("picImgBox").src = piclist[4];


   interval = setInterval("goage");
   fButtonListener = document.getElementById("forwardButton");
   bButtonListener = document.getElementById("backButton");

   fButtonListener.addEventListener('click', function(event) {
              
   	             ++whichPic;
                 if(whichPic >= piclist.length ){
                  whichPic = 0;
                 }
                 document.getElementById("locationStation").innerHTML = locationData[whichPic];
                 document.getElementById("picImgBox").src = piclist[whichPic];
                 document.getElementById("captionLoc").innerHTML = captionData[whichPic];
   });

   bButtonListener.addEventListener('click', function(event) {
              
   	           whichPic=whichPic-1;
                 if(whichPic < 0){ 
                  whichPic = piclist.length - 1;
                 }
                 document.getElementById("locationStation").innerHTML = locationData[whichPic];
                 document.getElementById("picImgBox").src = piclist[whichPic];
                 document.getElementById("captionLoc").innerHTML = captionData[whichPic];
   });

};

$(document).ready(function() {



    $("#SMFacebook").hover( function(){
        

        $("#SMFacebook").css("background-color","#000080");
    });
     $("#SMFacebook").mouseout( function(){

        $("#SMFacebook").css("background-color","#ffffff");
    });
     
     $("#SMTwitter").hover( function(){
        
     $("#SMTwitter").css("background-color","#000080");
    });
     $("#SMTwitter").mouseout( function(){

        $("#SMTwitter").css("background-color","#ffffff");
    });


});



