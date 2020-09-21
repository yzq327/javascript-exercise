function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  const result = [];
  let index = 0;
  for (const i in collection) {
    if (collection[i] % 3 === 0) {
      result[index] = collection[i];
      index += 1;
    }
  }
  return result;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.filter(function(item, index, self) {
    return self.indexOf(item) === index;
  });
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
