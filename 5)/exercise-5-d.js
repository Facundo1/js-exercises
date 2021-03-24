// 5) For

/* d) Create an empty array and with a for loop of 10 repetitions fill the array with the
number of the repetition, that is to say that at the end of the execution of the for loop there should be
10 elements within the array, from number 0 to number 9. Show by
browser console the to the final array (use console.log). */

var refillableArray = [];

for (let index = 0; index < 10; index++) {
    refillableArray[index] = index;
}
console.log(refillableArray);