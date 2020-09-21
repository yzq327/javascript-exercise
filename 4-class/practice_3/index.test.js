import Person from './person';
import Student from './student';
import Worker from './worker';

describe('Person', () => {
  test('should have field name and age', () => {
    const person = new Person('Tom', 21);
    expect(person.name).toBe('Tom');
    expect(person.age).toBe(21);
  });

  test('should have a method introduce, introduce person with name and age', () => {
    const person = new Person('Tom', 21);
    const introduce = person.introduce();
    expect(introduce).toBe('My name is Tom. I am 21 years old.');
  });
});

describe('Student', () => {
  test('should have field name, age and class number', () => {
    const student = new Student('Tom', 21, 2);
    expect(student.name).toBe('Tom');
    expect(student.age).toBe(21);
    expect(student.studentClass).toBe(2);
  });

  test('should overwrite Person introduce, introduce with class number', () => {
    const student = new Student('Tom', 21, 2);
    const introduce = student.introduce();
    expect(introduce).toBe('I am a Student. I am at Class 2.');
  });
});

describe('Worker', () => {
  test('should have field name, age', () => {
    const worker = new Worker('Tom', 21);
    expect(worker.name).toBe('Tom');
    expect(worker.age).toBe(21);
  });

  test('should overwrite Person introduce, introduce with no field', () => {
    const worker = new Worker('Tom', 21);
    const introduce = worker.introduce();
    expect(introduce).toBe('I am a Worker. I have a job.');
  });
});
