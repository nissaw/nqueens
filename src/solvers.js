
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
  var solution;
  var solutionBoard = new Board({n:n});
  var findSolution = function(row) {
    // define base case
      // increment and return solution count
    if (row === n) {
      // solved = true;
      solution = _.map(solutionBoard.rows(), function(row) {
        return row.slice();
      });
      return;
    }

    // iterate through possibilities - cols
    for (var i = 0; i < n; i++) {
      // place a piece on the board
      solutionBoard.togglePiece(row, i);
      // check for conflicts
      if ( !solutionBoard.hasAnyRooksConflicts() ) {
        // recursively check the next row
        findSolution(row+1);
      }
      // take piece off the board.
      solutionBoard.togglePiece(row, i);
    };
    
  }

  findSolution(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 

  var solutionBoard = new Board({n:n});

  // Build find solution function -> row as arg
  var findSolution = function(row) {
    // define base case
      // increment and return solution count
    if (row === n) {
      return solutionCount++;
    }

    // iterate through possibilities - cols
    for (var i = 0; i < n; i++) {
      // place a piece on the board
      solutionBoard.togglePiece(row, i);
      // check for conflicts
      if ( !solutionBoard.hasAnyRooksConflicts() ) {
        // recursively check the next row
        findSolution(row+1);
      }
      // take piece off the board.
      solutionBoard.togglePiece(row, i);
    };
    
  }
  findSolution(0);
    

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;

};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var solutionBoard = new Board({n:n});
  var solution = solutionBoard.rows();
  var findSolution = function(row) {
    // define base case
      // increment and return solution count
    if (row === n) {
      solution = _.map(solutionBoard.rows(), function(row) {
        return row.slice();
      });
      return;
    }

    // iterate through possibilities - cols
    for (var i = 0; i < n; i++) {
      // place a piece on the board
      solutionBoard.togglePiece(row, i);
      // check for conflicts
      if ( !solutionBoard.hasAnyQueensConflicts() ) {
        // recursively check the next row
        findSolution(row+1);
      }
      // take piece off the board.
      solutionBoard.togglePiece(row, i);
    };    
  }

  findSolution(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; 

  var solutionBoard = new Board({n:n});

  // Build find solution function -> row as arg
  var findSolution = function(row) {
    // define base case
      // increment and return solution count
    if (row === n) {
      return solutionCount++;
    }

    // iterate through possibilities - cols
    for (var i = 0; i < n; i++) {
      // place a piece on the board
      solutionBoard.togglePiece(row, i);
      // check for conflicts
      if ( !solutionBoard.hasAnyQueensConflicts() ) {
        // recursively check the next row
        findSolution(row+1);
      }
      // take piece off the board.
      solutionBoard.togglePiece(row, i);
    };
    
  }
  findSolution(0);
    

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;

};