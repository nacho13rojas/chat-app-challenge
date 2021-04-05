"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Content = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../theme/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1h693zp-0"
})(["background-color:", ";color:", ";display:flex;flex-direction:column;min-height:100vh;"], _colors.ACCENT, _colors.WHITE);

exports.Container = Container;

const Content = _styledComponents.default.div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1h693zp-1"
})(["align-items:center;border-radius:20px;display:flex;flex:1;flex-direction:column;justify-content:center;"]);

exports.Content = Content;

const Title = _styledComponents.default.h1.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1h693zp-2"
})(["align-self:flex-start;font-size:20px;margin:16px;"]);

exports.Title = Title;