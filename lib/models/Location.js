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
    if (!rows) return null;
    return new Location(rows[0]);
  }

  static async insert(location) {
    const { rows } = await pool.query(
      `
    insert into
      locations (street_address, latitude, longitude)
    values
      ($1, $2, $3)
    returning
      *
    `,
      [location.street_address, location.latitude, location.longitude]
    );
    return new Location(rows[0]);
  }
}

module.exports = { Location };
