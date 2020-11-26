// 1
function createRandomArray(count, min, max) {
   const rand = () => Math.floor(Math.random() * (max - min) + min);
   const vals = [];
   while (count-- > 0) { vals.push(rand()) }
   return vals;
}
console.log(createRandomArray(10, 1, 13));

// 3
let averageArr = [1, 3, 3.4, 5, 2.6];
function getAverage(arr) {
                                                         // console.log(averageArr);
   arr = arr.filter((el, index) => {
      return Number.isInteger(el);
   });
                                                         // console.log(arr);
   let sum = 0;
   arr.forEach((number, index) => {
      sum += number;
   });
   return (sum / arr.length).toFixed(2);
};
console.log(getAverage(averageArr));

// 5
let arrayFilter = [1, 2, 2.2, 3, 3.1, 4, 5, 5.3, 6];
function filterEvenNumbers(arrayNumb) {
                                                         // console.log(arrayFilter);
   arrayNumb = arrayNumb.filter((element, index) => {
      return Number.isInteger(element);
   });
                                                         // console.log(arrayNumb);
   const res = arrayNumb.filter((number, index) => {
      return result = number % 2 == 1;
   });
   return res;
};
console.log(filterEvenNumbers(arrayFilter));

// 6
const array6 = [1, -2, 3, -4, -5, 6, 9];
function countPositiveNumbers(arr) {
   const filterPositiveNumbers = arr.filter((number, index) => {
      return number > 0;
   });
   const countNumber = filterPositiveNumbers.length;
   return countNumber;
}
console.log(countPositiveNumbers(array6));

// 7
const array7 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
function getDividedByFive(arr) {
   const res = arr.filter((number, index) => {
      return result = number % 5 == 0;
   })
   return res;
}
console.log(getDividedByFive(array7))

// 8
const text = 'Are you fuckingshit kidding?';
let stopWords = ['fuck', 'shit'];
function replaceBadWords(str) {
	let textArray = str.split(' ');
  let result = [];
  textArray.forEach((word, index) => {
    stopWords.forEach((stopWord, indexSw) => {
       if (word.indexOf(stopWord) > -1) {
        	word = word.replace(stopWord, '****');
       }
    });
    result.push(word);
  });
  return result.join(' ');
}
console.log(replaceBadWords(text));

// 9
const text9 = '   Areyoufuckingshitkidding?   ';
function divideByThree(word) {
  word = word.trim();
  let letters = word.split("");
  let result = [];
  let slog = '';
  letters.forEach((letter, index) => {
    slog += letter;
    if (slog.length == 3) {
    	result.push(slog);
      slog = '';
    }
  });  
  result.push(slog);
  return result.join(' ');
}
console.log(divideByThree(text9));
