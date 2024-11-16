var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var intro =document.querySelector("#intro")
  var edu =document.querySelector("#education")
  var fam =document.querySelector("#family")
  var fut =document.querySelector("#future")
  var det01 =document.querySelector("#details01")
  var det0 =document.querySelector("#details0")
  var det1 =document.querySelector("#details1")
  var det2 =document.querySelector("#details2")
  var det3 =document.querySelector("#details3")

 intro.addEventListener("click",function(){
  var flag =0;
  if(flag==0){
    det0.style.display="flex"
    det01.style.display="none"
    det1.style.display="none"
    det2.style.display="none"
    det3.style.display="none"
    flag=1
  }
  else {
    det0.style.display="none"
    // det01.style.display="flex"
    det1.style.display="none"
    det2.style.display="none"
    det3.style.display="none"
    
    flag =0
  }
 
 })
 edu.addEventListener("click",function(){
  var flag =0;
  if(flag==0){
    det0.style.display="none"
    det1.style.display="flex"
    det2.style.display="none"
    det3.style.display="none"
    flag=1
  }
  else {


    flag =0
  }
 
 })
 fam.addEventListener("click",function(){
  var flag =0;
  if(flag==0){
    det0.style.display="none"
    det1.style.display="none"
    det2.style.display="flex"
    det3.style.display="none"
    flag=1
  }
  else {


    flag =0
  }
 
 })
 fut.addEventListener("click",function(){
  var flag =0;
  if(flag==0){
    det0.style.display="none"
    det1.style.display="none"
    det2.style.display="none"
    det3.style.display="flex"
    flag=1
  }
  else {


    flag =0
  }
 
 })

