const home = document.querySelector(".home");
const blog = document.querySelector(".blog");
const contact = document.querySelector(".contact");
const btn = document.getElementById("btn");
const body = document.querySelector("body");

home.addEventListener("mouseover", function () {
  body.style.backgroundColor = "red";
});
blog.addEventListener("mouseover", function () {
  body.style.backgroundColor = "yellow";
});
contact.addEventListener("mouseover", function () {
  body.style.backgroundColor = "blue";
});

btn.addEventListener("click", () => {
  body.style.backgroundColor = "#ffffff";
});
