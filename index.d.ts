import {Thenable} from 'es6-promise';
import tape = require('tape');

declare module 'tape' {
  interface Test {
    shouldFail(p: Thenable<any>, c?: new() => Error): Thenable<any>;
  }
}

export = tape;
