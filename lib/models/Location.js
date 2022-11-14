const pool = require('../utils/pool.js');

class Location {
  id;
  street_address;
  latitude;
  longitude;

  constructor(row) {
    this.id = row.id;
    this.street_address = row.street_address;
    this.latitude = row.latitude;
    this.longitude = row.longitude;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    select
      *
    from
      locations
    `);
    return rows.map((row) => new Location(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
    select
      *
    from
      locations
    where
      id = $1
    `,
      [id]
    );
    return new Location(rows[0]);
  }
}

module.exports = { Location };
