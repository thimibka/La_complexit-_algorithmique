const list1 = [10, 15, 3, 7];
const n1 = 17;
const list2 = [1, 8, 10, 21];
const n2 = 19;
function hasTwoNumbersWithSum(m, l) {
  let numbersSeen = {};
  for (let i = 0; i < m.length; i++) {
    let otherNum = l - m[i];
    if (numbersSeen[otherNum]) {
      return true;
    }
    numbersSeen[m[i]] = true;
  }
  return false;
}

console.log(hasTwoNumbersWithSum(list1,n1));
console.log(hasTwoNumbersWithSum(list2,n2))
