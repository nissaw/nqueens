solversFirstAttempt.js
/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {

  var solution = undefined;
  var solutionBoard = new Board({n:n});
  var rowsToCheck = _.range(0, n);  // [0, 1, 2, 3]; // 
  var colsToCheck = _.range(0, n); // [0, 1, 2, 3]; // 
  var originalN = n;


var placePieces = function(n){ 
  if (n === 0) {
    solution = solutionBoard.rows();
    console.log('Single solution for ' + originalN + ' rooks:', JSON.stringify(solution));
  } else {
    var i = rowsToCheck.shift();
    var k = colsToCheck.shift();
    solutionBoard.togglePiece(i, k);


    placePieces( n - 1 );
  }
}

placePieces(n);

return solutionBoard.rows();

};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; 
  // var solution = undefined;
  var solutionBoard = new Board({n:n});
  var rowsToCheck = _.range(0, n);  // [0, 1, 2, 3]; // 
  var colsToCheck = _.range(0, n); // [0, 1, 2, 3]; // 
  var originalN = n;


// every time findNRooksSolution returns increment solution count
// but make sure it's not a dup of what already made.
  
var bannedStartPosition = {}; 
     
for (var i = 0 ; i < n ; i ++) {
  bannedStartPosition[i] = [];
};
 
var placeFirstPieceInAUniqueSpot = function() { 
  var startPosition = [];

  for (var k = 0; k < n; k++ ) {
    var currentCol = bannedStartPosition[k].length;
    if ( currentCol === n ){
      k++;
    } else {
      startPosition = [k, currentCol]; 
      bannedStartPosition[k].push(currentCol); 
    }
  }

  // if (startPosition === undefined) {

  // }
  n--; 
  solutionBoard.togglePiece(startPosition[0], startPosition[1]);
  rowsToCheck.splice(startPosition[0], 1); 
  colsToCheck.splice(startPosition[1], 1);
};


var placePieces = function(n){ 
  if (n === 0) {
    solution = solutionBoard.rows();
    solutionCount++;
    console.log('Single solution for ' + originalN + ' rooks:', JSON.stringify(solution));
  } else {
    var i = rowsToCheck.shift();
    var k = colsToCheck.shift();
    solutionBoard.togglePiece(i, k);
    bannedStartPosition[i].push(k);
   
    placePieces( n - 1 );
  }
}

placeFirstPieceInAUniqueSpot();
placePieces(n);

console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
return solutionCount;

};




// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};