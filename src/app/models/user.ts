export class User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  position: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    position: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.position = position;
  }
}
