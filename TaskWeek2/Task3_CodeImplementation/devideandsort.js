function devideandsort(numb) {
    if (typeof numb == 'number') {
        let str = numb.toString().split("0")
        let string = str;
        let newStr = '';
        for (let i = 0; i < string.length - 1; i++) {
            newStr += string[i].split("").sort(function(a, b) { return a - b }).join("")
        }
        console.log(parseInt(newStr));
    } else {
        console.log("Input only numbers")
    }

}
devideandsort(5956560159466056)