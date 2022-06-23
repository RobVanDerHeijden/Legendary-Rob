// module.exports = function trim(string) {
//   if (typeof string !== "string") throw new TypeError("Trim wants a string!");
//   return string.replace(/\s/g, "");
// };

// import { GPBreadCrumb } from "./components/breadcrumb/breadcrumb";

// export function trim(string) {
//   if (typeof string !== "string") throw new TypeError("Trim wants a string!");
//   return string.replace(/\s/g, "");
// }

// module.exports =  function sum(a: number, b: number) {
//   return a + b;
// }
// import { AnyIdText } from "../legendary/anyIdText/anyIdText";
// import { AnyIdText } from "./anyIdText/anyIdText";
// import { GPBreadCrumb } from "./components/breadcrumb/breadcrumb";
// module.exports GPBreadCrumb;
// export * from "";

// import { AnyIdText } from "../../gp-local-components/anyIdText/anyIdText";

// function trim(string) {
//   if (typeof string !== "string") throw new TypeError("Trim wants a string!");
//   return string.replace(/\s/g, "");
// }

const getName = () => {
  return "Rob";
};

// const getLocation = () => {
//   return "Berghem";
// };

// const dateOfBirth = "01.01.1970";

// module.exports = {
//   getName: getName,
//   getLocation: getLocation,
//   dob: dateOfBirth,
//   model: model
//   // ...require("./components/anyIdText/anyIdText"),
//   // ...require("./components/breadcrumb/breadcrumb"),
//   // ...require("./factor")
//   // AIT: AnyIdText,
// };

import { Num } from "./num";
import { Text } from "./text";
import Badge from "./element";
// export { Button } from './src/components/Button/Button';
import Button from "./src/components/Button/Button";
// import { DtddAnyBanner } from "./src/components/AnyDtddBanner";
import GpText from "./src/components/GPText/GPText";

// module.exports = { Num }
export { Num, Text, getName, Button, GpText };
