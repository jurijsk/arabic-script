function AtStart(i, text) {
  return i == 0 || text.charAt(i - 1) == " ";
}

function AtEnd(i, text) {
  return i == text.length - 1 || text.charAt(i + 1) == " ";
}

function PrevChar(i, text) {
  if (AtStart(i, text)) {
    return "";
  }
  return text.charAt(i - 1);
}

function NextChar(i, text) {
  if (AtEnd(i, text)) {
    return "";
  }
  return text.charAt(i + 1);
}

function DisplayEnglish(text) {
  var englishText = [""];
  for (var i = 0; i < text.length; i++) {
    var arabicLetter = text.charAt(i);
    var englishLetter = "";
    if (arabicLetter == ALEF) {
      englishLetter = "|A"; // a with bar on top
    } else if (arabicLetter == BEH) {
      englishLetter = "B";
    } else if (arabicLetter == TEH) {
      englishLetter = "T";
    } else if (arabicLetter == THEH) {
      englishLetter = "TH"; // t with bar on bottom
    } else if (arabicLetter == JEEM) {
      englishLetter = "G|J"; // g with down-pointing carot on top
    } else if (arabicLetter == HAH) {
      englishLetter = "H"; // h with dot on bottom
    } else if (arabicLetter == KHAH) {
      englishLetter = "KH"; // h with semicircle on bottom
    } else if (arabicLetter == DAL) {
      englishLetter = "D"; // d with bar on bottom
    } else if (arabicLetter == THAL) {
      englishLetter = "D|DH";
    } else if (arabicLetter == REH) {
      englishLetter = "R";
    } else if (arabicLetter == ZAIN) {
      englishLetter = "Z";
    } else if (arabicLetter == SEEN) {
      englishLetter = "S";
    } else if (arabicLetter == SHEEN) {
      englishLetter = "SH"; // s with down-pointing carrot on top
    } else if (arabicLetter == SAD) {
      englishLetter = "S"; // s with dot on bottom
    } else if (arabicLetter == DAD) {
      englishLetter = "D"; // d with dot on bottom
    } else if (arabicLetter == TAH) {
      englishLetter = "T";
    } else if (arabicLetter == ZAH) {
      englishLetter = "Z"; // z with dot on bottom
    } else if (arabicLetter == AIN) {
      englishLetter = "";
    } else if (arabicLetter == GHAIN) {
      englishLetter = "G|GH"; // g with dot on top
    } else if (arabicLetter == FEH) {
      englishLetter = "F";
    } else if (arabicLetter == QAF) {
      englishLetter = "Q";
    } else if (arabicLetter == KAF) {
      englishLetter = "K";
    } else if (arabicLetter == LAM) {
      englishLetter = "L";
    } else if (arabicLetter == MEEM) {
      englishLetter = "M";
    } else if (arabicLetter == NOON) {
      englishLetter = "N";
    } else if (arabicLetter == HEH) {
      englishLetter = "H";
    } else if (arabicLetter == WAW) {
      englishLetter = "W|U"; // u with bar on top
    } else if (arabicLetter == YEH) {
      englishLetter = "Y|I"; // i with bar on top
    } else if (arabicLetter == BLANK) {
      englishLetter = " ";
    }

    var englishLetterArray = englishLetter.split("|"); // array of letter choices to be appended
    letterCount = englishLetterArray.length;
    wordCount = englishText.length;

    // duplicate englishText array for each letter choice to be appended
    for (var letterIndex = 1; letterIndex < letterCount; letterIndex++) {
      for (var wordIndex = 0; wordIndex < wordCount; wordIndex++) {
        englishText[letterIndex * wordCount + wordIndex] =
          englishText[wordIndex];
      }
    }

    // append a different letter choice for each of the above duplications in englishText array
    for (var letterIndex = 0; letterIndex < letterCount; letterIndex++) {
      for (var wordIndex = 0; wordIndex < wordCount; wordIndex++) {
        englishText[letterIndex * wordCount + wordIndex] +=
          englishLetterArray[letterIndex];
      }
    }
  }
  var result = englishText.join(", ");
  if (navigator.appName == "Netscape" && result.length > 4094) {
    result = "line too long"; // javascript on N4 seems to choke if it's longer than that
  }
  return result;
}
