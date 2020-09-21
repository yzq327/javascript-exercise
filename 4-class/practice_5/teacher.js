// TODO 20: 在这里写实现代码
import Person from './person';

export default class Student extends Person {
  constructor(name, age, teacherClass = 0) {
    super(name, age);
    this.teacherClass = teacherClass;
  }

  introduce() {
    if (this.teacherClass) {
      return `${super.introduce()} I am a Teacher. I teach Class ${this.teacherClass}.`;
    }
    return `${super.introduce()} I am a Teacher. I teach No Class.`;
  }
}
