import { getUserLanguage } from './utils';
import * as events from './events';

events.loadLocalizedContent(getUserLanguage());

const esBtn : HTMLButtonElement = document.getElementById('ES-btn') as HTMLButtonElement;
esBtn.addEventListener('click', () => (events.setESContent()));

const enBtn : HTMLButtonElement = document.getElementById('EN-btn') as HTMLButtonElement;
enBtn.addEventListener('click', () => (events.setENContent()));

const darkBtn : HTMLButtonElement = document.getElementById('light-btn') as HTMLButtonElement;
darkBtn.addEventListener('click', () => (events.toggleDarkMode()));

const esCodeCopyBtn : HTMLButtonElement = document.getElementById('ES-code-copy-btn') as HTMLButtonElement;
esCodeCopyBtn.addEventListener('click', () => (events.copyBtnEv(esCodeCopyBtn.parentElement)));

const enCodeCopyBtn : HTMLButtonElement = document.getElementById('EN-code-copy-btn') as HTMLButtonElement;
enCodeCopyBtn.addEventListener('click', () => (events.copyBtnEv(enCodeCopyBtn.parentElement)));