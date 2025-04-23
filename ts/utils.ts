export function getUserLanguage() : string {
    const navLanguage : string | undefined = window.navigator.language;
    return navLanguage ? navLanguage.substring(0, 2) : "";
};