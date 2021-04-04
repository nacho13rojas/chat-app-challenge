"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Content = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container",
  componentId: "oo455n-0"
})(["background-color:#282c34;min-height:100vh;display:flex;flex-direction:column;color:white;"]);

exports.Container = Container;

const Content = _styledComponents.default.div.withConfig({
  displayName: "styles__Content",
  componentId: "oo455n-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:20px;flex:1;"]);

exports.Content = Content;

const Title = _styledComponents.default.h1.withConfig({
  displayName: "styles__Title",
  componentId: "oo455n-2"
})(["align-self:flex-start;font-size:20px;margin:16px;"]);

exports.Title = Title;