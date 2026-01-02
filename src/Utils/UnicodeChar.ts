class UnicodeChar {
	constructor(public code: number, public char: string, public translit: string, public position: string, public name = char, public desription?: string) {
	}
}

type LetterMap = {
	[key: string]: UnicodeChar;
};

//https://www.unicodepedia.com/groups/arabic/

export const ArabicMap: LetterMap = {
	1575: new UnicodeChar(1575, 'ا', 'a', 'baseline'),
	1576: new UnicodeChar(1576, 'ب', 'b', 'baseline'),
	1577: new UnicodeChar(1577, 'ة', '-a, -t', 'baseline'), //this is not h this is ta-marbuta
	1578: new UnicodeChar(1578, 'ت', 't', 'baseline'),
	1579: new UnicodeChar(1579, 'ث', 'th', 'baseline'),
	1580: new UnicodeChar(1580, 'ج', 'j', 'baseline'),
	1581: new UnicodeChar(1581, 'ح', 'ḥ', 'baseline'),
	1582: new UnicodeChar(1582, 'خ', 'kh', 'baseline'),
	1583: new UnicodeChar(1583, 'د', 'd', 'baseline'),
	1584: new UnicodeChar(1584, 'ذ', 'dh', 'baseline'),
	1585: new UnicodeChar(1585, 'ر', 'r', 'baseline'),
	1586: new UnicodeChar(1586, 'ز', 'z', 'baseline'),
	1587: new UnicodeChar(1587, 'س', 's', 'baseline'),
	1588: new UnicodeChar(1588, 'ش', 'sh', 'baseline'),
	1589: new UnicodeChar(1589, 'ص', 'ṣ', 'baseline'),
	1590: new UnicodeChar(1590, 'ض', 'ḍ', 'baseline'),
	1591: new UnicodeChar(1591, 'ط', 'ṭ', 'baseline'),
	1592: new UnicodeChar(1592, 'ظ', 'ẓ', 'baseline'),
	1593: new UnicodeChar(1593, 'ع', '‘', 'baseline'),
	1594: new UnicodeChar(1594, 'غ', 'gh', 'baseline'),
	1601: new UnicodeChar(1601, 'ف', 'f', 'baseline'),
	1602: new UnicodeChar(1602, 'ق', 'q', 'baseline'),
	1603: new UnicodeChar(1603, 'ك', 'k', 'baseline'),
	1604: new UnicodeChar(1604, 'ل', 'l', 'baseline'),
	1605: new UnicodeChar(1605, 'م', 'm', 'baseline'),
	1606: new UnicodeChar(1606, 'ن', 'n', 'baseline'),
	1608: new UnicodeChar(1608, 'و', 'w', 'baseline'),
	1610: new UnicodeChar(1610, 'ي', 'y', 'baseline'),

	1611: new UnicodeChar(1611, 'ً', 'an', 'sup', 'an-nunation'), //FATHATAN 
	1612: new UnicodeChar(1612, 'ً?', 'un', 'sup', 'un-nunation'), //DAMMATAN
	1613: new UnicodeChar(1613, 'ً?', 'in', 'sup', 'in-nunation'), //KASRATAN

	1614: new UnicodeChar(1614, 'ً?', 'a', 'sub', 'short-vowel-mark'), //FATHA //u+64e

	1615: new UnicodeChar(1615, 'ً?', 'u', 'sup', 'Arabic Small Damma', 'short-vowel-mark'), //DAMMA
	1616: new UnicodeChar(1616, 'ً?', 'i', 'sub', 'Arabic Kasra', 'short-vowel-mark'), //KASRA

	1617: new UnicodeChar(1617, 'ً?', '?', 'sup', '	Arabic Shadda', 'emphasis'), //SHADDA
	1618: new UnicodeChar(1618, 'ً?', '?', 'sup', '	Arabic Sukun', 'marks absence of a vowel'), //SHADDA
	1619: new UnicodeChar(1619, 'ً?', '?', 'sup', '	Arabic Maddah Above', 'marks absence of a vowel'), //SHADDA


	1561: new UnicodeChar(1561, 'ً?', 'a', 'sup', 'Arabic Small Damma'), //DAMMA //u+619 https://www.compart.com/en/unicode/combining/31
};
