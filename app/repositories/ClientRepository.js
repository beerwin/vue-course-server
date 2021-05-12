const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

class ClientRepository {
    constructor() {
        this.filePath = '../data/data.json';
    }

    async index() {
        return await this.loadFile();
    }

    async create(item) {
        const data = await this.loadFile();
        item.id = uuidv4();
        data.push(item);
        await this.loadFile()
    }

    async read(id) {
        const data = await this.loadFile();
        const filteredData = data.filter(i => i.id === id);
        return filteredData.length > 0 ? filteredData[0] : null;
    }

    async update(id, item) {
        const data = await this.loadFile();
        const filteredData = data.filter(i => i.id === id);
        if (filteredData.length === 0) {
            throw new Error("Item not Found");
        }
        await this.saveFile(data.map(i => i.id === id ? item : i));
    }

    async delete(id) {
        const data = await this.loadFile();
        await this.saveFile(data.filter(i => i.id !== id));
    }

    loadFile() {
        this.data = JSON.stringify();
        return new Promise((resolve, reject) => {
            fs.readFile(this.filePath, 'utf8', (err, data) => {
                if (err) {
                    return reject(err);
                }
                return resolve(JSON.parse(data));
            });
        });
    }

    saveFile(data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.filePath, JSON.stringify(this.data), 'utf8', (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve();
            });
        })
    }
}