
$(function () { objectFitImages() });  

let challengeLinks = $(".challengeLink"); 
let linksContent = $(".challenge-content");

challengeLinks.on("click", function(){
  for (let i = 0; i < challengeLinks.length; i++) {
    challengeLinks[i].classList.remove("active");
    linksContent[i].style.display = "None"; 
  }
  this.classList.add("active");
  let index = $(challengeLinks).index(this)
  linksContent[index].style.display = "block";
  });

for (let i = 0; i < linksContent.length; i++) {
  linksContent[i].style.display = "None"; 
}
linksContent[0].style.display = "block";


    
