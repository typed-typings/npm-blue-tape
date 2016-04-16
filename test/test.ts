import tape = require('blue-tape');
import Promise = require('any-promise');

tape('API', (t) => {
  let promise = Promise.reject(new Error('secret'));
  t.shouldFail(promise);
  t.end();
});
