import { logChallengeTitle, logSubmitCommand, readFile } from '../utils';

function decodeAsciiFile(file) {
  let words = [];
  const sentences = file.split('\n\n').map((row) => {
   row.split(' ').map((word) => {
        let count = 0;
        let char = '';

        word.split('').forEach((asciiChar) => {
          count = count * 10 + (asciiChar - '0');

          if (count >= 97 && count <= 122) {
            char += String.fromCharCode(count);
            count = 0;
          }
        });
        words += char + ' ';
      });

      return words.trim();
  });

  return sentences;
}

export function challenge02() {
  const filePath = `${process.cwd()}/02-challenge/mail.txt`;
  const file = readFile(filePath);

  logChallengeTitle('02');
  const decoded = decodeAsciiFile(file);

  decoded.forEach(logSubmitCommand);
}
