"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const events = __importStar(require("./events"));
console.log("ello am script");
events.loadLocalizedContent((0, utils_1.getUserLanguage)());
const esBtn = document.getElementById('ES-btn');
esBtn.addEventListener('click', () => (events.setESContent()));
const enBtn = document.getElementById('EN-btn');
enBtn.addEventListener('click', () => (events.setENContent()));
const darkBtn = document.getElementById('light-btn');
darkBtn.addEventListener('click', () => (events.toggleDarkMode()));
const esCodeCopyBtn = document.getElementById('ES-code-copy-btn');
esCodeCopyBtn.addEventListener('click', () => (events.copyBtnEv(esCodeCopyBtn.parentElement)));
const enCodeCopyBtn = document.getElementById('EN-code-copy-btn');
enCodeCopyBtn.addEventListener('click', () => (events.copyBtnEv(enCodeCopyBtn.parentElement)));
