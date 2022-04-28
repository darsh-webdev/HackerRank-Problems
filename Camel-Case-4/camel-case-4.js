function processData(input) {
    //Enter your code here
    let newInput = input.split("\r\n");

    newInput.forEach((element) => {
    let commands = element.substring(0, 4);
    let restOfWord = element.substring(4);
    let inputString = [];
    const regexCap = /[A-Z]/g;
    
    if (restOfWord.endsWith('()')) {
      restOfWord = restOfWord.slice(0, restOfWord.length - 2);
    }
    
    for (let i = 0; i < restOfWord.length; i++) {
      if (restOfWord[i].match(regexCap)) {
        inputString.push(' ');
        inputString.push(restOfWord[i].toLowerCase());
      } else {
        inputString.push(restOfWord[i]);
      }
    }
    
    let newInput = inputString.join('').trim().split(' ');
    
    //Case S
    if (commands[0] === 'S') {
      console.log(newInput.join(' ').trim());
    }
    
    // Case C
    if (commands[0] === 'C') {
      let newString = [];
      newInput.forEach((e) => {
        newString.push(e[0].toUpperCase() + e.substring(1));
      });
      
      let firstLow = newString[0][0].toLowerCase() + newString[0].substring(1);
      
      let result = firstLow + newString.slice(1).join('');
      
      if (commands[2] === 'V') {
        console.log(result);
      } else if (commands[2] === 'M') {
        console.log(`${result}()`);
      } else {
        console.log(newString.join(''));
      }
    }
  });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
