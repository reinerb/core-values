/**
 * Randomize the order of elements in an array
 * @param array - The array to be randomized
 */
export const randomizeArray = <T>(array: Array<T>) => {
  const newArray = [...array];
  let currentIndex = newArray.length;
  let randomIndex;

  while (currentIndex > 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
};
