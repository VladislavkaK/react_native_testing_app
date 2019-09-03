console.info('init');

const newTask = { title: 'Название', folder: 'Имя папки' };

fetch('/todoapp/task/create/', {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask),
}).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
});