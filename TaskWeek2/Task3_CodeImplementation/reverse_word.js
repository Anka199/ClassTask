function revers(str) {
    let string = str.split(" ");
    let newStr = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newStr += string[i] + " ";
    }

    return newStr;
}
console.log(revers('saya belajar javascript'));