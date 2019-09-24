export class MyDate extends Date {
    _dateSeparator = '-';

    constructor(date = null) {
        if (date) {
            super(date);
        } else {
            super();
        }
    }

    /**
     * @Override toString()
     * @see Date.toString()
     */
    toString() {
        let correctMonth = new Number(this.getMonth() + 1);
        let stringMonth = new String();

        if (correctMonth < 10) {
            stringMonth = '0' + correctMonth;
        } else {
            stringMonth = correctMonth;
        }
        return this.getFullYear() + this._dateSeparator +
            stringMonth + this._dateSeparator +
            this.getDate();
    }
}