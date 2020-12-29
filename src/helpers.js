const helpers = (() => {
  const verifyInputs = (inputs) => {
    if (inputs.some((inp) => !inp || inp.length === 0)) {
      return false;
    }
    return true;
  };

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const randomStarter = (p1, p2) => {
    const rand = Math.floor(Math.random() * 2);
    return rand === 0 ? p1 : p2;
  };

  return { verifyInputs, removeAllChildNodes, randomStarter };
})();

export default helpers;
