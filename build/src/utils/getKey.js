"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const luxon_1 = require("luxon");
const md5_1 = require("ts-md5/dist/md5");
const login_1 = require("./login");
const getKeyData = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const time = luxon_1.DateTime.now().toFormat('X');
    const format = JSON.parse(time);
    const data = {
        request_token: md5_1.Md5.hashStr(`${format}${md5_1.Md5.hashStr(login_1.Login.secret_key)}`),
        request_time: format,
    };
    return data;
});
exports.default = getKeyData;
//# sourceMappingURL=getKey.js.map