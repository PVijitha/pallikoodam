const p = new Promise((resolve,reject) =>{
    const name = 'Java';
    resolve(name);
});
p.then(result=>console.log(result));
