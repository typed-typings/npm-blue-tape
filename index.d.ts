import tape = require('tape');

declare module 'tape' {
  interface Test {
    shouldFail(p: PromiseLike<any>, c?: new() => Error): PromiseLike<any>;
  }
}

export = tape;
