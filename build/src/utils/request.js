"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = require("axios");
const stringify = require('qs-stringify');
const httpRequest = (url, data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
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
//# sourceMappingURL=request.js.map