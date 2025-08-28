function createCounter() {
    let counter = 0;


    // The main function above returns this function which can then be stored into a varialbe and used to call this function
    return () => counter += 1;

}

//Stores the function returned as a Variable that can be called as a function and used.
const increment = createCounter();

console.log(increment());
console.log(increment());
console.log(increment());




