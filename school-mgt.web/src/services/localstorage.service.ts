import * as utilities from "./../common/utilities";

export function getLocalStorageString(key: string): any {
    return window.localStorage.getItem(key);
}

export function setLocalStorageObject(key: string, value: object): void {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function setLocalStorageString(key: string, value: string): void {
    window.localStorage.setItem(key, value);
}

export function getLocalStorageObject(key: string): any {
    const temp: any = window.localStorage.getItem(key);
    if (utilities.isNull(temp)) {
        return null;
    }
    return JSON.parse(temp);
}

export function setSessionStorageObject(key: string, value: object): void {
    window.sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionStorageObject(key: string): any {
    const object: any = window.sessionStorage.getItem(key);
    if (utilities.isNull(object)) {
        return null;
    }
    return JSON.parse(object);
}

export function clearLocalStorage() {
    window.localStorage.clear();
}