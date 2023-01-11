const list1 = [3, 7, 8, 3, 6, 1];
const list2 = [1, 4, 5, 8];

function sunbathingWest2(array) {
  let counter = 1;
  let max = array[array.length - 1]
  for (let i = array.length; i > 0; i--) {
    if (array[i - 1] > max) {
     max = array[i -1]
     counter++
    }
  }
  return counter
}
console.log(sunbathingWest2(list1));
console.log(sunbathingWest2(list2));
