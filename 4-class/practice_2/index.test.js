import Person from './person';
import Student from './student';

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

  test('should overwrite Person introduce, introduce student with class', () => {
    const student = new Student('Tom', 21, 2);
    const introduce = student.introduce();
    expect(introduce).toBe('I am a Student. I am at Class 2.');
  });
});
