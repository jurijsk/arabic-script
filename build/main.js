import { DomUtils } from './Utils/DomUtils.js';
class LetterMeta {
    index;
    letter;
    element;
    width;
    constructor(index, letter, element, width) {
        this.index = index;
        this.letter = letter;
        this.element = element;
        this.width = width;
    }
}
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
            this.onChanged();
        }
    }
    constructMeta(elements) {
        let metas = new Array();
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            let meta = new LetterMeta(i, element.innerText, element, element.getBoundingClientRect().width);
            metas.push(meta);
        }
        return metas;
    }
    getIsolatedLettersContainer() {
        return document.getElementById("isolatedLetters");
    }
    updateIsolatedLetters(metas) {
        let container = this.getIsolatedLettersContainer();
        container.textContent = '';
        for (let i = 0; i < metas.length; i++) {
            const meta = metas[i];
            let element = this.createGlyphElement(meta.letter);
            element.style.width = meta.width + 'px';
            container.appendChild(element);
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
        let meta = this.constructMeta(result);
        this.updateIsolatedLetters(meta);
        let last = input.lastChild;
        document.getSelection()?.setBaseAndExtent(last, 1, last, 1);
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
