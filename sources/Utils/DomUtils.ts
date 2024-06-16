/**
 * Collction of DOM related utility methods
 */
class DomUtilsClass {
	getRenderedText: (text: string) => string;
	replaceNodes: (oldNode: Node, ...newNodes: (Node | string)[]) => void;
	constructor(){
		function ge(id: string) {
			return document.getElementById(id);
		}

		function getRenderedText(text: string){
			const id = 'dom-utils-text-rendered';
			let rendered = ge(id);
			if(!rendered){
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

		function replaceNodes(oldNode: Node, ...newNodes: (Node | string)[]) {
			if(!oldNode.parentElement) {
				throw new Error("oldNode does not have parent");
			}
			if(!newNodes || !newNodes.length) {
				throw new Error("No nodes to insert");
			}
			let parent = oldNode.parentElement;
			var fragment = document.createDocumentFragment()
			fragment.append(...newNodes);
			parent.replaceChild(fragment, oldNode);
		}

		this.replaceNodes = replaceNodes;
		this.getRenderedText = getRenderedText;
	}

	removeCssClass(className: string, elements: Element[]): void;
	removeCssClass(className: string, elements: HTMLCollectionOf<Element>): void;
	removeCssClass(className: string): void;

	removeCssClass(className: string, elements?: Element[] | HTMLCollectionOf<Element>): void {
		if(typeof elements == 'undefined') {
			elements = document.getElementsByClassName(className);
		}
		if(!(elements instanceof Array)) {
			elements = Array.from(elements);
		}
		for(const elem of elements) {
			elem.classList.remove(className);
		}
	}


	docReady(fn: () => void) {
		if(document.readyState === "complete" || document.readyState === "interactive") {
			setTimeout(fn, 1);
		} else {
			document.addEventListener("DOMContentLoaded", () => {
				fn();
				document.removeEventListener("DOMContentLoaded", fn)
			});
		}
	}

	isAncestor(parent: HTMLElement, ancestor: HTMLElement) {
		let current = ancestor.parentElement;
		while(current){
			if(current == parent){
				return true;
			}
			current = current.parentElement;
		}
		return false;
	}
}
export const DomUtils = new DomUtilsClass();