import sort from './selectionSort';

const randomData = (() => {
  const getRandomNumber = () => {
    const num = Math.random();
    return Math.floor(num * 10);
  }

  return new Array(10).fill(0).map(item => getRandomNumber());
})();


const sortedRandomDataAsc = [...randomData].sort((a, b) => {
  return a - b;
});


test(`普通版本-升序排列 ${randomData}`, () => {
  expect(sort.selectionSort([...randomData])).toStrictEqual(sortedRandomDataAsc);
});


test(`函数式版本-升序排列 ${randomData}`, () => {
  expect(sort.selectionSortFP(randomData)).toStrictEqual(sortedRandomDataAsc);
});
