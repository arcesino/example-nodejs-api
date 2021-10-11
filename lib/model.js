const { Pool } = require('pg')
const pool = new Pool()

module.exports = {
  listProducts: async () => {
    const result = await pool.query('SELECT * FROM products')
    
    return result.rows
  },

  getProduct: async (productId) => {
    const result = await pool.query(
      'SELECT * FROM products WHERE id = $1',
      [productId]
    )

    return result.rows[0]
  }
}
