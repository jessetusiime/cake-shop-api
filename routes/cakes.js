const router = require("express").Router();
const cakesController = require("../controllers/cakes");
const isAuthenticated = require("../middleware/authenticate");

/* #swagger.tags = ['Cakes']
   #swagger.summary = 'Get all cakes'
   #swagger.description = 'Returns a list of all cakes'
*/
router.get("/", cakesController.getAllCakes);

/* #swagger.tags = ['Cakes']
   #swagger.summary = 'Get a cake by ID'
   #swagger.description = 'Returns a single cake by its ID'
   #swagger.parameters['id'] = { description: 'Cake ID' }
*/
router.get("/:id", cakesController.getSingleCake);

/* #swagger.tags = ['Cakes']
   #swagger.summary = 'Create a new cake'
   #swagger.description = 'Creates a new cake in the system'
   #swagger.parameters['body'] = {
       in: 'body',
       description: 'Cake information',
       required: true,
       schema: {
           $cakeName: 'Chocolate Fudge',
           $category: 'Birthday',
           $flavor: 'Chocolate',
           $size: '2kg',
           $price: 85000,
           $available: true,
           $stock: 12
       }
   }
*/
router.post("/", isAuthenticated, cakesController.createCake);

/* #swagger.tags = ['Cakes']
   #swagger.summary = 'Update a cake'
   #swagger.description = 'Updates an existing cake'
   #swagger.parameters['id'] = { description: 'Cake ID' }
   #swagger.parameters['body'] = {
       in: 'body',
       description: 'Updated cake information',
       required: true,
       schema: {
           cakeName: 'Chocolate Fudge Deluxe',
           category: 'Birthday',
           flavor: 'Chocolate',
           size: '3kg',
           price: 120000,
           available: true,
           stock: 8
       }
   }
*/
router.put("/:id", isAuthenticated, cakesController.updateCake);

/* #swagger.tags = ['Cakes']
   #swagger.summary = 'Delete a cake'
   #swagger.description = 'Deletes a cake by ID'
   #swagger.parameters['id'] = { description: 'Cake ID' }
*/
router.delete("/:id", isAuthenticated, cakesController.deleteCake);

module.exports = router;