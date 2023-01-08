let array = [4, 2, 5, 8, 9, 1];
let temp;
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}
console.log(array);