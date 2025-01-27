import kaboom from "kaboom";
import { scaleFactor } from "./constants";

export const k = kaboom({
  global: false, // ofcourse 
  touchToMouse: true, // even for mobile, just works man 
  canvas: document.getElementById("game"), //canvas we created in the HTML 
  debug: false, // set to false once ready for production
});