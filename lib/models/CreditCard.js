const pool = require('../utils/pool.js');

class CreditCard {
  id;
  cc_number;
  cc_type;
  department;

  constructor(row) {
    this.id = row.id;
    this.cc_number = row.cc_number;
    this.cc_type = row.cc_type;
    this.department = row.department;
  }

  static async getAll() {
    const { rows } = await pool.query(`
		select
			*
		from
			credit_cards
		`);
    return rows.map((row) => new CreditCard(row));
  }
}

module.exports = { CreditCard };
