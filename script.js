
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

document.getElementById("test-object-btn").addEventListener("click", (e) => {
    const car = {
        make: "Toyota",
        model: "Corolla",
        year: 2020,
    };
    
    for (let key in car) {
        console.log(`${key}: ${car[key]}`)
    };
});

document.getElementById("comment-translation").addEventListener("click", (e) => {
    const user = {
        name: "John",
        age: 30,
        isAdmin: true
    };

    console.log(user);

    user.name = "Tim";
    user.city = "St. George";
    delete user.isAdmin;


    console.log(user);
});

document.getElementById("list-contents-btn").addEventListener("click", (e) => {
    const elements = {
      todos: [
        "wash dishes",
     "do laundry",
        "wash more dishes",
        "make dinner",
        "wash dishes...again",
      ],
      assets: ["Axel", "Bjørn"],
      investors: ["Kylie"],
    };

    for (const key in elements){
        console.log(key);
        for (const i of elements[key]){
            console.log("* " + i);
        };
        console.log("");
    };
  });