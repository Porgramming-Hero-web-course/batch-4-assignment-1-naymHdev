{
  // Problem 5:

  type Person = {
    name: string;
    age: number;
  };

  const getProperty = <X, Y extends keyof X>(object: X, key: Y) => {
    return object[key];
  };

  const person: Person = {
    name: "Alice",
    age: 30,
  };

  const result = getProperty(person, "name");
  // console.log(result);

  //
}
