let list = [10, 15, 3, 7];
let k = 17;
let listen = [1,8,10,21];
let y = 19;

function findSum(table, number) {
  for (let i = 0; i < table.length; i++) {
    for (let j = 1; j < table.length; j++) {
      if (table[i] + table[j + 1] == number) {
      return true;
      }
    }    
  }
  return false;
}

console.log(findSum(list, k));
console.log(findSum(listen, y));