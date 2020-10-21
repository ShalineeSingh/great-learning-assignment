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
var scrollToTop = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var current_testimonial = 0;
var total_testimonials = 3;

var changeTestimonial = function (type) {
  for (var i = 0; i < total_testimonials; i++) {
    var el = document.getElementById('testimonial_' + i);
    el.classList.add('hidden');
  }
  if (type === 'NEXT') {
    if (current_testimonial === total_testimonials - 1) {
      current_testimonial = 0;
    } else {
      current_testimonial = current_testimonial + 1;
    }
  } else {
    if (current_testimonial === 0) {
      current_testimonial = total_testimonials - 1;
    } else {
      current_testimonial = current_testimonial - 1;
    }
  }
  var current = document.getElementById('testimonial_' + current_testimonial);
  current.classList.remove('hidden');
}

function handleScroll() {
  if (window.scrollY > 400) {
    document.getElementById("footer").classList.add('fixed-footer');
  } else {
    document.getElementById("footer").classList.remove('fixed-footer');
  }
}

function plusSlides(n) {
  showSlides(current_testimonial += n);
}

function currentSlide(n) {
  showSlides(current_testimonial = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("testimonial");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    current_testimonial = 1
  }
  if (n < 1) {
    current_testimonial = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add('hidden')
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[current_testimonial - 1].classList.remove("hidden");
  dots[current_testimonial - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  var width = document.getElementById("youtube-video").getBoundingClientRect().width;
  document.getElementById("video").width = width > 420 ? 420 : width;
  addCourses();
  window.addEventListener("scroll", handleScroll);
});