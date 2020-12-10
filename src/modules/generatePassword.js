const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);
const randUpperCase = () => String.fromCharCode(randomNumber(65, 91));
const randLowerCase = () => String.fromCharCode(randomNumber(97, 123));
const randNumbers = () => String.fromCharCode(randomNumber(48, 58));
const simbols = ".+-*/,@#$%&()=/?{}[]";
const randSimbols = () => simbols[randomNumber(0, simbols.length)];

const passGenerator = (length, upperCase, lowerCase, numbers, simbols) => {
  const passArray = [];

  for (let i = 0; i < length; i++) {
    if (upperCase) passArray.push(randUpperCase());
    if (lowerCase) passArray.push(randLowerCase());
    if (numbers) passArray.push(randNumbers());
    if (simbols) passArray.push(randSimbols());
  }

  return passArray
    .sort(() => Math.random() - 0.5)
    .join("")
    .slice(0, length);
};

export default passGenerator;
