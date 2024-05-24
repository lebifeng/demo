const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    reject(new TypeError('Chaining cycle detected for promise'));
  }

  // eslint-disable-next-line no-use-before-define
  if (x instanceof MyPromise) {
    x.then(resolve, reject);
  }

  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    let called = false;

    try {
      const { then } = x;

      if (typeof then === 'function') {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            // eslint-disable-next-line no-use-before-define
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          },
        );
      } else {
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  }

  resolve(x);
}

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    if (typeof executor !== 'function') {
      throw new Error('MyPromise resolver undefined is not a function');
    }

    executor(this.resolve, this.reject);
  }

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach((callback) => callback());
    }
  };

  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach((callback) => callback());
    }
  };

  then(onFulfilled, onRejected) {
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });

        this.onRejectedCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
      } else if (this.status === FULFILLED) {
        queueMicrotask(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      } else if (this.status === REJECTED) {
        queueMicrotask(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
    });

    return promise2;
  }
}

MyPromise.prototype.catch = function catchFn(onRejected) {
  return this.then(null, onRejected);
};

MyPromise.prototype.resolve = function resolve(value) {
  return new MyPromise((resolve) => {
    resolve(value);
  });
};

MyPromise.prototype.reject = function reject(reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason);
  });
};

MyPromise.prototype.all = function all(promises) {
  const result = [];
  let count = 0;

  return new MyPromise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then(
        (value) => {
          result[index] = value;
          count += 1;
          if (count === promises.length) {
            resolve(result);
          }
        },
        (reason) => {
          reject(reason);
        },
      );
    });
  });
};

MyPromise.prototype.allSettled = function allSettled(promises) {
  const result = [];

  return new MyPromise((resolve) => {
    promises.forEach((promise, index) => {
      promise.then(
        (value) => {
          result[index] = { status: 'fulfilled', value };
        },
        (reason) => {
          result[index] = { status: 'rejected', reason };
        },
      );
    });

    resolve(result);
  });
};

MyPromise.prototype.any = function any(promises) {
  return new MyPromise((resolve, reject) => {
    let count = 0;

    promises.forEach((promise) => {
      promise.then(resolve, (reason) => {
        count += 1;
        if (count === promises.length) {
          reject(reason);
        }
      });
    });
  });
};

MyPromise.prototype.race = function race(promises) {
  return new MyPromise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve, reject);
    });
  });
};
