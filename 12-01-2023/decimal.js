let num = document.getElementById("num");
let array = [];
function inputData(e) {
    e.preventDefault();
    array.push(document.form.number.value);
    console.log(array);
}
function numberHandle() {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
};

console.log(array);
