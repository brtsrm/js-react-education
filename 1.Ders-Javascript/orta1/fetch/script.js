// fetch('veriler.json').then(res => {
fetch('https://jsonplaceholder.typicode.com/todos').then(res => {
    return res.json()
}).then(veri => {
    console.log(veri)
}).catch(err => {
    console.log(err)
});