import helpers from "./helpers";

const displayController = (() => {
  const startBtn = document.getElementById("start-btn");
  const playBtn = document.getElementById("play-btn");
  const formContainer = document.getElementById("form-container");

  startBtn.addEventListener(
    "click",
    // start animation
    function () {
      this.style.display = "none";
      const title = document.getElementById("title");
      title.classList.add("slide-up");
      formContainer.classList.remove("form-hide");
      formContainer.classList.add("form-display");
    },
    false
  );
  playBtn.addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      formContainer.classList.remove("shake");
      const inputsRaw = document.querySelectorAll(".inputs");
      const inputs = [inputsRaw[0].value, inputsRaw[1].value];
      if (helpers.verifyInputs(inputs)) {
        // get names from form => send them to program somehow...
        // Store names
        // form container slide down
        // game container fade in
        const form = document.getElementById("name-form");
        form.reset();
      } else {
        // shake animation
        formContainer.classList.add("shake");
      }
    },
    false
  );
})();

export default displayController;
