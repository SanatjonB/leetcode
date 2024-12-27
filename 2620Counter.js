var createCounter = function (n) {
  let number = n;
  return function () {
    return number++;
  };
};
