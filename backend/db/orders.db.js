import pool from "../config/db.js"

const createOrderDb = async ({
  cart_id,
  amount,
  itemTotal,
  userId,
  ref,
  paymentMethod,
}) => {
  // create an order
  const { rows: order } = await pool.query(
    "INSERT INTO orders(user_id, status, , total, ref, payment_method) VALUES($1, 'complete', $2, $3, $4, $5) returning *",
    [userId, amount, itemTotal, ref, paymentMethod]
  );

  // copy cart items from the current cart_item table into order_item table
  await pool.query(
    `
      INSERT INTO order_item(order_id,product_id, quantity) 
      SELECT $1, product_id, quantity from cart_item where cart_id = $2
      returning *
      `,
    [order[0].order_id, cart_id]
  );
  return order[0];
};

const getAllOrdersDb = async ({ user_id, limit, offset }) => {
  const { rowCount } = await pool.query(
    "SELECT * from orders WHERE orders.user_id = $1",
    [user_id]
  );
  const orders = await pool.query(
    `SELECT order_id, user_id, status, date::date, amount, total 
      from orders WHERE orders.user_id = $1 order by order_id desc limit $2 offset $3`,
    [user_id, limit, offset]
  );
  return { items: orders.rows, total: rowCount };
};

const getOrderDb = async ({ order_id, userId }) => {
  const { rows: order } = await pool.query(
    `SELECT products.*, order_item.quantity 
      from orders 
      join order_item
      on order_item.order_id = orders.order_id
      join products 
      on products.product_id = order_item.product_id 
      where orders.order_id = $1 AND orders.user_id = $2`,
    [order_id, userId]
  );
  return order;
};

export {
  createOrderDb,
  getAllOrdersDb,
  getOrderDb,
};
