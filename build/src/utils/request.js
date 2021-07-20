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
const axios_1 = require("axios");
const stringify = require('qs-stringify');
const httpRequest = (url, data) => __awaiter(void 0, void 0, void 0, function* () {
    const dataPost = yield stringify(data);
    const config = {
        method: 'POST',
        url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: dataPost,
    };
    const response = yield axios_1.default(config);
    const json = yield response.data;
    return json;
});
exports.default = httpRequest;
