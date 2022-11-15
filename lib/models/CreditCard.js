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

  static async getById(id) {
    const { rows } = await pool.query(
      `
    select
      *
    from
      credit_cards
    where
      id = $1
    `,
      [id]
    );
    if (!rows[0]) return null;
    return new CreditCard(rows[0]);
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

  static async insert(creditCard) {
    const { rows } = await pool.query(
      `
    insert into
      credit_cards (cc_number, cc_type, department)
    values
      ($1, $2, $3)
    returning *
    `,
      [creditCard.cc_number, creditCard.cc_type, creditCard.department]
    );
    return new CreditCard(rows[0]);
  }

  static async updateById(id, newAttributes) {
    const creditCard = await CreditCard.getById(id);

    if (!creditCard) return null;

    const updatedCard = { ...creditCard, ...newAttributes };

    const { rows } = await pool.query(
      `
    update
      credit_cards
    set
      cc_number = $2, 
      cc_type = $3, 
      department = $4
    where
      id = $1
    returning
      *
    `,
      [id, updatedCard.cc_number, updatedCard.cc_type, updatedCard.department]
    );
    return new CreditCard(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      `
    delete
      from credit_cards
    where
      id = $1
    returning
      *
    `,
      [id]
    );
    if (!rows) return null;
    return new CreditCard(rows[0]);
  }
}

module.exports = { CreditCard };
