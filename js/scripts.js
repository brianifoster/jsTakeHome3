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
