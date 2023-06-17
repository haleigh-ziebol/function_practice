//function reverses order of digits in a number
function numberReverse (number) {
    numberString = number.toString();
    let newString = "";
    for (let i = numberString.length-1; i >= 0; i--) {
        newString = newString + numberString.charAt(i);
    };
    return parseInt(newString, 10);
}

result1 = numberReverse(111332)
console.log(result1)

//function checks whether a passed string is a palindrome or not
function palindrome (string){
    let newString = "";
    for (let i = string.length-1; i >= 0; i--) {
        newString = newString + string.charAt(i);
    };
    if (newString == string) {
        return "Yeah, that's a palindrome alright"
    }
    else {
        return "Not a palindrome"
    }
}
console.log(palindrome("44044"))

//function converts the first letter of each word into upper case.
function capitalizeString (string){
    let stringArray = string.split(" ");
    let capArray = [];
    for (let i = 0; i< stringArray.length; i++){
        capArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1)
        }
    return capArray.join(" ");
}

console.log(capitalizeString("i love baseball."))

//function returns a string that has letters in alphabetical order
function alphabetString (string) {
    let stringArray = string.split("");
    sortedArray = stringArray.sort();
    return sortedArray.join("")
}
console.log(alphabetString("asdfiwern"));

//function finds the longest word within the string
//doesn't have a special case for ties
function longestWord (string) {
    let stringArray = string.split(" ");
    longWord = ""
    for (i = 0; i <stringArray.length; i++){
        if (stringArray[i].length > longWord.length){
            longWord = stringArray[i];
        }
    }
    return longWord
}
console.log(longestWord("I love rhinoceroses and platypuses."));

//function counts the number of vowels within the string
function countVowel(string){
    let vowelCount = 0;
    for (i = 0; i < string.length; i++){
        if (string.charAt(i) == 'a'|| string.charAt(i) == 'e' || string.charAt(i) == 'i'
        || string.charAt(i) == 'o'|| string.charAt(i) == 'u') {
            vowelCount++;
        }
    }
    return vowelCount;
}
console.log(countVowel("alksdjfnqewreiieioo"));

//function to get the number of occurrences of each letter