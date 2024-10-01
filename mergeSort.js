let mergeArr = (left, right) => {
  result = [];
  i = 0;
  j = 0;
  let merge = () => {
    if (i == left.length || j == right.length) {
      if (i == left.length) {
        for (let w = j; w < right.length; w++) {
          result.push(right[w]);
        }
      } else {
        for (let w = i; w < left.length; w++) {
          result.push(left[w]);
        }
      }
      return result;
    } else {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
      merge();
    }
  };
  merge();
  return result;
};

let sort = (arr) => {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return mergeArr(sort(left), sort(right));
};
console.log(sort([2, 4, 5, 7, 0, 1, 3, 6]));
