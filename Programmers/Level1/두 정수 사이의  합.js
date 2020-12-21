// 방법 1.
function solution(a, b) {
  let sum = 0;
  if (a === b) {
    return a;
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
    return sum;
  } else {
    for (let j = b; j >= a; j--) {
      sum += j;
    }
    return sum;
  }
}

// 방법 2.
function solution(a, b) {
  let sum = 0;
  let big = a > b ? a : b;
  let small = a < b ? a : b;

  if (a === b) {
    return a;
  } else {
    for (let i = small; i <= big; i++) {
      sum += i;
    }
    return sum;
  }
}
