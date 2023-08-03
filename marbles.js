let imges =document.getElementsByClassName("marb");

let indexImgs = 0;

function showImg() {

    if(indexImgs == 0 || indexImgs == imges.length){

        if(indexImgs == imges.length)indexImgs=0;
        

        imges[indexImgs].src="./img/marble3.jpg";
        
        imges[imges.length -1].src="./img/marble1.jpg";

        if(indexImgs == 0){
            indexImgs++;
        }
    }
    else{
        imges[indexImgs].src="./img/marble3.jpg";
        imges[indexImgs -1 ].src="./img/marble1.jpg";
            indexImgs++;
    }
}
    let myImgshow;
    myImgshow = setInterval(showImg ,250)
    for (let i = 0; i < imges.length; i++) {
        imges[i].addEventListener("mouseover",function () {
            clearInterval(myImgshow)
        })
        
        imges[i].addEventListener("mouseout",function () {
            myImgshow=setInterval(showImg ,200)
        })
    }
    



