const helpers = (() => {
  const verifyInputs = (inputs) => {
    if (inputs.some((inp) => !inp || inp.length === 0)) {
      return false;
    }
    return true;
  };

  return { verifyInputs };
})();

export default helpers;
