import tape = require('blue-tape');
import {Promise} from 'es6-promise';

class SomeError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

tape('shouldFail()', (t) => {
  t.plan(2);
  let promise = Promise.reject(new SomeError('secret'));
  t.shouldFail(promise);
  t.shouldFail(promise, SomeError);
});
