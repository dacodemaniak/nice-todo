/**
 * @abstract class HtmlElement
 * Abstract class that generalize HTML components
 */
export class HtmlElement {

    _elementType = null;
    _childrens = new Array();

    addChildren(children) {
        this._childrens.push(children);
        return this;
    }

    build() {
        const _element = $(this._elementType);
        if (this._childrens.length > 0) {
            this._childrens.forEach((children) => {
                _element.append(children.build());
            });
        }

        return _element;
    }
}