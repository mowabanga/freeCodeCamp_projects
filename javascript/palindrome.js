function palindrome(str) {
    const newStr = str.replace(/\W+|_/g, "");
    const reverseStr = newStr.split("").reverse().join("");

    if (reverseStr === newStr) {
        return true;
    } else {
        return false;
    }
}