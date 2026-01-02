<!-- Possible soluttion for the layout using loose grid: https://css-tricks.com/books/greatest-css-tricks/flexible-grids/ -->

<script setup lang="ts">
import { ref } from 'vue';


import { ArabicMap } from '../Utils/UnicodeChar';

defineProps<{
	placeholder: string
	value?: string
}>()




const letters = ref('');//ref('الشَّمْس');
const value = ref('');

const baselineLetters = ref('');
const showPlaceholder = ref(true);

function init() {
	let plainText = letters.value;
	for (let i = 0; i < plainText.length; i++) {
		const arabicLetter = ArabicMap[plainText.charCodeAt(i)];
		if (arabicLetter && arabicLetter.position == 'baseline') {
			baselineLetters.value += String.fromCharCode(arabicLetter.code);
		}
	}
}


init();


const placeholderText = 'Paste something in كتابة عربية, we will help you learn reading it.'

function onInput(payload: Event) {
	const inputPayload = <InputEvent>payload;

	const target = <HTMLElement>inputPayload.target;
	console.log(inputPayload.inputType, "'" + target.textContent + "'");

	showPlaceholder.value = !target.textContent
}

function onPaste(payload: Event) {
	console.log('onpaste', payload);
	payload.preventDefault();
	const pasteEvent = <ClipboardEvent>payload;
	let text = pasteEvent.clipboardData?.getData("text");
	const selection = window.getSelection();

	if (!selection) {
		return;
	}

	debugger;
	selection && selection.deleteFromDocument();

	if (!text) {
		return; //no text to insert, nothing to do here
	}

	if (!selection.focusNode) {
		return;
		//nothing was ever selected in the document
		//not possible since we would not ge this event 
	}
	selection.focusNode.textContent

	selection.focusNode?.textContent


	//letters.value += text || '';
}

function onClick() {
	//console.log('click', payload);
	if (!showPlaceholder.value) {
		return;
	}
	const selection = window.getSelection();
	if (!selection) {
		return;
	}
	console.log(selection);
	selection.setPosition(selection.anchorNode);
}
</script>

<template>
	some text to drag
	<div class="main-input">
		<input type="text" v-model="value" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
			placeholder="Paste something in كتابة عربية, we will help you learn reading it." />
		<div @paste="onPaste" @input="onInput" @clxick="onClick">
			{{ value }}
		</div>

	</div>
</template>

<style scoped>
.main-input {
	display: grid;
	grid-template: 1fr / none;
	width: 100%;
	--text-color: black;
}

.main-input>* {
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	grid-row: 1;
	grid-column: 1;
	padding: 12px;
	line-height: 40px;
	font-size: 32px;

	width: 100%;
	border-radius: 6px;
	border: 1px solid #ccc;
	/* direction: rtl; */
	min-height: 36px;
	min-width: 80dvw;
	cursor: pointer;
	color: var(--text-color);

	&::placeholder {
		display: inline;
		color: #ccc;
		font-style: italic;
		font-size: 80%;
	}

	&>span:hover {
		outline: 2px solid white;
		transition: outline-width 100ms;
		border-radius: 8px;
	}
}

.main-input>div {
	pointer-events: none;
	user-select: none;
}


.main-input>input {
	caret-color: var(--text-color);
	color: red;
	background: transparent;
}

.main-input>input::selection {
	background-color: #f0f0f0;
}
</style>




<!-- 
fix selection when clicking on enty space after the placeholder text

Would use contenteditable="plaintext-only" but it does not work in Firefox -->