import {DomUtils} from './Utils/DomUtils.js'


class LetterMeta {
	constructor(public index: number, public code: number, public letter: string, public element: HTMLElement, public width: number) {
	}
}

class ArabicLetterMapping {
	constructor(public letter: string, public translit: string, public desription?: string){

	}
}
type LetterMap = {
	[key: string]: ArabicLetterMapping }
const ArabicMap: LetterMap = {
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
	updateTransliterationInput(metas: LetterMeta[]) {
		
		let translit = '';

		for(let i = 0; i < metas.length; i++) {
			let meta = metas[i];
			let transliteration = ArabicMap[meta.letter];
			if(transliteration){
				if(transliteration.translit) {
					translit += transliteration.translit;
				}else if (transliteration.translit = 'an-nunation') {
					if(i == metas.push.length - 2 ){

					}
				} else {
					translit += '?';
				}
			} else {
				translit += meta.letter;
			}
			
		}
		let input = this.getTranslitInput();
		input.value = translit;
	}

	getTranslitInput() {
		return document.getElementById("nonArabicInput") as HTMLInputElement;
	}



	constructor(){
		DomUtils.docReady(init.bind(this));

		function init(this:Main) {
			let input = this.mainInput;
			if(!input){
				console.warn("no input found");
				return;
			}
			input.addEventListener("input", this.onChanged.bind(this));
			this.onChanged();
		}
	}

	constructMeta(elements: HTMLElement[]) {
		let metas = new Array<LetterMeta>();

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

	updateIsolatedLetters(metas: LetterMeta[]) {
		let container = this.getIsolatedLettersContainer() as HTMLElement;
		container.textContent = '';
		for (let i = 0; i < metas.length; i++) {
			const meta = metas[i];
			let element = this.createGlyphElement(meta.letter);
			element.style.width = meta.width + 'px';
			container.appendChild(element);
		}
	}

	onChanged = function onChanged(this: Main) {
		let input = this.mainInput;
		if(!input) {
			console.warn("no input found");
			return;
		}
		//let children = Array.from(input.childNodes);

		let text = input.innerText;
		
		let result = new Array<HTMLElement>();
		for (let i = 0; i < text.length; i++) {
			const char = text[i];
			result.push(this.createGlyphElement(char));
		}
		input.replaceChildren(...result);

		let meta = this.constructMeta(result);

		this.updateIsolatedLetters(meta);
		this.updateTransliterationInput(meta);

		let last = input.lastChild as Node;
		document.getSelection()?.setBaseAndExtent(last, 1, last, 1);

		// for(let i = 0; i < children.length; i++) {
		// 	const child = children[i];
			
		// }
	}

	createGlyphElement = function createGlyphElement(content: string) {
		let element = document.createElement('span');
		element.classList.add('glyph');
		element.innerText = content;
		return element;
	}


	private get mainInput() : HTMLElement | null {
		return document.getElementById("mainInput");
	}
	
	

}


new Main();

export {}