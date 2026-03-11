const palindromes = function (str) {
    const cleanstr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleanstr.split('').reverse().join('');
    return cleanstr === reversed;
};

// Do not edit below this line
module.exports = palindromes;
