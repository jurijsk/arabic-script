import { DomUtils } from './Utils/DomUtils.js';
class Main {
    constructor() {
        DomUtils.docReady(init.bind(this));
        function init() {
            let input = this.mainInput;
            if (!input) {
                console.warn("no input found");
                return;
            }
            input.addEventListener("input", this.onChanged.bind(this));
        }
    }
    onChanged = function onChanged() {
        let input = this.mainInput;
        if (!input) {
            console.warn("no input found");
            return;
        }
        //let children = Array.from(input.childNodes);
        let text = input.innerText;
        let result = new Array();
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            result.push(this.createGlyphElement(char));
        }
        input.replaceChildren(...result);
        // for(let i = 0; i < children.length; i++) {
        // 	const child = children[i];
        // }
    };
    createGlyphElement = function createGlyphElement(content) {
        let element = document.createElement('span');
        element.classList.add('glyph');
        element.innerText = content;
        return element;
    };
    get mainInput() {
        return document.getElementById("mainInput");
    }
}
new Main();
