const pool = require('../utils/pool.js');

class Plant {
  id;
  common_name;
  plant_family;
  plant_scientific_name;

  constructor(row) {
    this.id = row.id;
    this.common_name = row.common_name;
    this.plant_family = row.plant_family;
    this.plant_scientific_name = row.plant_scientific_name;
  }

  static async getAll() {
    const { rows } = await pool.query(`
		select
			*
		from
			plants
		`);
    return rows.map((row) => new Plant(row));
  }
}

module.exports = { Plant };
