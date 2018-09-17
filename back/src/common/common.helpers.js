function pickANumberOfThings(Arr, NbToPick) {
  let pickedThings = [];
  let indexes = getUniqueIndexes(NbToPick, Arr.length);
  indexes.forEach((index) => {
    pickedThings.push(Arr[index]);
  });
  return pickedThings;
}

function getUniqueIndexes(nbIndex, indexMax) {
  let indexes = [];
  let i = 0;
  while (i < nbIndex) {
    let index = Math.floor(Math.random() * indexMax);
    if (!indexes.includes(index)) {
      indexes.push(index);
      i++;
    }
  }
  return indexes;
}

module.exports = { pickANumberOfThings };
