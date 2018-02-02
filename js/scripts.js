// var errandOne = prompt("What are you doing this weekend?");
// var timeOne = prompt("How long will that take you?", "In hours");
// var errandTwo = prompt("What else are you going to do this weekend?");
// var timeTwo = prompt("And how long will that take?", "In hours");
// var errandThree = prompt("What final thing are you going to do this weekend?");
// var timeThree = prompt("And finally, how long will that take?", "In hours");
// var myErrands = [];
//
// myErrands.push(errandOne, timeOne, errandTwo, timeTwo, errandThree, timeThree);
// // console.log(myErrands);
//
// for (let i = 0; i < myErrands.length; i++) {
//   if(myErrands[i] === errandOne) {
//     myErrands.splice(2, 0, 'Friday');
//   } else {
//     if(myErrands[i] === errandTwo) {
//       myErrands.splice(5, 0, 'Saturday');
//     } else {
//       if(myErrands[i] === errandThree) {
//         myErrands.splice(8, 0, 'Sunday');
//       }
//     }
//   }
// }
// console.log(myErrands);


//TAKEHOME

//STEP 1
var todos = [];
var todoOne = prompt("What do you want to do this weekend?");
var todoTwo = prompt("What else do you want to do this weekend?");
var todoThree = prompt("What is a third thing you want to do this weekend?");

todos.push(todoOne, todoTwo, todoThree);

//STEP 2
var todosWithDays = [];
for(let i = 0; i < todos.length; i++) {
  var due = prompt(`What day do you want to get ${todos[i]} done?`, 'Please use this format: day/month/year');
  due = new Date(due);
  todosWithDays.push([todos[i], due]);
}

//STEP 3
var sortedWithIndices = [];
let j = 0;
var now = new Date().getTime();
while (j < todosWithDays.length) {
  let oneDay = 24 * 60 * 60 * 1000; // hourse*minutes*seconds*milliseconds
  var diffDays = Math.round((todosWithDays[j][1].getTime() - now)/oneDay);
  sortedWithIndices.push([diffDays, todosWithDays[j]]);
  j++
}

sortedWithIndices.sort();

console.log(sortedWithIndices[sortedWithIndices.length - 1][1], ' will take the longest');

//STEP 4
let n = 0;

do {
  if(n != sortedWithIndices.length - 1) {
    sortedWithIndices[n][1].push("done");
  }
  n++
} while(n < sortedWithIndices.length);

let alertArr = [];
for(let i = 0; i < sortedWithIndices.length; i++) {
  if(sortedWithIndices[i][1].indexOf('done') !== -1) {
    alertArr.push(sortedWithIndices[i][1]);
  }
}

//STEP 5
alert(alertArr);
