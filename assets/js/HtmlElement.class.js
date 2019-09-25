export class HtmlElement {
    _elementType = null;
    _childrens = new Array();

    addChildren(children) {
        this._childrens.push(children);
        return this;
    }

    build() {
        const _element = $(this._elementType);
        if (this._childrens.length) {
            this._childrens.forEach((children) => {
                _element.append(children);
            })
        }

        return _element;
    }
}