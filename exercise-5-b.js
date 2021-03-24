// 5) For

/* b) To the previous array, convert the first letter of each word to uppercase and display a
alert for every word modified. */

var words = ['pizza', 'apple', 'gun', 'door', 'boat'];

for (let index = 0; index < words.length; index++) {
    alert(words[index].substring(0, 1).toUpperCase() + words[index].substring(1, words[index].length));
}