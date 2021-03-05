module.exports = function toReadable (num) {
    let zeroTwenty = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", 
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    let dozens=["", "twenty", "thirty", "forty", "fifty", "sixty", "seventy" , "eighty", "ninety"];

    if (num < 20){
        return zeroTwenty[num];
    }
    num = num.toString().split("");

    if (num.length === 2){
        if (num[1] === "0"){
            return dozens[+num[0]-1];
        }
        return dozens[+num[0]-1] + " " + zeroTwenty[+num[1]];
    }

    if (num.length === 3){
        if(num[1] === "0" && num[2] === "0"){
            return `${zeroTwenty[+num[0]]} hundred`;
        }else if(num[1] === "1"){
            return `${zeroTwenty[+num[0]]} hundred ${zeroTwenty[+(num[1] + num[2])]}`;
        }else if(num[1] === "0"){
            return`${zeroTwenty[+num[0]]} hundred ${zeroTwenty[+num[2]]}`;
        }else if(num[2] === "0"){
            return `${zeroTwenty[+num[0]]} hundred ${dozens[+num[1]-1]}`;
        }else {
            return `${zeroTwenty[+num[0]]} hundred ${dozens[+num[1]-1]} ${zeroTwenty[+num[2]]}`;
        }
    }
  
}
