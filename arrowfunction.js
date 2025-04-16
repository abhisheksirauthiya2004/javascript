// console.log("hi");

// const doubleArrow = x => {
//     const result = x % 2;
//     console.log(`Doubling ${x} results in: ${result}`);
//     return result;
//   };
  
//   // Example usage:
//   let number = 5;
//   let doubledNumber = doubleArrow(number);
//   console.log(`The doubled number is: ${doubledNumber}`);
  
//   number = 10;
//   doubledNumber = doubleArrow(number);
//   console.log(`The doubled number is: ${doubledNumber}`);

const printFirstNCompositeArrow = (n) => {
    if (n <= 0) {
      console.log("Please enter a positive integer.");
      return;
    }
  
    const compositeNumbers = [];
    let num = 4; // The first composite number
  
    while (compositeNumbers.length < n) {
      let isComposite = false;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          isComposite = true;
          break;
        }
      }
      if (isComposite) {
        compositeNumbers.push(num);
      }
      num++;
    }
  
    // console.log(`The first ${n} composite numbers are:`);
    console.log(compositeNumbers.join(", "));
  };
  
  // Call the arrow function to print the first 10 composite numbers
  printFirstNCompositeArrow(10);