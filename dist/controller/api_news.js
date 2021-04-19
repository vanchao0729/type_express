"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var api_news = express_1.default.Router();
api_news.get('/', function (req, res, next) {
    res.send('News api here');
});
api_news.get('/info', function (req, res, next) {
    res.send('News info api here');
});
module.exports = api_news;
