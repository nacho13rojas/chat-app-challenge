"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.Button = exports.Input = exports.InputContainer = exports.Content = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../theme/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container",
  componentId: "zgue0e-0"
})(["align-items:flex-end;background-color:", ";border-radius:0px 0px 4px 4px;display:flex;justify-content:flex-end;margin:0px 16px 16px;padding:20px;width:90vw;"], _colors.SECONDARY);

exports.Container = Container;

const Content = _styledComponents.default.div.withConfig({
  displayName: "styles__Content",
  componentId: "zgue0e-1"
})(["display:inline-flex;flex-direction:column;width:100%;"]);

exports.Content = Content;

const InputContainer = _styledComponents.default.div.withConfig({
  displayName: "styles__InputContainer",
  componentId: "zgue0e-2"
})(["background-color:", ";border-radius:8px;display:flex;"], _colors.PRIMARY);

exports.InputContainer = InputContainer;

const Input = _styledComponents.default.input.withConfig({
  displayName: "styles__Input",
  componentId: "zgue0e-3"
})(["background-color:transparent;border:0px;color:", ";font-size:16px;margin-right:16px;padding:8px;width:100%;::placeholder{color:", ";}:focus{outline:none;}"], _colors.WHITE, _colors.TERTIARY);

exports.Input = Input;

const Button = _styledComponents.default.button.withConfig({
  displayName: "styles__Button",
  componentId: "zgue0e-4"
})(["background-color:transparent;border:0px;display:flex;padding:4px;"]);

exports.Button = Button;

const Icon = _styledComponents.default.img.withConfig({
  displayName: "styles__Icon",
  componentId: "zgue0e-5"
})(["width:28px;"]);

exports.Icon = Icon;