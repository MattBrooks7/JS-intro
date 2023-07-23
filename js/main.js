// Array

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "ti-shirts", "jersey"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
// or
console.log(clothesShelfA[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportStore = [equipDept, clothesDept];
console.log(sportStore[0][0][1]);
console.log(sportStore[1][1][0]);

