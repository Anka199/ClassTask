function palindrom(str) {
    let string = str;
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += string[i];
    }
    if (newStr === str) return true;
    return false;
}
console.log(palindrom('anka'));