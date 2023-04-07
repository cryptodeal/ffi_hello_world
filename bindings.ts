import { dlopen, FFIType } from 'bun:ffi'

export const { symbols: { sayHello } } = dlopen('bindings.dylib', {
  sayHello: {
    args: [FFIType.ptr],
  }
})