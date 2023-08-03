
bouns.addEventListener("click",function () {
    var childwindow = window.open('bouns.html','newWindow','width=150,height=150');

var isMovingDown = true;

var isMovingup=false;

let intervalwind=setInterval(() => {
    if(isMovingDown){
        childwindow.moveBy(1,1);
    }
    if(isMovingup){
        childwindow.moveBy(-1,-1);
    }

    var parentHeight = window.innerHeight;

    var childTop = childwindow.screenY;
    var childHeight = childwindow.innerHeight;

    if(isMovingDown&&childTop + childHeight >= parentHeight){

        isMovingDown=false;
        isMovingup=true;
    }

    if (isMovingup && childTop<=0) 
    {
        isMovingDown=true;
        isMovingup=false
        
    }


}, 10); 

})