// const db = require('../database/database');
// const { v4: uuidv4 } = require('uuid');
// const uuid = uuidv4();

class Photo{
    constructor(url, region, title){
        this.url = url;
        this.region = region;
        this.uploaded_at = new Date(Date.now());
        this.title = title;
    }
    // async save(){
    //     const insertInfo = await db.query('INSERT INTO image_path(path, region, uploaded_at) VALUES (?,?,?)', [this.url, this.region, this.uploaded_at]);
    //     this.id = insertInfo[0].insertId;
    // }
}

module.exports = Photo;