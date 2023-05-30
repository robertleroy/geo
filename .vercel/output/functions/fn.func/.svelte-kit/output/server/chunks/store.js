import { w as writable } from "./index2.js";
const ipStore = writable({});
const currentLocation = writable({});
const msg = writable();
export {
  currentLocation as c,
  ipStore as i,
  msg as m
};
