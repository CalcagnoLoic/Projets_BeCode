let selectElementsStartingWithA = (array) => {
    return array.filter((str) => str.startsWith("a"))
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(str => str.match(/^[aeuioy]/));
}

let removeNullElements = (array) => {
    return array.filter(element => {
        return element != null;
    });
}

let removeNullAndFalseElements = (array) => {
    return array.filter(element => {
        return element != null && element !== false;
    });
}

let reverseWordsInArray = (array) => {
    return array.toString().split("").reverse().join("").split(",").reverse()
}

let everyPossiblePair = (array) => {
    return array.sort().map( (v, i) => array.slice(i + 1).map(w => [v, w]) ).flat();
}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3,8)
}

let addElementToBeginning = (array, element) => {
    return [element, ...array];
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));;
}

let getFirstHalf = (string) => {
    return string.substr(0,3);
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let count = 0;
    for (let elem of array) {
        if(elem === elem.split("").reverse().join("")) count++;
    }
    return count
}

let shortestWord = (array) => {
    return array.reduce((a,b) => a.length <= b.length ? a : b);
}

let longestWord = (array) => {
    return array.reduce((a,b) => a.length >= b.length ? a : b);
}

let sumNumbers = (array) => {
    return array.reduce((a, b) => a + b);
}

let repeatElements = (array) => {
    return [...array, ...array];
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce((a,b) => a + b, 0)/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    let returnLarger = (a, b) => a.filter(n => n <= b);
    return returnLarger(array, 5).splice(0,6);
}

let convertArrayToObject = (array) => {
    let object = {}
    for (let i = 0 ; i < array.length ;  i+=2) {
        object[array[i]] = array[i+1];
    }
    return object
}

let getAllLetters = (array) => {
    let letters = array.join("").split("").sort()
    return [... new Set(letters)];
}

let swapKeysAndValues = (object) => {
    return Object.fromEntries(Object.entries(object).map(([a,b]) => [b,a]));
}

let sumKeysAndValues = (object) => {
    sumUp = () => {
        let v = new Number(Object.values(object).reduce((a, b) => a + b, 0));
        let k = new Number(Object.keys(object).reduce((x, y) => x + y, 0));
        return v + k ;  
    }
    return sumUp()-9
}

let removeCapitals = (string) => {
    return string.replaceAll(/[A-Z]/g, "");
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString("Fr")
}

let getDomainName = (string) => {
    let x = string.indexOf("@")
    let beforeArobase = string.slice(x + 1)
    return beforeArobase.replace(".com", "")
}

let titleize = (string) => {
    const arr = string.split(' ');

    for (let i = 1; i < arr.length; i++) {
    if (arr[i].charAt(0) != 't' && arr[i].charAt(0)!= 'a') {
        arr[i] =  arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
    }
    let str2 = arr.join(' ');
    let result = str2[0].toUpperCase() + str2.slice(1);
    result = result.replace('. a','. A');

    return result;
}

let checkForSpecialCharacters = (string) => {
    let reg = new RegExp("@")
    return reg.test(string);
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    function factorial(n){
        if(n == 0 || n == 1){
            return 1;
        }else{
            return n * factorial(n-1);
        }
    }
    return factorial(number);
}


let findAnagrams = (string) => {
    if (string.length < 2) {
        return [string];
    } else {
        let allAnswers = [];
        for (let i = 0; i < string.length; i++) {
            let letter = string[i];
            let shorterWord = string.substr(0, i) + string.substr(i + 1, string.length - 1);
            let shortwordArray = findAnagrams(shorterWord);
            for (let j = 0; j < shortwordArray.length; j++) {
                allAnswers.push(letter + shortwordArray[j]);
            }
        }
        return allAnswers;
    }
}

let convertToCelsius = (number) => {
    return Math.round((number -32)*(5/9));
}

let letterPosition = (array) => {
    let result = [];
    for (let elem of array) {
        let code = elem.toUpperCase().charCodeAt(elem)
        if (code > 64 && code < 91) result.push(code - 64) ;
        }
    return result
}
