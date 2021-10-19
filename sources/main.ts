import {DomUtils} from './Utils/DomUtils.js'


class LetterMeta {
	constructor(public index: number, public letter: string, public element: HTMLElement, public width: number) {

	}
}

class Main {
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
			let meta = new LetterMeta(i, element.innerText, element, element.getBoundingClientRect().width);
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