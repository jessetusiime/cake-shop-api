const router = require("express").Router();
const ordersController = require("../controllers/orders");
const isAuthenticated = require("../middleware/authenticate");

/* #swagger.tags = ['Orders']
   #swagger.summary = 'Get all orders'
   #swagger.description = 'Returns a list of all customer orders'
*/
router.get("/", ordersController.getAllOrders);

/* #swagger.tags = ['Orders']
   #swagger.summary = 'Get an order by ID'
   #swagger.description = 'Returns a single order by its ID'
   #swagger.parameters['id'] = { description: 'Order ID' }
*/
router.get("/:id", ordersController.getOrderById);

/* #swagger.tags = ['Orders']
   #swagger.summary = 'Create a new order'
   #swagger.description = 'Creates a new customer order'
   #swagger.parameters['body'] = {
       in: 'body',
       description: 'Order information',
       required: true,
       schema: {
           $customerName: 'Jesse Tusiime',
           $phoneNumber: '0772123456',
           $cakeName: 'Chocolate Fudge',
           $quantity: 2,
           $totalPrice: 170000,
           $pickupDate: '2026-07-20',
           $status: 'Pending'
       }
   }
*/
router.post("/", isAuthenticated, ordersController.createOrder);

/* #swagger.tags = ['Orders']
   #swagger.summary = 'Update an order'
   #swagger.description = 'Updates an existing order'
   #swagger.parameters['id'] = { description: 'Order ID' }
   #swagger.parameters['body'] = {
       in: 'body',
       description: 'Updated order information',
       required: true,
       schema: {
           customerName: 'Jesse Tusiime',
           phoneNumber: '0772123456',
           cakeName: 'Chocolate Fudge',
           quantity: 3,
           totalPrice: 255000,
           pickupDate: '2026-07-22',
           status: 'Ready'
       }
   }
*/
router.put("/:id", isAuthenticated, ordersController.updateOrder);

/* #swagger.tags = ['Orders']
   #swagger.summary = 'Delete an order'
   #swagger.description = 'Deletes an order by ID'
   #swagger.parameters['id'] = { description: 'Order ID' }
*/
router.delete("/:id", isAuthenticated, ordersController.deleteOrder);

module.exports = router;