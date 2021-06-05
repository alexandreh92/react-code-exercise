const arrayRange = (start: number, end: number) => {
  return Array(end - start + 1)
    .fill(undefined)
    .map((_, idx) => start + idx);
};

export default arrayRange;
