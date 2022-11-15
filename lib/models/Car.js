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

  static async insert(car) {
    const { rows } = await pool.query(
      `
    insert into
      cars (vin, make, model, year)
    values
      ($1, $2, $3, $4)
    returning
      *
    `,
      [car.vin, car.make, car.model, car.year]
    );
    return new Car(rows[0]);
  }

  static async updateById(id, newAttributes) {
    const car = await Car.getById(id);

    if (!car) return null;

    const updatedCar = { ...car, ...newAttributes };

    const { rows } = await pool.query(
      `
    update
      cars
    set
      vin = $2,
      make = $3,
      model = $4,
      year = $5
    where
      id = $1
    returning
      *
    `,
      [id, updatedCar.vin, updatedCar.make, updatedCar.model, updatedCar.year]
    );
    return new Car(rows[0]);
  }
}

module.exports = { Car };
