import sort from './mergeSort';
import getRandomArray from '../../utils/getRandomArray';

const randomData = getRandomArray();

const sortedRandomData = [...randomData].sort((a, b) => a - b);

test(`普通版本-归并排序-升序: ${randomData}`, () => {
  const res = sort.mergeSort([...randomData]);
  expect(res).toStrictEqual(sortedRandomData);
})