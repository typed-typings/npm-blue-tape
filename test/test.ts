import tape = require('blue-tape');
import {Promise} from 'es6-promise';

tape('shouldFail()', (t) => {
  t.plan(2);
  let promise = Promise.reject(new TypeError('secret'));
  t.shouldFail(promise);
  t.shouldFail(promise, TypeError);
});
