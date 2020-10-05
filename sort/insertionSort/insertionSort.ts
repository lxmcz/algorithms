function insertionSort(seq: number[]): number[] {
  const len = seq.length;

  // currentIndex之前的数据都是已排序的
  for (let currentIndex = 1; currentIndex != len; ++currentIndex) {
    // 将currentIndex位置的元素逐渐向前移动直至合适的位置
    for (let swapIndex = currentIndex; swapIndex > 0 && (seq[swapIndex] < seq[swapIndex - 1]); --swapIndex) {
      const tmp = seq[swapIndex];
      seq[swapIndex] = seq[swapIndex - 1];
      seq[swapIndex - 1] = tmp;
    }
  }

  return seq;
}

function insertionSortFP(seq: number[]): number[] {
  function insertToRightPlace(seq: number[], item: number): number[] {
    if (seq.length === 0) {
      return [item];
    }
    
    const [first, ...rest] = seq;
    
    if (item < first) {
      return [item, ...seq];
    }
    else {
      return [first, ...insertToRightPlace(rest, item)];
    }
  }

  return seq.reduce<number[]>((sorted, item) => {
    return insertToRightPlace(sorted, item)
  }, []);
}

export default {
  insertionSort,
  insertionSortFP
}