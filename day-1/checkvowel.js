function checkVowel(srt){
    let vowel=['a','e','i','o','u']
let arr=[]
    for (let i=0;i<=vowel.length;i++) {
        for (const j of srt.toLowerCase()) {
            if (vowel[i]==j) {
                arr.push(j)
            }
        }
    }
    return arr


}

console.log(checkVowel("shaikTazUddin"));
