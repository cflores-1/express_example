function moveZero(array) {
    let newArray = [];
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== 0) {
        newArray.push(array[i])
      } else {
        counter++
      }
    }
    for (let i=0; i < counter; i++){
      newArray.push(0);
    }
    return newArray;
}

let output = moveZero([0, 1, 0, 3, 12])
console.log(output)
//console.log(moveZero([0, 1, 0, 3, 12]));