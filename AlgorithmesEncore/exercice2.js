const list1 = [3, 7, 8, 3, 6, 1];
const list2 = [1, 4, 5, 8];

function sunbathingWest(array) {
  let counter = 1;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] <= array[j]) {
        break;
      } else if (array[i] > array[j]) {
        counter++;
        break;
      }
    }
  }
  return counter;
}
console.log(sunbathingWest(list1));
console.log(sunbathingWest(list2));
