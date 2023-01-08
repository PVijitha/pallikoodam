// const language = [`c`, `c++`, `java`, `python`];
// language.forEach(lag => {
//     console.log(lag);
// });
// const language = [`c`, `c++`, `python`];
// language.forEach((item, index) => {
//     console.log(index, item);
// });
// const person = {
//     name: 'jone',
//     age: 20
// };
// console.log(person.name);
// const person = {
//     name: 'jone',
//     age: 20
// }
// person.name = 'new name';
// person.email = 'me@gmail.com';
// console.log(person);
// const person = {
//     name: 'jibi',
//     age: 26,
//     email: null

// };
// person.email = 'hai@123.com';
// console.log(person['age']);
// const person = {
//     name: 'jin',
//     age: 22,
//     experience: [
//         { 
//           company: 'company ABC',
//           years: 2

//     },
//     {
//         company: 'company WER',
//         years: 4
//     }
// ]
// };
// console.log(person.experience[0].company);
// const person = {
//     name: 'jin',
//     age: 22,
//     experience: [
//         { 
//           company: 'company ABC',
//           years: 2
//     },
//     {
//         company: 'company WER',
//         years: 4
//     }
// ]
// };
// person.experience.forEach(exp=>console.log(exp.company));
// const m1 = [
//     [1, 2],
//     [3, 4]
// ];
// console.log(m1);
// setTimeout(()=>{
//     console.log('code success');
// },5000);
// setInterval(()=>{
//     console.log('code success');
// },5000);
// setInterval(()=>{
//     console.log('code success');
// },5000);
// console.log('completed');
// const student = {
//     name: 'jomi',
//     mark1: 40,
//     mark2: 50,
//     total: function(){
//         const extramark = 5;
//         console.log(this.mark1 + this.mark2 + extramark);
//     }
// };
// student.total();
// const student = {
//     name: 'jomi',
//     mark1: 40,
//     mark2: 50
// };
// const copy = Object.assign({},student);
// copy.name = 'New Name';
// console.log(student);
// console.log(copy);
// const student = {
//     name: 'jomi',
//     mark1: 40,
//     mark2: 50
// };
// const copy = Object.assign({age: 22},student);
// copy.name = 'New Name';
// console.log(student);
// console.log(copy);
// const student = {
//     name: 'nivi'
// }
// const marks = {
//     mark1: '20',
//     mark2: '65'
// }
// const copy = Object.assign({},student,marks);
// console.log(copy);
//distructure
// const student = {
//       fullName: 'student 1',
//       mark1: 40,
//       mark2: 55
// };
// const{fullName,mark1} = student;
// console.log(fullName);
// const student = {
//     fullName: 'student 1',
//     mark1: 40,
//     mark2: 55
// };
// const keys = Object.keys(student);
// keys.forEach(keys=>{
//     console.log(student[keys]);
// })
const student = {
    fullName: 'student 1',
    mark1: 40,
    mark2: 55
};
const values = Object.values(student);
values.forEach(value => {
    console.log(value);
});