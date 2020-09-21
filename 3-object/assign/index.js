export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  source.properties.status = 'processed';
  const obj1 = { serialNumber: '12345' };
  let newObj = {};
  Object.assign(newObj, obj1, source);
  return newObj;
}
