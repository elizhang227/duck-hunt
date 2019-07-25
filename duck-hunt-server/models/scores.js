const db = require('./conn.js');

class Scores {
    constructor(id, username, score) {
        this.id = id;
        this.username = username;
        this.score = score;
    }

    static async getAll() {
        try {
            const response = await db.any(`select * from scores;`);
            return response;
        } catch (err) {
            return err.message;
        }
    }

}

module.exports = Scores;