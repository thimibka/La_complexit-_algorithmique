const list1 = [10, 15, 3, 7];
const n1 = 17;
const list2 = [1, 8, 10, 21];
const n2 = 19;
function findSum(list, result) {
  for (let i = 0; i < list.length; i++) {
    if (list.includes(result - list[i])) {
      return true;
    }
  }
  return false;
}
console.log(findSum(list1, n1));
console.log(findSum(list2, n2));
