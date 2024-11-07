{
  // Problem -1

  const sumArray = (numbers: number[]): number => {
    let total: number = 0;
    for (let num of numbers) {
      total += num;
    }
    return total;
  };

  const numbers = [1, 2, 3, 4, 5];
  const total = sumArray(numbers);

  console.log(`Sum of all elements output = ${total}`);

  //
}
