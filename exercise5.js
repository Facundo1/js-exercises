/*5) For*/

/*a) Create an array containing 5 words and loop through said array using a for loop of
JavaScript to display an alert using each of the words.*/

var words = ['pizza', 'apple', 'gun', 'door', 'boat'];

for (let index = 0; index < words.length; index++) {
    alert(words[index]);
}

/*b) To the previous array, convert the first letter of each word to uppercase and display a
alert for every word modified.*/

for (let index = 0; index < words.length; index++) {
    alert(words[index].substring(0, 1).toUpperCase() + words[index].substring(1, words[index].length));
}

/*c) Create a variable called "sentence" that has an empty string, then the array of the
point a) go through it with a for loop to save each word within the
variable sentence. At the end show a single alert with the complete chain.*/

var sentence = '';

for (let index = 0; index < words.length; index++) {
    sentence += (words[index] + ' ');
}
alert(sentence);

/*d) Create an empty array and with a for loop of 10 repetitions fill the array with the
number of the repetition, that is to say that at the end of the execution of the for loop there should be
10 elements within the array, from number 0 to number 9. Show by
browser console the to the final array (use console.log).*/

var refillableArray = [];

for (let index = 0; index < 10; index++) {
    refillableArray[index] = index;
}
console.log(refillableArray);