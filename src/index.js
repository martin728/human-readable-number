function zeroCheck(formattedNumber) {
    return formattedNumber == "zero" ? '' : ' ' + formattedNumber;
}

module.exports = function toReadable(number) {
    let units = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    }
    let tens = {
        "2": "twenty",
        "3": "thirty",
        "4": "forty",
        "5": "fifty",
        "6": "sixty",
        "7": "seventy",
        "8": "eighty",
        "9": "ninety"
    }

    let res;
    let digits = number.toString().split('')

    if (number < 20) {
        res = units[number]
    } else if (number < 100 && digits.length == 2) {
        let dozen = tens[digits[0]]
        let unit = units[digits[1]]
        res = dozen + zeroCheck(unit);
    } else {
        let hundred = units[digits[0]] + ' hundred';
        let dozensAndUnits = toReadable((digits[1] == 0 ? '' : digits[1]) + digits[2])
        res = hundred + zeroCheck(dozensAndUnits)
    }
    return res;
}