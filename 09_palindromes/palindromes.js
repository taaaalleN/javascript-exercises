const palindromes = function (string) {
  const regex = /[^A-Za-z0-9]|\s|,/g;
  const strippedString = string.toLowerCase().replace(regex, "");
  const reverseString = string.split("").reverse().join("").toLowerCase().replace(regex, "");

  //   console.log(reverseString);
  //   console.log(strippedString);
  return reverseString == strippedString ? true : false;
};

// palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
