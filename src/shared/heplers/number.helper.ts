export class NumberHelper {
    /**
     * Ограничивает число определенным интервалом.
     * @param {number} num - Число для ограничения.
     * @param {number|undefined} min - Нижняя граница интервала (необязательный параметр).
     * @param {number|undefined} max - Верхняя граница интервала (необязательный параметр).
     * @returns {number} - Ограниченное число.
     */
    public static clampNumber(
        num: number,
        min: Maybe<number>,
        max: Maybe<number>
    ): number {
        if (min !== undefined) {
            num = Math.max(num, min);
        }
        if (max !== undefined) {
            num = Math.min(num, max);
        }
        return num;
    }

    /**
     * Конвертирует строку в число, если возможно.
     * @param {string|undefined} str - Входная строка для конвертации.
     * @returns {number|undefined} - Если возможно, возвращает число. В противном случае возвращает undefined.
     */
    public static convertToNumber(str: string): Maybe<number> {
        if (str === undefined || str === '') {
            return undefined;
        }
        const num = Number(str);
        return isNaN(num) ? undefined : num;
    }
}
