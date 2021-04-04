"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scroll = exports.EmptyChatText = exports.EmptyChatContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-14pd8o-0"
})(["background-color:rgba(253,248,246,0.1);border-radius:5px 5px 0px 0px;color:white;height:70vh;width:90vw;margin:0px 16px;overflow-y:'scroll';padding:20px;"]);

exports.Container = Container;

const EmptyChatContainer = _styledComponents.default.div.withConfig({
  displayName: "styles__EmptyChatContainer",
  componentId: "sc-14pd8o-1"
})(["align-items:center;justify-content:center;flex:1;width:100%;display:flex;"]);

exports.EmptyChatContainer = EmptyChatContainer;

const EmptyChatText = _styledComponents.default.p.withConfig({
  displayName: "styles__EmptyChatText",
  componentId: "sc-14pd8o-2"
})(["font-size:16px;"]);

exports.EmptyChatText = EmptyChatText;

const Scroll = _styledComponents.default.div.withConfig({
  displayName: "styles__Scroll",
  componentId: "sc-14pd8o-3"
})(["display:inline-flex;flex-direction:column;height:100%;width:100%;overflow-y:auto;&::-webkit-scrollbar{display:none;}-ms-overflow-style:none;scrollbar-width:none;"]);

exports.Scroll = Scroll;