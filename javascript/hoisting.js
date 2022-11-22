// 1. Przykład
function hoisting() {
    console.log('1', x); // undefined
    if (true) {
        var x = 1;
    }

    console.log('2', x); // 1
}

// hoisting();

// Tak jak przeszktałcił to JavaScript
/*
function hoisting() {
  var x;

  console.log(x); // undefined

  if (true) {
    x = 1;
  }

  console.log(x); // 1
}
*/

// 2.
