function merge(seq_a: number[], seq_b: number[]): number[] {
  const res: number[] = [];

  let a_i = 0;
  let b_i = 0;
  for ( ; a_i != seq_a.length && b_i != seq_b.length; ) {
    const min = seq_a[a_i] < seq_b[b_i]? seq_a[a_i++] : seq_b[b_i++];

    res.push(min);
  }

  const rest = a_i === seq_a.length? seq_b.slice(b_i) : seq_a.slice(a_i);
  
  return [...res, ...rest];
}

function mergeSort(seq: number[]): number[] {
  if (seq.length <= 1) {
    return seq;
  }
  
  const min = Math.floor(seq.length / 2);
  const left = mergeSort(seq.slice(0, min));
  const right = mergeSort(seq.slice(min));

  return merge(left, right);
}

export default {
  mergeSort
}