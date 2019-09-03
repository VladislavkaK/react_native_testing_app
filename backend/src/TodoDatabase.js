const Database = require('./database');

class TodoDatabase extends Database { 

    constructor(databaseKey) {

        super(databaseKey);

    }

    createTask(title, folder) {

        this._data.tasks.push({
            title,
            folder
        });

        this.save();

    }

    updateTask(id, title, folder) {

        // TODO: Реализовать эту функцию
        // id - это индекс задачи в todoapp.json -> tasks: []
        // title - новый заголовок
        // folder - имя папки

        // находим по индексу задачу в this._data.tasks
        // изменяет ее свойства
        // сохраняем this.save();

        // если задача не найдена, то кидаем ошибку throw new Error();
        
        // про исключения
        // https://puzzleweb.ru/javascript/17_try_catch.php
        // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Error
        // https://learn.javascript.ru/exception

    }

}

module.exports = TodoDatabase;
