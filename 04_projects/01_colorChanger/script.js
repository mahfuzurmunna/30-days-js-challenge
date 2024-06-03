const body = document.querySelector("body");

const buttons = document.querySelectorAll(".button");
const para = document.querySelector(".para");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
      para.style.color = "white";
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
      para.style.color = "darkslategrey";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
      para.style.color = "white";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
      para.style.color = "darkslategrey";
    }
  });
});
