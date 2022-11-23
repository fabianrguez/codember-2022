import colors from './colors.json' assert { type: 'json' };

function checkLightColors(colors) {
  // let maxZebraCount = 0;
  // let maxZebraColor = '';

  // let lastColor = '';
  // let nextColor = colors[0];
  // let currentZebraCount = 1;

  // colors.forEach((currentColor) => {
  //   if (currentColor !== nextColor || lastColor === currentColor) {
  //     currentZebraCount = 1; // reseto el contador
  //   }
  //   currentZebraCount++;
  //   nextColor = lastColor;
  //   lastColor = currentColor;
  //   if (currentZebraCount > maxZebraCount) {
  //     maxZebraCount = currentZebraCount;
  //     maxZebraColor = lastColor;
  //   }
  // });

  // return {
  //   maxZebraColor,
  //   maxZebraCount,
  // };
  let lastColor = '';
  let nextColor = colors[0];
  let count = 1;
  let maxCount = 0;
  let lastZebraColor = '';

  colors.forEach((currentColor) => {
    if (currentColor !== nextColor || lastColor === currentColor) {
      count = 1;
    }

    count++;

    nextColor = lastColor;
    lastColor = currentColor;

    if (count > maxCount) {
      maxCount = count;
      lastZebraColor = lastColor;
    }
  });

  return {
    count,
    lastColor: lastZebraColor,
  };
}

export default function challenge03() {
  const result = checkLightColors(colors);

  console.log(result);
}
