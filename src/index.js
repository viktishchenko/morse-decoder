const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let res = [];
  let phrase = [];
  for (i = 0; i < expr.length; i += 2) {
    switch (expr[i] + expr[i + 1]) {
      case '10':
        phrase += '.';
        break;
      case '11':
        phrase += '-';
        break;
      case '**':
        phrase += '';
        break;
      default:
        break;
    }

    if ((i + 2) % 10 === 0) {
      if (phrase === '') {
        res += ' ';
      } else {
        res += MORSE_TABLE[phrase];
        phrase = '';
      }
    }
  }
  return res;
}

module.exports = {
  decode,
};
