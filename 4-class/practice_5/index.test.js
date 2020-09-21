import Person from './person';
import Student from './student';
import Teacher from './teacher';

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

  test('should overwrite Person introduce, introduce with name, age and class number', () => {
    const student = new Student('Tom', 21, 2);
    const introduce = student.introduce();
    expect(introduce).toBe('My name is Tom. I am 21 years old. I am a Student. I am at Class 2.');
  });
});

describe('Teacher', () => {
  test('should have field name, age and class number', () => {
    const teacher = new Teacher('Tom', 21, 2);
    expect(teacher.name).toBe('Tom');
    expect(teacher.age).toBe(21);
    expect(teacher.teacherClass).toBe(2);
  });

  test('should overwrite Person introduce, introduce with name, age and class number, given teacher have class', () => {
    const teacher = new Teacher('Tom', 21, 2);
    const introduce = teacher.introduce();
    expect(introduce).toBe('My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.');
  });

  test('should overwrite Person introduce, introduce with name, age and class number, given teacher have no class', () => {
    const teacher = new Teacher('Tom', 21);
    const introduce = teacher.introduce();
    expect(introduce).toBe('My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.');
  });
});
