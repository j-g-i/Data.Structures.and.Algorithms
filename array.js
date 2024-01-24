let numbers = 34;
let myArr = [77,34,16];
console.log(Array.isArray(numbers)); // displays false
console.log(Array.isArray(myArr)); // displays true

//Accessing and Writing Array Elements
let numberss = [];
for (let i = 0; i < 100; ++i) {
numberss[i] = i+1;
}
console.log(numberss)

let numbers2 = [1,2,3,4];
let sum = numbers2[0] + numbers2[1] + numbers2[2] + numbers2[3] +
numbers2[4];
console.log(sum); // displays 10

// Creating arrays as the result of calling the split() function on a string
const sentence = "lorem Lorem Ipsum es simplemente el texto de relleno de las imprentas"
let words = sentence.split("");
console.log(words);

// Adding and Removing Elements to and from an Array
let nums = [1,2,3,4,5];
console.log(nums); // 1,2,3,4,5
nums.push(6);
nums.pop();
console.log(nums); // 1,2,3,4,5
console.log(nums); // 1,2,3,4,5,6
let newnum = 0;
nums.unshift(newnum);
console.log(nums); // 0,1,2,3,4,5,6
let nums2 = [33, 44, 55];
nums2.unshift(newnum, 11, 22);
console.log(nums2); // 0, 11, 22, 33, 44, 55