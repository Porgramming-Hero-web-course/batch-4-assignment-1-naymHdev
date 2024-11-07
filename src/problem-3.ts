{
  // Problem 3:

  const countWordOccurrences = (sentence: string, word: string): number => {
    const re = new RegExp(word, "g");
    const match = sentence.match(re);

    return match ? match.length : 0;
  };

  const countWord = countWordOccurrences("I love typescript", "typescript");

  //   console.log(`Output = ${countWord}`);

  //
}
