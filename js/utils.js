"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserLanguage = void 0;
function getUserLanguage() {
    const navLanguage = window.navigator.language;
    return navLanguage ? navLanguage.substring(0, 2) : "";
}
exports.getUserLanguage = getUserLanguage;
;
