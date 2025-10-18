function countStr(str) {
  let count = 0;
  for (let i = 1; i <= str.length; i++) {
    count += 1;
  }
  return count;
}

console.log(countStr("taz"));
