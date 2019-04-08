import * as  moment from 'moment';

export function objectToParams(object: any): string {
    return Object.keys(object).map((key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`
    ).join('&');
}

export function isEmpty(item: any) {
    return isNull(item) || item.length === 0 || item === '' || item === 0;
}

export function isEmptyWithTrim(item: any) {
    return isNull(item) || item.length === 0 || item.trim() === '';
}

export function isNull(item: any) {
    return item === undefined || item === null;
}

export function stringToDateObject(str: string, format: string = 'MM/DD/YYYY'): any {
    if (isEmpty(str)) {
        return null;
    }
    const temp = moment(str, format);
    return { year: temp.year(), month: +temp.format('MM'), day: +temp.format('DD') };
}

export function dateToDateObject(date: Date): any {
    if (isEmpty(date)) {
        return null;
    }
    const temp = moment(date);
    return { year: temp.year(), month: +temp.format('MM'), day: +temp.format('DD') };
}
