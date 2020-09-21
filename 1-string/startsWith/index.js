export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const tempString = '粤A';
  let count = 0;
  for (const i in collection) {
    const temp = collection[i].slice(0, 2);
    if (temp === tempString) {
      count += 1;
    }
  }
  return count;
}
