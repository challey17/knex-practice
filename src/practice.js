require("dotenv").config();
const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL,
});

const qry = knexInstance
  .select("product_id", "name", "price", "category")
  .from("amazong_products")
  .where({ name: "Point of view gun" })
  .first()
  .toQuery();
// .then(result => {
//   console.log(result)
// })

console.log(qry);

// function searchByProduceName(searchTerm) {
//   knexInstance
//     .select("product_id", "name", "price", "category")
//     .from("amazong_products")
//     .where("name", "ILIKE", `%${searchTerm}%`)
//     .then((result) => {
//       console.log(result);
//     });
// }

// searchByProduceName("holo");

/*You need to build a query that allows customers to paginate 
the amazong_products table products, 10 products at a time.

We'll use the LIMIT and OFFSET operators to achieve pagination. 
Limit tells us the number of items to display and offset 
will be the starting position in the list to count 
up to the limit from. Here's the SQL query we'll 
aim for (if showing page 1):*/

/*If we want page 4, to find the offset: 
we'd minus one from the page number (3), 
multiply this number by the limit, 10, giving us 30.*/

// function paginateProducts(page) {
//   const productsPerPage = 10;
//   const offset = productsPerPage * (page - 1);
//   knexInstance
//     .select("product_id", "name", "price", "category")
//     .from("amazong_products")
//     .limit(productsPerPage)
//     .offset(offset)
//     .then((result) => {
//       console.log(result);
//     });
// }

// paginateProducts(2);

/*You need to build a query that allows customers 
to filter the amazong_products table for 
products that have images. */

// function getProductsWithImages() {
//   knexInstance
//     .select("product_id", "name", "price", "category", "image")
//     .from("amazong_products")
//     // whereNotNull knex method
//     .whereNotNull("image")
//     .then((result) => {
//       console.log(result);
//     });
// }

// getProductsWithImages();

//mostPopularVideosForDays(30);
