let images =[
    "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    "https://i.picsum.photos/id/830/200/300.jpg?grayscale&hmac=V59vrW5N3aaMk6iDXTvAYtD5w7T3XArx_L7O0xa3qvs",
    "https://i.picsum.photos/id/580/200/300.jpg?hmac=ETV-og2PgiTBmJBERthfeRRRuLpWGxM4Zq_3z8pXndA",
    "https://i.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs"
    
];

let counter = 0;
let imgTag = document.getElementsByTagName("img")[0];
let prevBtn =document.getElementsByTagName("button")[0];
let nextBtn =document.getElementsByTagName("button")[1];

imgTag.src=images[counter];

prevBtn.addEventListener("click", slideToPrev);
nextBtn.addEventListener("click", slideToNext);

function slideToPrev(){
    counter--; 
    if (counter<0){
        counter=images.length-1;
    }
    if(counter >=0){          
    let prevSlide = images[counter];
    imgTag.src=prevSlide;    
    console.log("prev slide");
    }
    
    }
function slideToNext(){
    counter++;
    if (counter===images.length){
    counter=0;
   }
    if(counter < images.length){        
    let nextSlide = images[counter];
    imgTag.src=nextSlide;
    
    console.log("next slide");
    
   }
}   

function slide (){
    /*  direction: next or previous slide*/
    /* currentSlide:which image (index of the images array is visible)*/
    /* Container for that image: img-tag to replace the src attribute*/

    let currentSlide = images[counter];

}