const pool = require('../utils/pool.js');

class Car {
  id;
  vin;
  make;
  model;
  year;

  constructor(row) {
    this.id = row.id;
    this.vin = row.vin;
    this.make = row.make;
    this.model = row.model;
    this.year = row.year;
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
    select
      *
    from
      cars
    where
      id = $1
    `,
      [id]
    );
    return new Car(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(`
		select
			*
		from
			cars
		`);
    return rows.map((row) => new Car(row));
  }
}

module.exports = { Car };
