/**
 * Collction of DOM related utility methods
 */
class DomUtilsClass {
    getRenderedText;
    replaceNodes;
    constructor() {
        function ge(id) {
            return document.getElementById(id);
        }
        function getRenderedText(text) {
            const id = 'dom-utils-text-rendered';
            let rendered = ge(id);
            if (!rendered) {
                rendered = document.createElement('span');
                rendered.id = id;
                rendered.style.position = 'fixed';
                rendered.style.left = '-9999px';
                rendered.style.width = '0';
                rendered.style.height = '0';
                document.body.appendChild(rendered);
            }
            rendered.innerText = text;
            let renderedText = rendered.innerText;
            rendered.innerText = '';
            return renderedText;
        }
        function replaceNodes(oldNode, ...newNodes) {
            if (!oldNode.parentElement) {
                throw new Error("oldNode does not have parent");
            }
            if (!newNodes || !newNodes.length) {
                throw new Error("No nodes to insert");
            }
            let parent = oldNode.parentElement;
            var fragment = document.createDocumentFragment();
            fragment.append(...newNodes);
            parent.replaceChild(fragment, oldNode);
        }
        this.replaceNodes = replaceNodes;
        this.getRenderedText = getRenderedText;
    }
    removeCssClass(className, elements) {
        if (typeof elements == 'undefined') {
            elements = document.getElementsByClassName(className);
        }
        if (!(elements instanceof Array)) {
            elements = Array.from(elements);
        }
        for (const elem of elements) {
            elem.classList.remove(className);
        }
    }
    docReady(fn) {
        if (document.readyState === "complete" || document.readyState === "interactive") {
            setTimeout(fn, 1);
        }
        else {
            document.addEventListener("DOMContentLoaded", () => {
                fn();
                document.removeEventListener("DOMContentLoaded", fn);
            });
        }
    }
}
export const DomUtils = new DomUtilsClass();
