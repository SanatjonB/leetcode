/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  const timeoutId = setTimeout(function () {
    fn.apply(null, args);
  }, t);
  function cancelFn() {
    clearTimeout(timeoutId);
  }
  return cancelFn;
};
