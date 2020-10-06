var course_list = [{
    "name": "Course1",
    "desc": "description"
  },
  {
    "name": "Course2",
    "desc": "description"
  }, {
    "name": "Course3",
    "desc": "description"
  }
]

var addCourses = function (event) {
  var ul = document.getElementById("course-item");
  var heading;
  if (event) {
    ul.innerHTML = "";
    heading = event.target.parentElement.getElementsByClassName("list-heading")[0].innerHTML;
  }
  course_list.forEach(function (item) {
    var li = document.createElement("li");
    li.className = "list-item";
    var span = document.createElement("span");
    span.className = "list-heading";
    span.innerText = item.name;
    li.appendChild(span);
    var span1 = document.createElement("span");
    span1.className = "plus-icon";
    if (event && heading === item.name) {
      span1.innerText = '-';
    } else {
      span1.innerText = '+';
    }
    li.appendChild(span1);
    span1.addEventListener('click', openAccordion);
    var div = document.createElement("div");
    if (event && heading === item.name) {
      div.className = "desc";
    } else {
      div.className = "desc hidden";
    }
    div.innerHTML = item.desc;
    li.appendChild(div);
    ul.appendChild(li);
  });
}
var openAccordion = function (event) {
  addCourses(event);
}
document.addEventListener("DOMContentLoaded", function () {
  addCourses();
});