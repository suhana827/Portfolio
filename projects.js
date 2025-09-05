
let projects = document.getElementById("projects");
let projectGrid = document.querySelector(".project-grid");

projectGrid.addEventListener("mouseover", function () {
  let id = setInterval(()=>{
    projectGrid = "";},9000);
  projects.style.display = "grid";
});