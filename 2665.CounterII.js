/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// var createCounter = function(init) {

// };

function createCounter(init) {
  let number = init;
  const increment = () => {
    number++;
    return number;
  };
  const reset = () => {
    number = init;
    return number;
  };
  const decrement = () => {
    number--;
    return number;
  };
  return { increment, reset, decrement };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
