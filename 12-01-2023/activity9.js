let age = document.getElementById("age");

function inputData(e) {
    e.preventDefault();
    console.log(age);
if(age < 10){
    document.write("Kid");
    console.log("kid");
}
}