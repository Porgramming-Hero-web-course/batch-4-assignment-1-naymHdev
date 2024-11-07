{
  // Problem -2

  const numbers = [1, 2, 2, 3, 4, 4, 5];
  const removeDuplicates = (numbers: number[]): number[] => {
    return [...new Set(numbers)];
  };

  const mewArray = removeDuplicates(numbers);

  console.log(`New array with duplicates removed = ${mewArray}`);

  //
}
