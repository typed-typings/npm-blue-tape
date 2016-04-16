import tape = require('tape');

declare module 'tape' {
  interface Test {
    shouldFail(p: PromiseLike<any>, c?: Error): PromiseLike<any>;
  }
}

export = tape;
