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

  static async getById(id) {
    const { rows } = await pool.query(
      `
    select
      *
    from
      plants
    where
      id = $1
    `,
      [id]
    );
    if (!rows[0]) return null;
    return new Plant(rows[0]);
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

  static async insert(plant) {
    const { rows } = await pool.query(
      `
    insert into
      plants (common_name, plant_family, plant_scientific_name)
    values
      ($1, $2, $3)
      returning *
    `,
      [plant.common_name, plant.plant_family, plant.plant_scientific_name]
    );
    return new Plant(rows[0]);
  }

  static async updateById(id, newAttributes) {
    const plant = await Plant.getById(id);

    if (!plant) return null;

    const updatedPlant = { ...plant, ...newAttributes };

    const { rows } = await pool.query(
      `
    update
      plants
    set
      common_name = $2,
      plant_family = $3,
      plant_scientific_name = $4
    where
      id = $1
    returning *
    `,
      [
        id,
        updatedPlant.common_name,
        updatedPlant.plant_family,
        updatedPlant.plant_scientific_name,
      ]
    );

    return new Plant(rows[0]);
  }
}

module.exports = { Plant };
