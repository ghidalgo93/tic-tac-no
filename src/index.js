import "./styles.css";

function slide() {
  this.style.display = "none";
  const title = document.getElementById("title");
  title.classList.add("slide");
}

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", slide, false);
