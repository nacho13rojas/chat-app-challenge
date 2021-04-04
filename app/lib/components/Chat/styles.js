"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scroll = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-14pd8o-0"
})(["background-color:rgba(253,248,246,0.1);border-radius:5px;color:white;height:50vh;overflow-y:'scroll';padding:20px;width:90vw;"]);

exports.Container = Container;

const Scroll = _styledComponents.default.div.withConfig({
  displayName: "styles__Scroll",
  componentId: "sc-14pd8o-1"
})(["display:inline-flex;flex-direction:column;height:100%;width:100%;margin:0em;overflow-y:auto;&::-webkit-scrollbar{display:none;}-ms-overflow-style:none;scrollbar-width:none;"]);

exports.Scroll = Scroll;