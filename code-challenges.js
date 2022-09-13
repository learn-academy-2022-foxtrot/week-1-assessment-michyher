// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:
// My process was to first break up the question. I need to first compare two strings and determine which one has more characters. 
// This is a comparison based on certian criteria, this is why I chose to do an if/else conditional statement.
// Since the the variables fruit1 and fruit2 are already established I can map it out from there. 
// I first began with typing if (as if I was speaking to someone explaining what I want them to do)
// I know that I need to use .length because I want the communicate that I want the program to count the amount of characters.
// As I am writing it out, I say is at a sentence "if the length of fruit1 is greater than the length of fruit 2, then I want the outcome to be apple"
// Now that I have established the first scenerio, I know have to write out the second scenerio which is if banana had more characters, what would I want to happen?
// I then type out the code as if it were a logical sentence, since I had previously stated the first scenerio I need to add an else if which would be the equivalent to me telling someone "and this can happen to if the first one doesn't work"
// "If the length of fruit2 is larger than the length of fruit1, then I want the outcome to be banana"
// I then apply the same logic to set two!

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"
// if(fruit1.length > fruit2.length) {
//     console.log("apple")
// } else if(fruit2.length > fruit1.length) {
//     console.log("banana")
// }

// // Set two:
//  const fruit1 = "cherry"
//  const fruit2 = "kiwi"
// // Expected outcome: "cherry"
// if(fruit1.length > fruit2.length) {
//     console.log("cherry")
// } else if(fruit2.length > fruit1.length) {
//     console.log("kiwi")
// }

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
// First I broke up the question into parts: below, above, exact
// I then knew that I was going to be comparing with criteria which is why I knew to use if/else conditional staements.
// Going on from here, I began with the first set of criteria which was "what if a number is below the boiling point?"
// I then realized that the "boiling point" needed to be established as a variable since it is the anchor to what the temp is being compared to.
// I set boilingPoint to 212 since that's what the instructions said was the boiling point.
// From there, I began typing out the statement as if I were speaking to someone in a logical form: "if the temperature is less than the boiling point, then I want the outcome to say 'the temp is below the boiling point"
// I established this same logic for all scenerios such as greater than and strictly equal to.

// const temp = 42
// Expected output: "42 is below boiling point"
// let boilingPoint = 212

// if (temp < boilingPoint) {
//     console.log(temp, "is below boiling point") 
// } else if(temp > boilingPoint) {
//     console.log(temp, "is above boiling point")
// } else if(temp === boilingPoint) {
//     console.log(temp, "is at boiling point")
// }

//  const temp = 350
// Expected output: "350 is above boiling point"
// let boilingPoint = 212

// if (temp < boilingPoint) {
//     console.log(temp, "is below boiling point") 
// } else if(temp > boilingPoint) {
//     console.log(temp, "is above boiling point")
// } else if(temp === boilingPoint) {
//     console.log(temp, "is at boiling point")
// }

//  const temp = 212
// Expected output: "212 is at boiling point"
// let boilingPoint = 212

// if (temp < boilingPoint) {
//     console.log(temp, "is below boiling point") 
// } else if(temp > boilingPoint) {
//     console.log(temp, "is above boiling point")
// } else if(temp === boilingPoint) {
//     console.log(temp, "is at boiling point")
// }

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
// I knew that in needing to combine two arrays I was going to need an accessor since I don't need to change the original arrays, just combine them. 
// I looked at the syllabus and remembered that .concat() does exactly that
// In order to know that I was doing it correctly, I wrote out the code to combine the two arrays which was the first step.
// The next step was that the output needed to be the length of the newly combined arrays. 
// Since I knew that the .concat() code worked and knew the outcome, I established a new variable "padresBoth" which was the outcome of .concat()
// I then used the .length property to communicate that I wanted the character count of padresBoth

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// // Expected output: 9

// console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
// let padresBoth = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// console.log(padresBoth.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
// I split the directions into two sections which were splitting the letters (turing the string into an array), and I had to reverse the order.
// I began with turning the string into an array, I then reversed the order of the array
// After having the order that I wanted, I needed to turn the array back into a string
// const currentCohort = "Foxtrot 2022"
// Expected output: "2202 tortxoF"
// let stringToArray = currentCohort.split("")
// console.log(stringToArray.reverse())
// console.log(stringToArray.join(""))

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
// After looking at the array, I knew that the last time that 42 was displayed was index 7.
// I then used .lastIndexOf() in order to get the exptected output.
// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42
// Expected output: 7
// console.log(myNumbers.lastIndexOf(42))

// const givenValue2 = 10
// Expected output: 8
// console.log(myNumbers.lastIndexOf(10))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
// Knowing that I needed to sort out the array from least to greatest, I knew that I had to use the .sort() built in method.
// Once I ran that on the terminal, I needed to reverse the order it was outputting.
// I needed to go from least to greatest to greatest to least. 
// I assumed that a-b would need to be reversed in order to get the array from largest to smallest.

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
// sanDiegoSummerTemperatures.sort(((a, b) => b-a))
// console.log(sanDiegoSummerTemperatures)

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
// sanDiegoWinterTemperatures.sort(((a, b) => b-a))
// console.log(sanDiegoWinterTemperatures)