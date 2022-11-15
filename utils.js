import chalk from 'chalk';

export const logChallengeTitle = (challengeNumber = '00') => {
  console.log(chalk.bold.italic.bgCyanBright(`🚀 ### Challenge ${challengeNumber} ###`));
};

export const logSubmitCommand = (result) => {
  console.log(chalk.bold.magenta(`submit ${result}`));

}
