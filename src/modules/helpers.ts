// CFG
import { CONFIG } from '../../config';

class Helpers {
    /** Log: message
     * Takes a message and returns a string that represents the moment this log was created.
     * This includes a few characteristics to help filter logs from the application in the dev tools filter.
     * @param message: string
     * @example
     * ```ts
     * const {Log} = Help;
     * const data = ['a'];
     * console.log(Log('Data: '), data); // > #iwata 2024-04-18-16:03:19: Data: ['a']
     * ```
     * @returns string
     */
    public static Log(message: string): string {
        const now = new Date();
        const { year, month, day, hours, minutes, seconds, milliseconds } = {
            year: now.getFullYear(),
            month: String(now.getMonth() + 1).padStart(2, '0'),
            day: String(now.getDate()).padStart(2, '0'),
            hours: String(now.getHours()).padStart(2, '0'),
            minutes: String(now.getMinutes()).padStart(2, '0'),
            seconds: String(now.getSeconds()).padStart(2, '0'),
            milliseconds: String(now.getMilliseconds()).padStart(4, '0'),
        };
        const timestamp = `${year}-${month}-${day}-${hours}:${minutes}:${seconds}:${milliseconds}`;
        return `#${CONFIG.APP_UUID} ${timestamp}: ${message}`;
    }

    public static getRandomValueFromArray<T>(array: T[]): number {
        if (array.length === 0) {
            throw Error('provided array was empty.');
        }

        const randomIndex = Math.floor(Math.random() * array.length);
        //return array[randomIndex];
        return randomIndex;
    }
}

export { Helpers as Help };
