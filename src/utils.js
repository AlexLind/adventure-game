const generateRandom = () => {
  const castles = [
    "Red",
    "Green",
    "Yellow",
    "Blue",
    "Magenta",
    "Brown",
    "Purple",
    "Grey",
    "Pink",
    "Teal",
  ];
  const choices = castles.sort(() => Math.random() - 0.5).slice(0, 5);
  return choices;
};
console.log(generateRandom());

export {generateRandom}
