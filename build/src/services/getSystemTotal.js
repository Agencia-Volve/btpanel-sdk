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
exports.getSystemTotal = void 0;
const getKey_1 = require("../utils/getKey");
const request_1 = require("../utils/request");
const login_1 = require("../utils/login");
const getSystemTotal = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = `${login_1.Login.URL}/system?action=GetSystemTotal`;
    const data = yield getKey_1.default();
    const result = yield request_1.default(url, data);
    return result;
});
exports.getSystemTotal = getSystemTotal;
