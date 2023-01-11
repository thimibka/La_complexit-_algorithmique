const fs = require("fs");
const fileName = "list.txt";

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.log(error.message);
    return;
  }
  let list = create_list(data);
  let finalSortedList = mergeSort(list);
  console.log(`Tri fusion : ${counter} comparaisons pour ${finalSortedList}`);
});
function create_list(data) {
  return data
    .split(" ")
    .map((n) => parseInt(n))
    .filter((n) => !isNaN(n));
}
let counter = 0;
function mergeSort(data) {
  //cherche si il y a au moins un élément
  if (data.length <= 1) {
    return data;
  }

  //verifie le milieu du tableau
  const middle = Math.floor(data.length / 2);

  //creation partie gauche et droite
  const left = data.slice(0, middle);
  const right = data.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  //creer un array final
  let final = [],
    leftIndex = 0,
    rightIndex = 0;
   
  //boucle de comparaison
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      final.push(left[leftIndex]);
      leftIndex++;
      counter++;
    } else {
      final.push(right[rightIndex]);
      rightIndex++;
      counter++;
    }
  }
  return final.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
