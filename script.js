
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('countButton').addEventListener('click', function() {
        const inputString = document.getElementById('inputString').value;
        if (inputString) {
            const result = characterCount(inputString);
            document.getElementById('result').innerText = JSON.stringify(result, null, 2);
        } else {
            document.getElementById('result').innerText = 'Please enter a string.';
        }
    });

    const characterCount = (str) => {
        const charCount = {};

        /*
        let str = "Hello world!";
        {
            "H": 1,
            "e": 1,
            "l": 3,
            "o": 2,
            ...
        }
        */
        let i = 0;
        for (const char in str) {
            if (str[i] in charCount) {
                charCount[str[i]] ++;
            } else {
                charCount[str[i]] = 1;
            }
            i ++;
        };
    console.log(charCount);
    return charCount;
    };
});




//     const characterCount = (str) => {
//         const charCount = {};
//         for (const char of str) {
//             if (char in charCount) {
//                 charCount[char]++;
//             } else {
//                 charCount[char] = 1;
//             }
//         }
//         console.log(charCount);
//         return charCount;
//     };
// });




// Loop over str, logging each character
// for (let i = 0; i < str.length; i++) {
//     const c = str[i];
//     console.log(c);
    // If the char is in charCount, add one to it
    // Otherwise, add char to the object and set its value to 1