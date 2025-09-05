const showBtn = document.getElementById("showAboutBtn");
const aboutText = document.getElementById("aboutText");

showBtn.addEventListener("click", function () {
  if (aboutText.style.display === "none") {
    aboutText.style.display = "block";
    showBtn.textContent = "Hide About Info";
  } else {
    aboutText.style.display = "none";
    showBtn.textContent = "Show About Info";
  }
});
 


// const skillsBox = document.querySelector(".skills-box");
// const skillsGrid = document.querySelector(".skills-grid")

// skillsBox.addEventListener("mouseover",function(){
//   skillsGrid.style.display = "grid";

// });

// skillsBox.addEventListener("mouseout",function(){
//   skillsGrid.style.display = "none";
// });



// const education = document.getElementById("education");

// const heading = document.createElement("h2");
// heading.innerHTML = "<b>Education</b>";
// education.appendChild(heading);

// const div = document.createElement("div");
// div.setAttribute("class", "eduList");
// education.appendChild(div); 

// const list = document.createElement("ul");
// list.style.padding = "2.5rem"
// div.appendChild(list);

// const li1 = document.createElement("li");
// li1.textContent = "Bachelors Of Computer Application";
// list.appendChild(li1);

// const li2 = document.createElement("li");
// li2.textContent = "DCA (6 month)";
// list.appendChild(li2);

// const li3 = document.createElement("li");
// li3.textContent = "FEA (1 year)";
// list.appendChild(li3);

// const li4 = document.createElement("li");
// li4.textContent = "12th pass";
// list.appendChild(li4);


// education.addEventListener("mouseover",function(){
//   li1.textContent += "(Eternal University Baru Sahib)";
//   li1.innerHTML = "Bachelors Of Computer Application <span style='margin-left: 25px; color:rgb(75, 29, 29); DCA (6 month); font-weight: bold;'>(Eternal University Baru Sahib)</span>";

//   li2.textContent += "(Shiksha Institute Of Computer)";
//   li2.innerHTML = "DCA (6 month) <span style='margin-left: 25px; color:rgb(65, 19, 19); font-weight: bold;'>(Shiksha Institute Of Computer)</span>";

//   li3.textContent += "(Freedom Employability Academy)";
//   li3.innerHTML = "FEA (1 year) <span style='margin-left: 25px; color:rgb(86, 27, 27); font-weight: bold;'>(Freedom Employability Academy)</span>";

//   li4.textContent += "(Girls.Boys.Senior.Secondary School)";
//   li4.innerHTML = "12th pass <span style='margin-left: 25px; color:rgb(86, 27, 27); font-weight: bold;'>(Girls.Boys.Senior.Secondary School)</span>"
// });
  

// education.addEventListener("mouseout",function(){
//   li1.textContent = "Bachelors Of Computer Application";
//   li2.textContent = "DCA (6 month)";
//   li3.textContent = "FEA (1 year)";
//   li4.textContent = "12th pass";
// });






