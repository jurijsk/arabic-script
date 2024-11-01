class ArabicAplhabet {
	name: 'arabic'
	alphabet = {
	0x0627: {general: 'ا', isolated: ['ﺍ', 0xFE8D], name: 'ʾalif', initial: null, medial: null, final: ['ﺎ', 0xFE8E]},
	0x0628: {general: 'ب', isolated: ['ﺏ', 0xFE8F], name: 'bāʾ', initial: ['ﺑ', 0xFE91], medial: ['ﺒ', 0xFE92], final: ['ﺐ', 0xFE90]},
	0x062A: {general: 'ت', isolated: ['ﺕ', 0xFE95], name: 'tāʾ', initial: ['ﺗ', 0xFE97], medial: ['ﺘ', 0xFE98], final: ['ﺖ', 0xFE96]},
	0x062B: {general: 'ث', isolated: ['ﺙ', 0xFE99], name: 'ṯāʾ', initial: ['ﺛ', 0xFE9B], medial: ['ﺜ', 0xFE9C], final: ['ﺚ', 0xFE9A]},
	0x062C: {general: 'ج', isolated: ['ﺝ', 0xFE9D], name: 'ǧīm', initial: ['ﺟ', 0xFE9F], medial: ['ﺠ', 0xFEA0], final: ['ﺞ', 0xFE9E]},
	0x062D: {general: 'ح', isolated: ['ﺡ', 0xFEA1], name: 'ḥāʾ', initial: ['ﺣ', 0xFEA3], medial: ['ﺤ', 0xFEA4], final: ['ﺢ', 0xFEA2]},
	0x062E: {general: 'خ', isolated: ['ﺥ', 0xFEA5], name: 'ḫāʾ', initial: ['ﺧ', 0xFEA7], medial: ['ﺨ', 0xFEA8], final: ['ﺦ', 0xFEA6]},
	0x062F: {general: 'د', isolated: ['ﺩ', 0xFEA9], name: 'dāl', initial: null, medial: null, final: ['ﺪ', 0xFEAA]},
	0x0630: {general: 'ذ', isolated: ['ﺫ', 0xFEAB], name: 'ḏāl', initial: null, medial: null, final: ['ﺬ', 0xFEAC]},
	0x0631: {general: 'ر', isolated: ['ﺭ', 0xFEAD], name: 'rāʾ', initial: null, medial: null, final: ['ﺮ', 0xFEAE]},
	0x0632: {general: 'ز', isolated: ['ﺯ', 0xFEAF], name: 'zayn/zāy', initial: null, medial: null, final: ['ﺰ', 0xFEB0]},
	0x0633: {general: 'س', isolated: ['ﺱ', 0xFEB1], name: 'sīn', initial: ['ﺳ', 0xFEB3], medial: ['ﺴ', 0xFEB4], final: ['ﺲ', 0xFEB2]},
	0x0634: {general: 'ش', isolated: ['ﺵ', 0xFEB5], name: 'šīn', initial: ['ﺷ', 0xFEB7], medial: ['ﺸ', 0xFEB8], final: ['ﺶ', 0xFEB6]},
	0x0635: {general: 'ص', isolated: ['ﺹ', 0xFEB9], name: 'ṣād', initial: ['ﺻ', 0xFEBB], medial: ['ﺼ', 0xFEBC], final: ['ﺺ', 0xFEBA]},
	0x0636: {general: 'ض', isolated: ['ﺽ', 0xFEBD], name: 'ḍād', initial: ['ﺿ', 0xFEBF], medial: ['ﻀ', 0xFEC0], final: ['ﺾ', 0xFEBE]},
	0x0637: {general: 'ط', isolated: ['ﻁ', 0xFEC1], name: 'ṭāʾ', initial: ['ﻃ', 0xFEC3], medial: ['ﻄ', 0xFEC4], final: ['ﻂ', 0xFEC2]},
	0x0638: {general: 'ظ', isolated: ['ﻅ', 0xFEC5], name: 'ẓāʾ', initial: ['ﻇ', 0xFEC7], medial: ['ﻈ', 0xFEC8], final: ['ﻆ', 0xFEC6]},
	0x0639: {general: 'ع', isolated: ['ﻉ', 0xFEC9], name: 'ʿayn', initial: ['ﻋ', 0xFECB], medial: ['ﻌ', 0xFECC], final: ['ﻊ', 0xFECA]},
	0x063A: {general: 'غ', isolated: ['ﻍ', 0xFECD], name: 'ġayn', initial: ['ﻏ', 0xFECF], medial: ['ﻐ', 0xFED0], final: ['ﻎ', 0xFECE]},
	0x0641: {general: 'ف', isolated: ['ﻑ', 0xFED1], name: 'fāʾ', initial: ['ﻓ', 0xFED3], medial: ['ﻔ', 0xFED4], final: ['ﻒ', 0xFED2]},
	0x0642: {general: 'ق', isolated: ['ﻕ', 0xFED5], name: 'qāf', initial: ['ﻗ', 0xFED7], medial: ['ﻘ', 0xFED8], final: ['ﻖ', 0xFED6]},
	0x0643: {general: 'ك', isolated: ['ﻙ', 0xFED9], name: 'kāf', initial: ['ﻛ', 0xFEDB], medial: ['ﻜ', 0xFEDC], final: ['ﻚ', 0xFEDA]},
	0x0644: {general: 'ل', isolated: ['ﻝ', 0xFEDD], name: 'lām', initial: ['ﻟ', 0xFEDF], medial: ['ﻠ', 0xFEE0], final: ['ﻞ', 0xFEDE]},
	0x0645: {general: 'م', isolated: ['ﻡ', 0xFEE1], name: 'mīm', initial: ['ﻣ', 0xFEE3], medial: ['ﻤ', 0xFEE4], final: ['ﻢ', 0xFEE2]},
	0x0646: {general: 'ن', isolated: ['ﻥ', 0xFEE5], name: 'nūn', initial: ['ﻧ', 0xFEE7], medial: ['ﻨ', 0xFEE8], final: ['ﻦ', 0xFEE6]},
	0x0647: {general: 'ه', isolated: ['ﻩ', 0xFEE9], name: 'hāʾ', initial: ['ﻫ', 0xFEEB], medial: ['ﻬ', 0xFEEC], final: ['ﻪ', 0xFEEA]},
	0x0648: {general: 'و', isolated: ['ﻭ', 0xFEED], name: 'wāw', initial: null, medial: null, final: ['ﻮ', 0xFEEE]},
	0x064A: {general: 'ي', isolated: ['ﻱ', 0xFEF1], name: 'yāʾ', initial: ['ﻳ', 0xFEF3], medial: ['ﻴ', 0xFEF4], final: ['ﻲ', 0xFEF2]},
	0x0622: {general: 'آ', isolated: ['ﺁ', 0xFE81], name: 'ʾalif maddah', initial: null, medial: null, final: ['ﺂ', 0xFE82]},
	0x0629: {general: 'ة', isolated: ['ﺓ', 0xFE93], name: 'Tāʾ marbūṭah', initial: null, medial: null, final: ['ﺔ', 0xFE94]},
	0x0649: {general: 'ى', isolated: ['ﻯ', 0xFEEF], name: 'ʾalif maqṣūrah', initial: null, medial: null, final: ['ﻰ', 0xFEF0]}
	}
}
