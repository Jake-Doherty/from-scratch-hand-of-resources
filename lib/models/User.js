const pool = require('../utils/pool.js');

class User {
  id;
  first_name;
  last_name;

  constructor(row) {
    this.id = row.id;
    this.first_name = row.first_name;
    this.last_name = row.last_name;
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
		select
			*
		from
			users
		where
			id = $1
		`,
      [id]
    );
    return new User(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(`
		select
			*
		from
			users
		`);
    return rows.map((row) => new User(row));
  }
}

module.exports = { User };
