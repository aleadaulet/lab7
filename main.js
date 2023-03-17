let body = document.getElementsByTagName("body")[0];

let h1 = document.getElementsByTagName("h1")[0];
body.removeChild(h1);

let link = document.createElement("a");
link.setAttribute("href", "https://www.w3schools.com");
body.appendChild(link);
body.removeChild(link);

let assignmentTextTag = document.createElement("h1");
assignmentTextTag.innerText = "Lab 7 Assignment";
assignmentTextTag.style.color = "blue";
body.appendChild(assignmentTextTag);

let divider1 = document.createElement("hr");
body.appendChild(divider1);

let taskTextTag = document.createElement("h2");
taskTextTag.innerText = "Task";
taskTextTag.style.color = "red";
body.appendChild(taskTextTag);

let descriptionTextTag = document.createElement("p");
descriptionTextTag.innerHTML = `
      In this task you have to reproduce this HTML page as is using
      <b>only</b> JavaScript. The task will be evaluated on the basis of the
      following DOM manipulation techniques:
`;
body.appendChild(descriptionTextTag);

let criteriaList = document.createElement("ul");
body.appendChild(criteriaList);

let criteria0 = document.createElement("li");
criteria0.classList.add("even");
criteria0.style.color = "green";
criteria0.innerHTML = "find elements in the DOM (<b>5 points</b>);";
criteriaList.appendChild(criteria0);

let criteria1 = document.createElement("li");
criteria1.classList.add("odd");
criteria1.style.color = "purple";
criteria1.innerHTML = "create/add/remove elements (<b>5 points</b>);";
criteriaList.appendChild(criteria1);

let criteria2 = document.createElement("li");
criteria2.classList.add("even");
criteria2.style.color = "green";
criteria2.innerHTML = "change content of the elements (<b>5 points</b>);";
criteriaList.appendChild(criteria2);

let criteria3 = document.createElement("li");
criteria3.classList.add("odd");
criteria3.style.color = "purple";
criteria3.innerHTML = "change styles of the elements (<b>5 points</b>);";
criteriaList.appendChild(criteria3);

let criteria4 = document.createElement("li");
criteria4.classList.add("even");
criteria4.style.color = "green";
criteria4.innerHTML = "change attributes of the elements (<b>5 points</b>);";
criteriaList.appendChild(criteria4);

let criteria5 = document.createElement("li");
criteria5.classList.add("odd");
criteria5.style.color = "purple";
criteria5.innerHTML = "change classes of the elements (<b>5 points</b>).";
criteriaList.appendChild(criteria5);

let divider2 = document.createElement("hr");
body.appendChild(divider2);

let submissionTextTag = document.createElement("h2");
submissionTextTag.innerText = "To submit your work, follow these instructions:";
submissionTextTag.style.color = "red";
body.appendChild(submissionTextTag);

let submissionStepList = document.createElement("ul");
body.appendChild(submissionStepList);

let step0 = document.createElement("li");
step0.classList.add("even");
step0.style.color = "green";
step0.innerHTML = "Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).";
submissionStepList.appendChild(step0);

let step1 = document.createElement("li");
step1.classList.add("odd");
step1.style.color = "purple";
step1.innerHTML = "Clone this repository to your local machine and work inside it.";
submissionStepList.appendChild(step1);

let step2 = document.createElement("li");
step2.classList.add("even");
step2.style.color = "green";
step2.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>).";
submissionStepList.appendChild(step2);

let step3 = document.createElement("li");
step3.classList.add("odd");
step3.style.color = "purple";
step3.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).";
submissionStepList.appendChild(step3);

let step4 = document.createElement("li");
step4.classList.add("even");
step4.style.color = "green";
step4.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).";
submissionStepList.appendChild(step4);

let step5 = document.createElement("li");
step5.classList.add("odd");
step5.style.color = "purple";
step5.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";
submissionStepList.appendChild(step5);

let step6 = document.createElement("li");
step6.classList.add("even");
step6.style.color = "green";
step6.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>).";
submissionStepList.appendChild(step6);

let divider3 = document.createElement("hr");
body.appendChild(divider3);
