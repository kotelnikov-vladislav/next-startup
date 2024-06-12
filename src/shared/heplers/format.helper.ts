export class FormatHelper {
    /**
     * Форматирование денег в рублевом стиле
     * */
    public static formatCurrency(currency: number): string {
        return currency.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ') + ' ₽';
    }
}
