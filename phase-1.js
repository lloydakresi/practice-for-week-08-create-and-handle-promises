function stretch() {
  // Your code here
  return new Promise((resolve) =>{
    setTimeout(() => resolve(), 1000)
  }).then(console.log("done stretching"));
}

function runOnTreadmill() {
  // Your code here
  return new Promise((resolve) =>{
    setTimeout(() => resolve(), 500)
  }).then(console.log("done running on treadmill"));
}

function liftWeights() {
  // Your code here
  return new Promise((resolve) =>{
    setTimeout(() => resolve(), 2000)
  }).then(console.log("done lifting weights"));
}

function workout() {
  // Your code here
  stretch()
  .then(() => runOnTreadmill())
  .then(() => liftWeights())
  .then(() => {console.log("done working out")});
}




/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
