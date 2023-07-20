for(var i=0;i<document.querySelectorAll(".but").length;i++){
    document.querySelectorAll(".but")[i].addEventListener("click",function(){
        var clickkey=this.innerHTML;
        printimg(clickkey);
        
    });
}
function printimg(key){
    for(var j=0;j<key;j++){
        var img1=document.querySelectorAll(".arav")[j];
        img1.setAttribute("src", "images/arav.jpeg")
      }
}