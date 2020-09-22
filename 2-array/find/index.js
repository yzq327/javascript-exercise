export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  let name;
  for (let i = 0; i < collection.length; i += 1) {
    if (collection[i].age < 20 && collection[i].age > 10) {
      // eslint-disable-next-line prefer-destructuring
      name = collection[i].name;
    }
  }
  return name;
}
