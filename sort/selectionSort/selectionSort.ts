function selectionSort(seq: number[]): number[] {
  const swap = (idx_x: number, idx_y: number): void => {
    if (idx_x === idx_y) {
      return ;
    }
    const tmp  = seq[idx_x];
    seq[idx_x] = seq[idx_y];
    seq[idx_y] = tmp;
  }

  const len = seq.length;

  for (let i = 0; i != len; ++i) {
    let min = i;
    // 在余下的元素中选择最小的
    for (let j = i + 1; j != len; ++j) {
      if (seq[j] < seq[min]) {
        min = j;
      }
    }
    swap(i, min);
  }

  return seq;
}

function selectionSortFP(seq: number[]): number[] {
  if (seq.length == 1) {
    return seq;
  }

  // 将每个数与其他数比较 如果它是最小的则返回ture
  const compareWithOther: boolean[] = seq.map(x => {
    const compareWithX = seq.map(y => x <= y);
    const isXMin = compareWithX.every(r => r === true);

    return isXMin;
  });

  // 找到第一个最小的数
  const minOfFirst: number = compareWithOther.findIndex(r => r === true);

  return [ seq[minOfFirst], ...selectionSortFP(seq.filter((_, index) => index != minOfFirst))];
}

export default {
  selectionSort,
  selectionSortFP
}