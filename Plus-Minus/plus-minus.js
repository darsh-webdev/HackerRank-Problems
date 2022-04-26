'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let posNum = 0;
    let negNum = 0; 
    let zeroNum = 0;
    let size = arr.length;
    
    arr.forEach(ele => {
        if(ele === 0){
            zeroNum++;
        } else if (ele > 0){
            posNum++;
        } else {
            negNum++;
        }
    });
    
    console.log((posNum/size).toFixed(6));
    console.log((negNum/size).toFixed(6));
    console.log((zeroNum/size).toFixed(6));
    
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
