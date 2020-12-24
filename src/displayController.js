import helpers from "./helpers";

const displayController = (() => {
  function startAnimation() {
    this.style.display = "none";
    const title = document.getElementById("title");
    title.classList.add("slide-up");
    const formContainer = document.getElementById("form-container");
    formContainer.classList.remove("form-hide");
    formContainer.classList.add("form-display");
  }
  function play(e) {
    e.preventDefault();
    const formContainer = document.getElementById("form-container");
    const inputsRaw = document.querySelectorAll(".inputs");
    const inputs = [inputsRaw[0].value, inputsRaw[1].value];
    if (helpers.verifyInputs(inputs)) {
      // get names from form => send them to program somehow...
      // Store names
      formContainer.classList.add("slide-down");
      // game container fade in
      const form = document.getElementById("name-form");
      form.reset();
      return inputs;
    }
    formContainer.classList.remove("shake");
    void formContainer.offsetWidth;
    formContainer.classList.add("shake");
  }
  return { startAnimation, play };
})();

export default displayController;
