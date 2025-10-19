const checkPalindrome = (str) => {
  let isPalindrome = true;

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
};

console.log(checkPalindrome("tazat"));
