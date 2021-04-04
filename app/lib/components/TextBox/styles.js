"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.Button = exports.Input = exports.InputContainer = exports.Content = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container",
  componentId: "rq8j46-0"
})(["align-items:flex-end;background-color:rgba(253,248,246,0.3);border-radius:0px 0px 5px 5px;display:flex;justify-content:flex-end;margin:0px 16px 16px;padding:20px;bottom:0;width:90vw;"]);

exports.Container = Container;

const Content = _styledComponents.default.div.withConfig({
  displayName: "styles__Content",
  componentId: "rq8j46-1"
})(["align-items:flex-end;display:inline-flex;flex-direction:column;align-self:flex-end;width:100%;"]);

exports.Content = Content;

const InputContainer = _styledComponents.default.div.withConfig({
  displayName: "styles__InputContainer",
  componentId: "rq8j46-2"
})(["background-color:rgba(253,248,246,0.1);border-radius:8px;display:flex;justify-content:flex-end;width:100%;"]);

exports.InputContainer = InputContainer;

const Input = _styledComponents.default.input.withConfig({
  displayName: "styles__Input",
  componentId: "rq8j46-3"
})(["background-color:transparent;color:white;::placeholder{color:rgba(253,248,246,0.8);}:focus{outline:none;}font-size:16px;padding:8px;border:0px;margin-right:16px;width:100%;"]);

exports.Input = Input;

const Button = _styledComponents.default.button.withConfig({
  displayName: "styles__Button",
  componentId: "rq8j46-4"
})(["background-color:transparent;border:0px;border-radius:3px;display:flex;padding:4px;"]);

exports.Button = Button;

const Icon = _styledComponents.default.img.withConfig({
  displayName: "styles__Icon",
  componentId: "rq8j46-5"
})(["width:28px;"]);

exports.Icon = Icon;