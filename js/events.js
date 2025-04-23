"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyBtnEv = exports.toggleDarkMode = exports.setENContent = exports.setESContent = exports.loadLocalizedContent = void 0;
function loadLocalizedContent(lang) {
    if (lang === 'es') {
        document.body.classList.add('body-ES');
        return;
    }
    document.body.classList.add('body-EN');
}
exports.loadLocalizedContent = loadLocalizedContent;
function setESContent() {
    document.body.classList.replace('body-EN', 'body-ES');
}
exports.setESContent = setESContent;
function setENContent() {
    document.body.classList.replace('body-ES', 'body-EN');
}
exports.setENContent = setENContent;
function toggleDarkMode() {
    document.body.classList.toggle('body-dark');
}
exports.toggleDarkMode = toggleDarkMode;
function copyBtnEv(parentDiv) {
    let txt = '';
    (parentDiv != null && parentDiv.textContent != null) ? txt = parentDiv.textContent : txt = '';
    navigator.clipboard.writeText(txt.substring(txt.indexOf('\''), txt.length));
}
exports.copyBtnEv = copyBtnEv;
