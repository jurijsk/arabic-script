import { DomUtils } from './Utils/DomUtils.js';
class LetterMeta {
    index;
    code;
    letter;
    element;
    width;
    constructor(index, code, letter, element, width) {
        this.index = index;
        this.code = code;
        this.letter = letter;
        this.element = element;
        this.width = width;
    }
}
class ArabicLetterMapping {
    letter;
    translit;
    desription;
    constructor(letter, translit, desription) {
        this.letter = letter;
        this.translit = translit;
        this.desription = desription;
    }
}
const ArabicMap = {
    'ا': new ArabicLetterMapping('ا', 'a'),
    'ب': new ArabicLetterMapping('ب', 'b'),
    'ت': new ArabicLetterMapping('ت', 't'),
    'ث': new ArabicLetterMapping('ث', 'th'),
    'ج': new ArabicLetterMapping('ج', 'j'),
    'ح': new ArabicLetterMapping('ح', 'ḥ'),
    'خ': new ArabicLetterMapping('خ', 'kh'),
    'د': new ArabicLetterMapping('د', 'd'),
    'ذ': new ArabicLetterMapping('ذ', 'dh'),
    'ر': new ArabicLetterMapping('ر', 'r'),
    'ز': new ArabicLetterMapping('ز', 'z'),
    'س': new ArabicLetterMapping('س', 's'),
    'ش': new ArabicLetterMapping('ش', 'sh'),
    'ص': new ArabicLetterMapping('ص', 'ṣ'),
    'ض': new ArabicLetterMapping('ض', 'ḍ'),
    'ط': new ArabicLetterMapping('ط', 'ṭ'),
    'ظ': new ArabicLetterMapping('ظ', 'ẓ'),
    'ع': new ArabicLetterMapping('ع', '‘'),
    'غ': new ArabicLetterMapping('غ', 'gh'),
    'ف': new ArabicLetterMapping('ف', 'f'),
    'ق': new ArabicLetterMapping('ق', 'q'),
    'ك': new ArabicLetterMapping('ك', 'k'),
    'ل': new ArabicLetterMapping('ل', 'l'),
    'م': new ArabicLetterMapping('م', 'm'),
    'ن': new ArabicLetterMapping('ن', 'n'),
    'ة': new ArabicLetterMapping('ة', 'h'),
    'و': new ArabicLetterMapping('و', 'w'),
    'ي': new ArabicLetterMapping('ي', 'y'),
    'ً': new ArabicLetterMapping('ً', '', 'an-nunation')
};
class Main {
    updateTransliterationInput(metas) {
        let translit = '';
        for (let i = 0; i < metas.length; i++) {
            let meta = metas[i];
            let transliteration = ArabicMap[meta.letter];
            if (transliteration) {
                if (transliteration.translit) {
                    translit += transliteration.translit;
                }
                else if (transliteration.translit = 'an-nunation') {
                    if (i == metas.push.length - 2) {
                    }
                }
                else {
                    translit += '?';
                }
            }
            else {
                translit += meta.letter;
            }
        }
        let input = this.getTranslitInput();
        input.value = translit;
    }
    getTranslitInput() {
        return document.getElementById("nonArabicInput");
    }
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
            let meta = new LetterMeta(i, element.innerText.charCodeAt(0), element.innerText, element, element.getBoundingClientRect().width);
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
        this.updateTransliterationInput(meta);
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
