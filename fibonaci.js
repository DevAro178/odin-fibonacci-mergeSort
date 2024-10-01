let fib = (num) => {
  if (num > 2) {
    let temp = fib(num - 1);
    return [...temp, temp[temp.length - 1] + temp[temp.length - 2]];
  } else {
    if (num == 1) return [0];
    else if (num == 0) return [];
    else return [0, 1];
  }
};

fib(8);
