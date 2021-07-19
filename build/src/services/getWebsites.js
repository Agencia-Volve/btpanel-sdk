"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListPHP = exports.getWebsiteClassification = exports.getListOfWebsites = void 0;
const tslib_1 = require("tslib");
const getKey_1 = require("../utils/getKey");
const request_1 = require("../utils/request");
const login_1 = require("../utils/login");
const getListOfWebsites = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = `${login_1.Login.URL}/data?action=getData&table=sites`;
    const data = yield getKey_1.default();
    const result = yield request_1.default(url, data);
    return result;
});
exports.getListOfWebsites = getListOfWebsites;
const getWebsiteClassification = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = `${login_1.Login.URL}/site?action=get_site_types`;
    const data = yield getKey_1.default();
    const result = yield request_1.default(url, data);
    return result;
});
exports.getWebsiteClassification = getWebsiteClassification;
const getListPHP = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = `${login_1.Login.URL}/site?action=GetPHPVersion`;
    const data = yield getKey_1.default();
    const result = yield request_1.default(url, data);
    return result;
});
exports.getListPHP = getListPHP;
//# sourceMappingURL=getWebsites.js.map