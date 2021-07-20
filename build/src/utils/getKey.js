"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const md5_1 = require("ts-md5/dist/md5");
const login_1 = require("./login");
const getKeyData = () => __awaiter(void 0, void 0, void 0, function* () {
    const time = luxon_1.DateTime.now().toFormat('X');
    const format = JSON.parse(time);
    const data = {
        request_token: md5_1.Md5.hashStr(`${format}${md5_1.Md5.hashStr(login_1.Login.secret_key)}`),
        request_time: format,
    };
    return data;
});
exports.default = getKeyData;
