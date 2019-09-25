import { HtmlElement } from "./HtmlElement.class";

export class ColumnElement extends HtmlElement {
    constructor() {
        this._elementType = '<td>';
    }
}