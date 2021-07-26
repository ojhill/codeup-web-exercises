"use strict";

while (true){
    var oddNumber = parseInt(prompt("Pick an odd number between 1 and 50 & we will skip it."));
    if (oddNumber % 2 === 1 && oddNumber < 51 && oddNumber >=1){
        break;
    }
}
for (var i = 1; i<51; i+=2){
    if (i === oddNumber){
        console.log("Nope! Not that one: " + oddNumber);
        continue;
    }
    console.log(i);
}