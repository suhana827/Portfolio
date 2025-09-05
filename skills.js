const skillsBox = document.querySelector(".skills-box");
const skillsGrid = document.querySelector(".skills-grid")

skillsBox.addEventListener("mouseover",function(){
  skillsGrid.style.display = "grid";

});

skillsBox.addEventListener("mouseout",function(){
  skillsGrid.style.display = "none";
});
