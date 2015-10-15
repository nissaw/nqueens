
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
  // var solutionArr = solutionBoard.rows();

  // var bannedStartPosition = {0: [0, 1, 2,], 1: [], 2: []  ; {0: [0, 1, 2, 3] 
  //                               1: [0]
  //                               }
  var rowsToCheck = _.range(0, n);  // [0, 1, 2, 3]; // 
  var colsToCheck = _.range(0, n); // [0, 1, 2, 3]; // 

  var originalN = n;
  // var plays = n;

// var placeFirstPieceInAUniqueSpot = function() { [a, b]
//   var startPosition = [];
//   for (var i = 0; i < n; i++) {
//     for (var i in bannedStartPosition) {
//       if (bannedStartPosition[i] === undefined) {
//         startPosition = [key, 0]
//       } else if 
//   }
//   for (var key in bannedStartPosition) {
//     if (key)
//   }
//   plays--; 
//   startPosition = [2, 3];
//   solutionBoard.togglePiece(startPosition[0], startPosition[1]);
//   rowsToCheck.splice(2, 1); 
//   colsToCheck.splice(3, 1);
// }
// // where to start position can't be in banned start list 
// // for a given i if obj[i] check for value k in arr 
// // first item go in a [1, 1]
// //rowsToCheck.splice(1, 1); [ 2, 3]

var placePieces = function(n){ //3//2//1//0 kicks to solution
  if (n === 0) {
    solution = solutionBoard.rows();
    console.log('Single solution for ' + originalN + ' rooks:', JSON.stringify(solution));
    // return solutionBoard.rows();
  } else {
    var i = rowsToCheck.shift();
    // for (i = rowsToCheck[0]; i < solutionArr.length; i++ ) {
    // var row = solutionBoard.get(i);
    var k = colsToCheck.shift();
      // for ( var k = colsToCheck[0]; k < row.length; k++ )
    solutionBoard.togglePiece(i, k);
    // solutionBoard.set(i);

    placePieces( n - 1 );
  }
}

placePieces(n);
return solutionBoard.rows();

};

// look for a spot with no row conflicts
// also no col conflicts
// assign a player to that space toggle
// ?? add start player space to skipStart Object 
// ?? add row num to a skip list
// ?? add col index to a skip list

// look through remaing rows for no conflict get a row iterateed row run 2 func on every postitein

// [0, 0]
// skipRow = [0]
// skipCol = [0]
// skiMajDiag = [i]
// skipMin =[i]

// var board = this.rows()
// for (var .. board.lent)
  // board[i] // if i === something in skipRow Array dont do it.
  // board[i][k]  // if k == something in skiCol Array don't do it
  // for board[i][k] pass into our built functions for checking rows/cols/diagonals


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

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
