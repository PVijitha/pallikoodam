// function doThisLongRunningTask(callback){
//     setTimeout(() =>{
//         const name = 'JavaScript';
//         callback(name);
//     }, 5000);
// }
// function showResult(result){
//     console.log(result);
// }
// doThisLongRunningTask(showResult);
// console.log('Hello');
// document.write('hello');
// fetch('https://reqres.in/api/users')
// .then(response => response.json())
// .then(data => console.log(data));
// .then(result => {
//     console.log(result.data);
// })
// fetch('https://reqres.in/api/users')
// .then(response => response.json())
// .then(main => main.data.forEach(element =>
//     console.log(element.email)
//     ));
const tbody = document.querySelector('#target');
fetch('https://reqres.in/api/users?page=2')
.then(response => response.json())
.then(result => {
    const users = result.data;
    users.forEach(user => {
        const row =`    
        <tr>
            <td>${user.id}</td>
            <td>
                <img src="${user.avatar}"height="50" >
            </td>
            <td>${user.first_name} ${user.last_name}</td>
            <td>${user.Email}</td>
        </tr>  `;    
        tbody.innerHTML += row;       
    });
    }
    )