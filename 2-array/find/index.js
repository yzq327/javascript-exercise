export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  var name;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].age < 20 && collection[i].age > 10) {
      name = collection[i].name;
    }
  }
  return name;
}
