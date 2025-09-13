const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

function sumArray(arr){
    //new variable for the sum
    //loop through array
    //add each value to the sum
    //return the total
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function sumArray2(arr) {
    let sum = 0;
    arr.forEach(item => sum += item);
    return sum;
}

console.log(sumArray2(studentCount));
