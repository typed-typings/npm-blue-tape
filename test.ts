/// <reference path="bundle.d.ts" />
import test = require('blue-tape');

test('a test', (t) => {
  t.plan(1);
  t.assert(1 === 1);
});
