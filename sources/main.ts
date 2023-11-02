import {DomUtils} from './Utils/DomUtils.js'


class LetterMeta {
	constructor(public index: number, public code: number, public letter: string, public element: HTMLElement, public width: number) {
	}
}

class ArabicLetterMapping {
	constructor(public code: number, public letter: string, public translit: string, public type = letter, public desription?: string){

	}
}
type LetterMap = {
	[key: string]: ArabicLetterMapping }
const ArabicMap: LetterMap = {
	1575: new ArabicLetterMapping(1575, 'ا', 'a'),
	1576: new ArabicLetterMapping(1576, 'ب', 'b'),
	1578: new ArabicLetterMapping(1578, 'ت', 't'),
	1579: new ArabicLetterMapping(1579, 'ث', 'th'),
	1580: new ArabicLetterMapping(1580, 'ج', 'j'),
	1581: new ArabicLetterMapping(1581, 'ح', 'ḥ'),
	1582: new ArabicLetterMapping(1582, 'خ', 'kh'),
	1583: new ArabicLetterMapping(1583, 'د', 'd'),
	1584: new ArabicLetterMapping(1584, 'ذ', 'dh'),
	1585: new ArabicLetterMapping(1585, 'ر', 'r'),
	1586: new ArabicLetterMapping(1586, 'ز', 'z'),
	1587: new ArabicLetterMapping(1587, 'س', 's'),
	1588: new ArabicLetterMapping(1588, 'ش', 'sh'),
	1589: new ArabicLetterMapping(1589, 'ص', 'ṣ'),
	1590: new ArabicLetterMapping(1590, 'ض', 'ḍ'),
	1591: new ArabicLetterMapping(1591, 'ط', 'ṭ'),
	1592: new ArabicLetterMapping(1592, 'ظ', 'ẓ'),
	1593: new ArabicLetterMapping(1593, 'ع', '‘'),
	1594: new ArabicLetterMapping(1594, 'غ', 'gh'),
	1601: new ArabicLetterMapping(1601, 'ف', 'f'),
	1602: new ArabicLetterMapping(1602, 'ق', 'q'),
	1603: new ArabicLetterMapping(1603, 'ك', 'k'),
	1604: new ArabicLetterMapping(1604, 'ل', 'l'),
	1605: new ArabicLetterMapping(1605, 'م', 'm'),
	1606: new ArabicLetterMapping(1606, 'ن', 'n'),
	1577: new ArabicLetterMapping(1577, 'ة', 'h'),
	1608: new ArabicLetterMapping(1608, 'و', 'w'),

	1610: new ArabicLetterMapping(1610, 'ي', 'y'),
	
	1611: new ArabicLetterMapping(1611, 'ً', 'an', 'nunation', 'an-nunation'), //FATHATAN
	1612: new ArabicLetterMapping(1612, 'ً?', 'un', 'nunation', 'un-nunation'), //DAMMATAN
	1613: new ArabicLetterMapping(1613, 'ً?', 'in', 'nunation', 'in-nunation'), //KASRATAN
	
	1614: new ArabicLetterMapping(1614, 'ً?', 'a', 'short-vowel-mark'), //FATHA
	1615: new ArabicLetterMapping(1615, 'ً?', 'u', 'short-vowel-mark'), //DAMMA
	1616: new ArabicLetterMapping(1616, 'ً?', 'i', 'short-vowel-mark'), //KASRA
};


for(const key in ArabicMap) {
	if(Object.hasOwnProperty.call(ArabicMap, key)) {
		const element = ArabicMap[key];
		const code = element.letter.charCodeAt(0);
		console.log(`${code}: new ArabicLetterMapping(${code}, '${element.letter}', '${element.translit}')`);
	}
}

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