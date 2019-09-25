export class Todo {
    _title = null;
    _beginDate = null;
    _endDate = null;

    constructor() {}

    setTitle(title) {
        this._title = title.trim();
        return this;
    }

    getTitle() {
        return this._title.toUpperCase();
    }

    setBeginDate(date) {
        this._beginDate = new Date(date);
        return this;
    }

    getBeginDate() {
        return this._beginDate;
    }

    setEndDate(date) {
        this._endDate = new Date(date);
        return this;
    }

    getEndDate() {
        return this._endDate;
    }
}