const player = (name, token) => {
  const getName = () => name;
  const getToken = () => token;
  return { getName, getToken };
};

export default player;
