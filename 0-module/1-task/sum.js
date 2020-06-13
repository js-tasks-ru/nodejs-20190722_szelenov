function sum(a, b) {
  if ([a,b].some(v => typeof v !== 'number')) {
    throw new TypeError();
    // test
  }
  return a + b;
}

module.exports = sum;
