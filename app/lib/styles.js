"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.Button = exports.Title = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container",
  componentId: "oo455n-0"
})(["background-color:#282c34;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin);color:white;"]);

exports.Container = Container;

const Title = _styledComponents.default.h1.withConfig({
  displayName: "styles__Title",
  componentId: "oo455n-1"
})(["font-size:1.5em;text-align:center;"]);

exports.Title = Title;

const Button = _styledComponents.default.button.withConfig({
  displayName: "styles__Button",
  componentId: "oo455n-2"
})(["background:", ";color:", ";font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid palevioletred;border-radius:3px;"], props => props.primary ? "palevioletred" : "white", props => props.primary ? "white" : "palevioletred");

exports.Button = Button;

const Input = _styledComponents.default.input.withConfig({
  displayName: "styles__Input",
  componentId: "oo455n-3"
})(["background:", ";color:", ";font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid palevioletred;border-radius:3px;"], props => props.primary ? "palevioletred" : "white", props => props.primary ? "white" : "palevioletred");

exports.Input = Input;