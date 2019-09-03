const fs = require('fs');

class Database { 

    constructor(databaseKey) {

        this._key = databaseKey;
        this._data = {};

        const data = fs.readFileSync(getStoragePath(this._key), 'utf8');
        this._data = JSON.parse(data);
  
    }

    getData() {
        return this._data;
    }

    save() {
        fs.writeFileSync(getStoragePath(this._key), JSON.stringify(this._data, null, 4), 'utf8');
    }

}

function getStoragePath(databaseKey) {
    return `${__dirname}/storage/${databaseKey}.json`;
}

module.exports = Database;
