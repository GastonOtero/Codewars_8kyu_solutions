/*
DESCRIPTION:

If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: 
"1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

// My solution:

var countSheep = function (num){
    let counting = [];
    if (num < 1){
      return "";
    } else {
      for (let i = 1; i <= num; i++) {
        counting.push(i + " sheep...")
      }
      return counting.join('');
    }
   }