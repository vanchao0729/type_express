"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var greet = function (who, action) {
    return who + action;
};
app.get('/', function (req, res, next) {
    res.send(greet("Good ", "morning"));
});
app.listen(5000, function () {
    console.log('server running');
});
