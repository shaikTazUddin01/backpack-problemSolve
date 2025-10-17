function palindrome(str) {
  const s = str.toLowerCase();
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    console.log(i, j);
    if (s[i] !== s[j]) {
      return false;
    }

    i++;
    j--;
  }
  return true;
}

console.log(palindrome("peep"));
console.log(palindrome("Nun"));
console.log(palindrome("Madam"));
