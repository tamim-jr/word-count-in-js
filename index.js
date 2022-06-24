// var speech = "I am tamim and who are you and what are you doung now";
// console.log(speech.length);

var word = "This is the example of word,  here you  count all word.";
var singword = 0;
for (i = 0; i < word.length; i++) {
    var char = word[i];
    if (char == " " && word[i-1] != " ") {
        singword++;
    }
}
console.log(singword);