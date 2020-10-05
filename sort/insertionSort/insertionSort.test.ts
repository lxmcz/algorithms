import sort from './insertionSort';
import getRandomArray from '../../utils/getRandomArray';

const randomData = getRandomArray();

const sortedRandomData = randomData.sort((a, b) => a - b);

test(`普通版本-插入排序-升序 ${randomData}`, () => {
  expect(sort.insertionSort([...randomData])).toStrictEqual(sortedRandomData);
});

test(`函数式版本-插入排序-升序 ${randomData}`, () => {
  expect(sort.insertionSortFP([...randomData])).toStrictEqual(sortedRandomData);
});