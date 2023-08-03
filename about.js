const myText = "iti dot net , hello in programming";
    var Text = 0;
    var ftext= setInterval(function () {
     if(Text<myText.length){
          messageContent.innerHTML += myText[Text];
          Text++;
     }
     else{
          clearInterval(ftext);
          window.close();
     }
    },200);
