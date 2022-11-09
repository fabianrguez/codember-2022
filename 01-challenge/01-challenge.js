import fs from 'fs';
import chalk from 'chalk';
import { logChallengeTitle, logSubmitCommand } from '../utils';

const DATA_ATTRIBUTES = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

const filePath = `${process.cwd()}/01-challenge/users.txt`;
const fileReducedPath = `${process.cwd()}/01-challenge/users-reduced.txt`;
const file = fs.readFileSync(filePath, 'utf-8');
const fileReduced = fs.readFileSync(fileReducedPath, 'utf-8');

function countIncorrectUsers(usersFile) {
  const users = usersFile
    .split('\n\n')
    .map((user) => user.replaceAll('\n', ' ').split(/\s+/))
    .map((users) => Object.fromEntries(users.map((user) => user.split(':'))));

  const validUsers = users.filter((user) => DATA_ATTRIBUTES.every((attribute) => attribute in user));

  return {
    users: validUsers,
    count: validUsers.length,
  };
}

export function challenge01() {
  const { users, count } = countIncorrectUsers(file);

  const lastUser = users.at(-1);

  if (count !== 156) {
    throw new Error(`Count is wrong... Expected 156 and received ${count}`);
  }

  logChallengeTitle('01');
  console.log({ count, lastUser });
  logSubmitCommand(`${count}${lastUser.usr}`);
}
