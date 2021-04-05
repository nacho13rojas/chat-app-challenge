"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scroll = exports.EmptyChatText = exports.EmptyChatContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../theme/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-14pd8o-0"
})(["background-color:", ";border-radius:4px 4px 0px 0px;color:", ";height:70vh;margin:0px 16px;overflow-y:'scroll';padding:20px;width:90vw;"], _colors.PRIMARY, _colors.WHITE);

exports.Container = Container;

const EmptyChatContainer = _styledComponents.default.div.withConfig({
  displayName: "styles__EmptyChatContainer",
  componentId: "sc-14pd8o-1"
})(["align-items:center;display:flex;flex:1;justify-content:center;width:100%;"]);

exports.EmptyChatContainer = EmptyChatContainer;

const EmptyChatText = _styledComponents.default.p.withConfig({
  displayName: "styles__EmptyChatText",
  componentId: "sc-14pd8o-2"
})(["font-size:16px;"]);

exports.EmptyChatText = EmptyChatText;

const Scroll = _styledComponents.default.div.withConfig({
  displayName: "styles__Scroll",
  componentId: "sc-14pd8o-3"
})(["display:inline-flex;flex-direction:column;height:100%;overflow-y:auto;width:100%;::-webkit-scrollbar{width:24px;}::-webkit-scrollbar-track{border:solid 8px transparent;border-radius:24px;box-shadow:inset 0 0 24px 24px ", ";}::-webkit-scrollbar-thumb{border:solid 8px transparent;border-radius:24px;box-shadow:inset 0 0 14px 14px ", ";}"], _colors.PRIMARY, _colors.SECONDARY);

exports.Scroll = Scroll;