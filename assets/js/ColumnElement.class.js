import { HtmlElement } from "./HtmlElement.class.js";

export class ColumnElement extends HtmlElement {
    /**
     * @var string
     * TD tag content if necessary
     */
    _content = null;

    constructor() {
        super();
        this._elementType = '<td>';
    }

    setContent(content) {
        this._content = content;
        return this;
    }

    getContent() {
        return this._content;
    }

    /**
     * @override HtmlElement::build()
     */
    build() {
        const _element = $(this._elementType);
        if (this._content) {
            _element.html(this._content);
        }
        return _element;
    }
}