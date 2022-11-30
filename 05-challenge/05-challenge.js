import { logChallengeTitle, logSubmitCommand } from '../utils';
import { mecenas } from './mecenas';

const arrayRemove = (array, index) => array.filter((_, elementIndex) => elementIndex !== index);

function battle(items, die = 0, original = [...items]) {
  if (items.length === 1) {
    return {
      index: original.lastIndexOf(items[0]),
      user: items[0],
    };
  }

  const nextDie = (die + 1) % items.length;
  const itemsRemain = arrayRemove(items, nextDie);

  return battle(itemsRemain, nextDie, original);
}

export default function challenge05() {
  logChallengeTitle('05');

  const { user, index } = battle([...mecenas]);

  logSubmitCommand(`${user}-${index}`);
}
