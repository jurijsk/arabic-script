import {DomUtils} from './Utils/DomUtils.js'



class Transtyper {


	getTranslitInput() {
		return document.getElementById("nonArabicInput") as HTMLInputElement;
	}


	onChanged = function onChanged(this: Transtyper) {
		let input = this.getinputRight();
	}

	onActivation = function(this: Transtyper, event: PointerEvent){
		let input = this.getinputRight();

		let target = event.target as HTMLElement;

		if(target != input && !DomUtils.isAncestor(input, target)){
			console.log("focusing inputRight. Target: ", event.target)
			input.focus();
		}
	}

	constructor(){
		DomUtils.docReady(init.bind(this));

		function init(this: Transtyper) {
			let input = this.getinputRight();
			if(!input){
				console.warn("no input found");
				return;
			}
			input.focus();
			input.addEventListener("input", this.onChanged.bind(this));
			this.onChanged();


			document.addEventListener("click", this.onActivation.bind(this));


		}
	}
	private getinputRight() : HTMLElement | null {
		return document.getElementById("inputRight");
	}
}


new Transtyper();

export {}