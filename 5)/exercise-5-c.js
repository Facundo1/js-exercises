// 5) For

/* c) Create a variable called "sentence" that has an empty string, then the array of the
point a) go through it with a for loop to save each word within the
variable sentence. At the end show a single alert with the complete chain. */

var words = ['pizza', 'apple', 'gun', 'door', 'boat'];
var sentence = '';

for (let index = 0; index < words.length; index++) {
    sentence += (words[index] + ' ');
}
alert(sentence);