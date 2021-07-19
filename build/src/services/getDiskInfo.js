"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiskInfo = void 0;
const tslib_1 = require("tslib");
const getKey_1 = require("../utils/getKey");
const request_1 = require("../utils/request");
const login_1 = require("../utils/login");
const getDiskInfo = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = `${login_1.Login.URL}/system?action=GetDiskInfo`;
    const data = yield getKey_1.default();
    const result = yield request_1.default(url, data);
    return result;
});
exports.getDiskInfo = getDiskInfo;
//# sourceMappingURL=getDiskInfo.js.map