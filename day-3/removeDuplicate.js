function removeDuplicate(sentence) {
  let newSen = "";

  for (let i = 0; i < sentence.length; i++) {
    if (!newSen.includes(sentence[i])) {
      newSen += sentence[i];
    }
  }

  return newSen;
}

console.log(removeDuplicate("iamtazuddin"));
