const randomData = () => {
  const getRandomNumber = () => {
    const num = Math.random();
    return Math.floor(num * 10);
  }

  return new Array(10).fill(0).map(item => getRandomNumber());
}


export default randomData;