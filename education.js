// Select education section
const education = document.getElementById("education");

// Create heading
const heading = document.createElement("h2");
heading.innerHTML = "<b>Education</b>";
education.appendChild(heading);

// Create container div
const div = document.createElement("div");
div.setAttribute("class", "eduList");
education.appendChild(div); 

// Create list
const list = document.createElement("ul");
list.style.padding = "2.5rem";
div.appendChild(list);

// List items
const li1 = document.createElement("li");
li1.textContent = "Bachelors Of Computer Application";
list.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "DCA (6 month)";
list.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "FEA (1 year)";
list.appendChild(li3);

const li4 = document.createElement("li");
li4.textContent = "12th pass";
list.appendChild(li4);

// Mouseover event
education.addEventListener("mouseover", function () {
  li1.innerHTML = "Bachelors Of Computer Application <span style='margin-left: 25px; color:rgb(75, 29, 29); font-weight: bold;'>(Eternal University Baru Sahib)</span>";
  li2.innerHTML = "DCA (6 month) <span style='margin-left: 25px; color:rgb(65, 19, 19); font-weight: bold;'>(Shiksha Institute Of Computer)</span>";
  li3.innerHTML = "FEA (1 year) <span style='margin-left: 25px; color:rgb(86, 27, 27); font-weight: bold;'>(Freedom Employability Academy)</span>";
  li4.innerHTML = "12th pass <span style='margin-left: 25px; color:rgb(86, 27, 27); font-weight: bold;'>(Girls.Boys.Senior.Secondary School)</span>";
});

// Mouseout event
education.addEventListener("mouseout", function () {
  li1.textContent = "Bachelors Of Computer Application";
  li2.textContent = "DCA (6 month)";
  li3.textContent = "FEA (1 year)";
  li4.textContent = "12th pass";
});
