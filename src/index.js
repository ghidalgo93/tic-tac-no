import "./styles.css";

const displayController = (() => {
  const startBtn = document.getElementById("start-btn");

  startBtn.addEventListener(
    "click",
    // start animation
    function () {
      this.style.display = "none";
      const title = document.getElementById("title");
      title.classList.add("slide");
    },
    false
  );
})();
