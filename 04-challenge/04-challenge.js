import { logChallengeTitle, logSubmitCommand } from '../utils';

const MIN_PASSWORD_LENGTH = 5;

function checkPassword(password) {
  /**
   * PASSWORD REQUIREMENTS:
   *
   * - 5 digits
   * - 5 number repetead at least twice
   * - Right number is always greater or equal to left number
   */
  const fiveCount = password.match(/5/g)?.length ?? 0;

  if (password.length < MIN_PASSWORD_LENGTH || fiveCount < 2) {
    return false;
  }

  let lastCharacter = '';

  return [...password].every((character) => {
    const isValid = Number(character) >= Number(lastCharacter);
    lastCharacter = character;

    return isValid;
  });
}

const generateRange = (start, end) => [...Array(end - start + 1).keys()].map((x) => x + start).map(String);

export default function challenge04() {
  logChallengeTitle('04');

  const passwordsRange = generateRange(11098, 98123);
  const validPasswords = passwordsRange.filter(checkPassword);

  const { length, [55]: passwordToSend } = validPasswords;

  if (passwordToSend !== '23555') throw new Error('Index 55 incorrect...');

  logSubmitCommand(`${length}-${passwordToSend}`);
}
