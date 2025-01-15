// Abigail Trebon - JavaScript Review

//Task 1 - generate a random array
let randoGenerator = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
//log 20 random numbers
console.log(randoGenerator);


//Task 2 - find maximum element
let maxElement = Math.max.apply(Math, randoGenerator);
//log max number
console.log("Max Value:" + maxElement);


//Task 3 - find position of minimum element
//find min value
let minElement = Math.min.apply(Math, randoGenerator);
//find position of min value
let minElementIndex = randoGenerator.indexOf(minElement);
//log min number
console.log("Min Value:" + minElement);
//log position
console.log("Position of Min Value:", minElementIndex);


//Task 4 - sort array in descending order
randoGenerator.sort((a, b) => b - a);
//log sorted numbers
console.log("Sorted in Descending Order:" + randoGenerator);


//Task 5 - calculate average of object values
//create key-object pairs
let studentGrades = {
    Jane: 90,
    Jack: 87,
    Jenna: 75
};
//log student grades
console.log("Jane: 90, Jack: 87, Jane: 75");

//grade average function
function gradeAve(grades) {
    let total = 0;
    let count = 0;

    // Loop through each key-value pair in the object
    for (let student in grades) {
        total += grades[student];
        count++;
    }

    // Calculate the average
    return total / count;
}

//find average grade
let averageGrade = gradeAve(studentGrades);
//log grade
console.log("Average Grade:", averageGrade);