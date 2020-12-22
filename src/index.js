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
      const nameForm = document.getElementById("name-form");
      nameForm.classList.add("form-display");
      const form = document.getElementById("form-container");
      form.classList.remove("form-hide");
      form.classList.add("form-display");
    },
    false
  );
})();
