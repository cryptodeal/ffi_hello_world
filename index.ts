import { ptr } from "bun:ffi";
import { sayHello } from "./bindings";

sayHello(ptr(Buffer.from('World\0')))