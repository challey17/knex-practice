require("dotenv").config();
const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL,
});
//CHECK IF IT'S WORKING
// const qry = knexInstance
//   .select("id", "name", "price", "date_added", "category")
//   .from("shopping_list")

//   .then((result) => {
//     console.log(result);
//   });

// function searchByName(searchTerm) {
//   knexInstance
//     .select("id", "name", "price", "date_added", "checked", "category")
//     .from("shopping_list")
//     .where("name", "ILIKE", `%${searchTerm}%`)
//     .then((result) => {
//       console.log(result);
//     });
// }

// searchByName("fish");

/* Get all items paginated

A function that takes one parameter for pageNumber which 
will be a number
The function will query the shopping_list table using 
Knex methods and select the pageNumber page of rows 
paginated to 6 items per page.*/

// function paginateProducts(page) {
//   const productsPerPage = 6;
//   const offset = productsPerPage * (page - 1);
//   knexInstance
//     .select("id", "name", "price", "date_added", "checked", "category")
//     .from("shopping_list")
//     .limit(productsPerPage)
//     .offset(offset)
//     .then((result) => {
//       console.log(result);
//     });
// }

// paginateProducts(2);

function searchByDateAdded(daysAgo) {
  knexInstance
    .select("id", "name", "price", "date_added", "checked", "category")
    .from("shopping_list")
    .where(
      "date_added",
      ">",
      knexInstance.raw(`now() - '?? days':: INTERVAL`, daysAgo)
    )
    .then((result) => {
      console.log(result);
    });
}

searchByDateAdded(3);

function costPerCategory() {
  knexInstance
    .select("category")
    .sum("price as total")
    .from("shopping_list")
    .groupBy("category")
    .then((result) => {
      console.log("COST PER CATEGORY");
      console.log(result);
    });
}

costPerCategory();
