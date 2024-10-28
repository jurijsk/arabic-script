import {DomUtils} from './Utils/DomUtils.js'


class LetterMeta {
	constructor(public index: number, public code: number, public letter: string, public element: HTMLElement, public width: number) {
	}
}

class ArabicSymbolMapping {
	public translit: string
	public type: string;
	public desription?: string
	constructor(public code: number, public letter: string, params: {translit: string, type?: string, desription?: string, forms: {isolated: string, initial: string, medial: string, final: string}}) {
			this.type = params.type ?? 'letter';
			this.translit = params.translit;
			this.desription = params.desription;

	}
}
type LetterMap = {
	[key: string]: ArabicSymbolMapping }
const ArabicMap: LetterMap = {
	1575: new ArabicSymbolMapping(1575, 'ا', {translit: 'a', forms: {isolated: ['ﺍ', 0xFE8D], initial: 'ا', medial: 'ا', final: 'ا'}}),
	1576: new ArabicSymbolMapping(1576, 'ب', {translit: 'b'}),
	1578: new ArabicSymbolMapping(1578, 'ت', {translit: 't'}),
	1579: new ArabicSymbolMapping(1579, 'ث', {translit: 'th'}),
	1580: new ArabicSymbolMapping(1580, 'ج', {translit: 'j'}),
	1581: new ArabicSymbolMapping(1581, 'ح', {translit: 'ḥ'}),
	1582: new ArabicSymbolMapping(1582, 'خ', {translit: 'kh'}),
	1583: new ArabicSymbolMapping(1583, 'د', {translit: 'd'}),
	1584: new ArabicSymbolMapping(1584, 'ذ', {translit: 'dh'}),
	1585: new ArabicSymbolMapping(1585, 'ر', {translit: 'r'}),
	1586: new ArabicSymbolMapping(1586, 'ز', {translit: 'z'}),
	1587: new ArabicSymbolMapping(1587, 'س', {translit: 's'}),
	1588: new ArabicSymbolMapping(1588, 'ش', {translit: 'sh'}),
	1589: new ArabicSymbolMapping(1589, 'ص', {translit: 'ṣ'}),
	1590: new ArabicSymbolMapping(1590, 'ض', {translit: 'ḍ'}),
	1591: new ArabicSymbolMapping(1591, 'ط', {translit: 'ṭ'}),
	1592: new ArabicSymbolMapping(1592, 'ظ', {translit: 'ẓ'}),
	1593: new ArabicSymbolMapping(1593, 'ع', {translit: '‘'}),
	1594: new ArabicSymbolMapping(1594, 'غ', {translit: 'gh'}),
	1601: new ArabicSymbolMapping(1601, 'ف', {translit: 'f'}),
	1602: new ArabicSymbolMapping(1602, 'ق', {translit: 'q'}),
	1603: new ArabicSymbolMapping(1603, 'ك', {translit: 'k'}),
	1604: new ArabicSymbolMapping(1604, 'ل', {translit: 'l'}),
	1605: new ArabicSymbolMapping(1605, 'م', {translit: 'm'}),
	1606: new ArabicSymbolMapping(1606, 'ن', {translit: 'n'}),
	1577: new ArabicSymbolMapping(1577, 'ة', {translit: 'h'}),
	1608: new ArabicSymbolMapping(1608, 'و', {translit: 'w'}),

	1610: new ArabicSymbolMapping(1610, 'ي', {translit: 'y'}),
	
	1611: new ArabicSymbolMapping(1611, 'ً', {translit: 'an', type: 'nunation', desription: 'an-nunation'}), //FATHATAN
	1612: new ArabicSymbolMapping(1612, 'ً?', {translit: 'un', type: 'nunation', desription: 'un-nunation'}), //DAMMATAN
	1613: new ArabicSymbolMapping(1613, 'ً?', {translit: 'in', type:  'nunation', desription: 'in-nunation'}), //KASRATAN
	
	1614: new ArabicSymbolMapping(1614, 'ً?', {translit:'a',  type: 'short-vowel-mark' }), //FATHA
	1615: new ArabicSymbolMapping(1615, 'ً?', {translit:'u', type: 'short-vowel-mark' }), //DAMMA
	1616: new ArabicSymbolMapping(1616, 'ً?', {translit:'i', type: 'short-vowel-mark'}), //KASRA
};

const ArabicLigatresInitial = {
	1575: new ArabicSymbolMapping(1575, 'ا', {translit: 'a'}),
	1576: new ArabicSymbolMapping(1576, 'ب', {translit: 'b'}),
	1578: new ArabicSymbolMapping(1578, 'ت', {translit: 't'}),
	1579: new ArabicSymbolMapping(1579, 'ث', {translit: 'th'}),
	1580: new ArabicSymbolMapping(1580, 'ج', {translit: 'j'}),
	1581: new ArabicSymbolMapping(1581, 'ح', {translit: 'ḥ'}),
	1582: new ArabicSymbolMapping(1582, 'خ', {translit: 'kh'}),
	1583: new ArabicSymbolMapping(1583, 'د', {translit: 'd'}),
	1584: new ArabicSymbolMapping(1584, 'ذ', {translit: 'dh'}),
	1585: new ArabicSymbolMapping(1585, 'ر', {translit: 'r'}),
	1586: new ArabicSymbolMapping(1586, 'ز', {translit: 'z'}),
	1587: new ArabicSymbolMapping(1587, 'س', {translit: 's'}),
	1588: new ArabicSymbolMapping(1588, 'ش', {translit: 'sh'}),
	1589: new ArabicSymbolMapping(1589, 'ص', {translit: 'ṣ'}),
	1590: new ArabicSymbolMapping(1590, 'ض', {translit: 'ḍ'}),
	1591: new ArabicSymbolMapping(1591, 'ط', {translit: 'ṭ'}),
	1592: new ArabicSymbolMapping(1592, 'ظ', {translit: 'ẓ'}),
	1593: new ArabicSymbolMapping(1593, 'ع', {translit: '‘'}),
	1594: new ArabicSymbolMapping(1594, 'غ', {translit: 'gh'}),
	1601: new ArabicSymbolMapping(1601, 'ف', {translit: 'f'}),
	1602: new ArabicSymbolMapping(1602, 'ق', {translit: 'q'}),
	1603: new ArabicSymbolMapping(1603, 'ك', {translit: 'k'}),
	1604: new ArabicSymbolMapping(1604, 'ل', {translit: 'l'}),
	1605: new ArabicSymbolMapping(1605, 'م', {translit: 'm'}),
	1606: new ArabicSymbolMapping(1606, 'ن', {translit: 'n'}),
	1577: new ArabicSymbolMapping(1577, 'ة', {translit: 'h'}),
	1608: new ArabicSymbolMapping(1608, 'و', {translit: 'w'}),
}


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