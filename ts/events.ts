export function loadLocalizedContent(lang : String) : void {
    if(lang === 'es') {
        document.body.classList.add('body-ES');
        return;
    }
    document.body.classList.add('body-EN');
}

export function setESContent() : void {
    document.body.classList.replace('body-EN', 'body-ES');
}

export function setENContent() : void {
    document.body.classList.replace('body-ES', 'body-EN');
}

export function toggleDarkMode() : void {
    document.body.classList.toggle('body-dark');
}

export function copyBtnEv(parentDiv : HTMLElement | null) : void {
    let txt : string = '';
    (parentDiv != null && parentDiv.textContent != null) ? txt = parentDiv.textContent : txt = '';

    navigator.clipboard.writeText(txt.substring(txt.indexOf('\''), txt.length))
}