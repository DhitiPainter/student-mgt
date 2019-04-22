export function getNamesAndValues<T extends number | string>(e: any) {
    return getNames(e).map(n => ({ name: n, value: e[n] as T }));
}

export function getNames(e: any) {
    return Object.keys(e).filter(k => typeof e[k] === 'number') as string[];
}